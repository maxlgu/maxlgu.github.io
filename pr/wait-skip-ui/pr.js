/* global done:false */
/* global error:false */
/* global PaymentRequest:false */

/**
 * Initializes the payment request object.
 */
function buildPaymentRequest() {
  if (!window.PaymentRequest) {
    return null;
  }

  var supportedInstruments = [{
    supportedMethods: 'https://bobbucks.dev/pay'
  }];

  var details = {
    total: {
      label: 'PENDING',
      amount: {
        currency: 'USD',
        value: '1.00',
        pending: true,
      },
    },
  };

  var request = null;

  try {
    request = new PaymentRequest(supportedInstruments, details);
    if (request.canMakePayment) {
      request
        .canMakePayment()
        .then(function(result) {
          info(result ? 'Can make payment' : 'Cannot make payment');
        })
        .catch(function(err) {
          error(err);
        });
    }
  } catch (e) {
    error("Developer mistake: '" + e + "'");
  }

  return request;
}

var request = buildPaymentRequest();
var is_buying = false;

/**
 * Launches payment request for credit cards.
 */
function onBuyClicked() {  // eslint-disable-line no-unused-vars
  if (is_buying) {
    error('Ignoring button press.');
    return;
  }

  if (!window.PaymentRequest || !request) {
    error('PaymentRequest API is not supported.');
    return;
  }

  is_buying = true;

  var spinner = document.createElement('i');
  spinner.classList = 'fa fa-refresh fa-spin';
  var button = document.getElementById('buyButton');
  button.appendChild(spinner);

  try {
    request
      .show(
        new Promise(function(resolve) {
          info('Calculating final price...');
          window.setTimeout(function() {
            button.removeChild(spinner);
            info('The final price is $2.00 USD.');
            resolve({
              total: {
                label: 'Donation',
                amount: {
                  currency: 'USD',
                  value: '2.00',
                  pending: false,
                },
              },
            });
          }, 5000); // 5 seconds.
        }),
      )
      .then(function(instrumentResponse) {
          instrumentResponse
            .complete('success')
            .then(function() {
              is_buying = false;
              done(
                'This is a demo website. No payment will be processed.',
                instrumentResponse,
              );
            })
            .catch(function(err) {
              is_buying = false;
              error(err);
              request = buildPaymentRequest();
            });
      })
      .catch(function(err) {
        is_buying = false;
        error(err);
        request = buildPaymentRequest();
      });
  } catch (e) {
    is_buying = false;
    error("Developer mistake: '" + e + "'");
    request = buildPaymentRequest();
  }
}

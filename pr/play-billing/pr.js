/**
 * Initializes the payment request object.
 * @return {PaymentRequest} The payment request object.
 */
function buildPayRequest(method) {
  if (!window.PaymentRequest) {
    return null;
  }

  let request = null;

  try {
    request = new PaymentRequest([{supportedMethods: 'https://play.google.com/billing', data: {sku: 'test-sku'}}]);
    if (request.canMakePayment) {
      request.canMakePayment().then(function(result) {
        info(result ? 'Can make payment' : 'Cannot make payment');
      }).catch(function(err) {
        error(err);
      });
    }
    if (request.hasEnrolledInstrument) {
      request.hasEnrolledInstrument().then(function(result) {
        info(result ? 'Has enrolled instrument' : 'No enrolled instrument');
      }).catch(function(err) {
        error(err);
      });
    }
  } catch (e) {
    error('Developer mistake: \'' + e.message + '\'');
  }

  return request;
}

/**
 * Handles the response from PaymentRequest.show().
 */
function handlePaymentResponse(response) {
    response.complete('success')
      .then(function() {
        done('This is a demo website. No payment will be processed.', response);
      })
      .catch(function(err) {
        error(err);
      });
}

/**
 * Launches payment request for Max Pay.
 */
function onMaxPayClicked() { // eslint-disable-line no-unused-vars
  onPayClicked("https://liquangumax.github.io/payment-manifest.json");
}

/**
 * Launches payment request for Play Store Billing.
 */
function onPlayStoreBillingClicked() { // eslint-disable-line no-unused-vars
  onPayClicked("https://play.google.com/billing");
}

function onPayClicked(method) { // eslint-disable-line no-unused-vars
  let request = buildPayRequest(method);
  if (!window.PaymentRequest || !request) {
    error('PaymentRequest API is not supported.');
    return;
  }

  try {
    request.show()
      .then(handlePaymentResponse)
      .catch(function(err) {
        error(err);
        request = buildPayRequest(method);
      });
  } catch (e) {
    error('Developer mistake: \'' + e.message + '\'');
    request = buildPayRequest(method);
  }
}

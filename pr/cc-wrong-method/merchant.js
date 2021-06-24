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
    supportedMethods: 
      'non-existent-method',
    
  }];

  var details = {
    total: {
      label: 'Donation',
      amount: {
        currency: 'USD',
        value: '55.00'
      }
    },
    displayItems: [{
      label: 'Original donation amount',
      amount: {
        currency: 'USD',
        value: '65.00'
      }
    }, {
      label: 'Friends and family discount',
      amount: {
        currency: 'USD',
        value: '-10.00'
      }
    }],
    modifiers: [{
      supportedMethods: 'basic-card',
      total: {
        label: 'Discounted donation',
        amount: {
          currency: 'USD',
          value: '45.00'
        }
      },
      additionalDisplayItems: [{
        label: 'VISA discount',
        amount: {
          currency: 'USD',
          value: '-10.00'
        }
      }],
      data: {
        discountProgramParticipantId: '86328764873265',
        supportedNetworks: ['visa'],
      }
    }]
  };

  var nonUSdetails = {
    total: {
      label: 'Donation',
      amount: {
        currency: 'USD',
        value: '60.00'
      }
    },
    displayItems: [{
      label: 'Original donation amount',
      amount: {
        currency: 'USD',
        value: '65.00'
      }
    }, {
      label: 'Friends and family discount',
      amount: {
        currency: 'USD',
        value: '-10.00'
      }
    }, {
      label: 'Export tax',
      amount: {
        currency: 'USD',
        value: '5.00'
      }
    }],
    modifiers: [{
      supportedMethods: 'basic-card',
      total: {
        label: 'Discounted donation',
        amount: {
          currency: 'USD',
          value: '50.00'
        }
      },
      additionalDisplayItems: [{
        label: 'VISA discount',
        amount: {
          currency: 'USD',
          value: '-10.00'
        }
      }],
      data: {
        discountProgramParticipantId: '86328764873265',
        supportedNetworks: ['visa'],
      }
    }]
  };

  var request = null;

  try {
    request = new PaymentRequest(supportedInstruments, details);
    if (request.canMakePayment) {
      request.canMakePayment().then(function(result) {
        info(result ? "Can make payment" : "Cannot make payment");
      }).catch(function(err) {
        error(err);
      });
    }

    if (request.hasEnrolledInstrument) {
      request.hasEnrolledInstrument().then(function(result) {
        info(result ? "Has enrolled instrument" : "No enrolled instrument");
      }).catch(function(err) {
        error(err);
      });
    }

    if (request.onpaymentmethodchange !== undefined) {
      request.addEventListener('paymentmethodchange', (evt) => {
        console.log('Payment method change event: ' + JSON.stringify({'methodName': evt.methodName, 'methodDetails': evt.methodDetails}, undefined, 2));
        if (evt.methodDetails && evt.methodDetails.billingAddress && evt.methodDetails.billingAddress.country) {
          if (evt.methodDetails.billingAddress.country === 'US') {
            evt.updateWith(details);
          } else {
            evt.updateWith(nonUSdetails);
          }
        }
      });
    }
  } catch (e) {
    error('Developer mistake: \'' + e + '\'');
  }

  return request;
}

var request = buildPaymentRequest();

/**
 * Launches payment request for credit cards.
 */
function onBuyClicked() { // eslint-disable-line no-unused-vars
  if (!window.PaymentRequest || !request) {
    error('PaymentRequest API is not supported.');
    return;
  }

  try {
    request.show()
      .then(function(instrumentResponse) {
          instrumentResponse.complete('success')
            .then(function() {
              done('This is a demo website. No payment will be processed.', instrumentResponse);
            })
            .catch(function(err) {
              error(err);
              request = buildPaymentRequest();
            });
      })
      .catch(function(err) {
        error(err);
        request = buildPaymentRequest();
      });
  } catch (e) {
    error('Developer mistake: \'' + e + '\'');
    request = buildPaymentRequest();
  }
}

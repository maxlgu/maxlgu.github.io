async function checkCanMakePayment(request) {
  if (!request.canMakePayment) {
    return;
  }

  try {
    const result = await request.canMakePayment();
    info(result ? 'Can make payment.' : 'Cannot make payment.');
  } catch (e) {
    error('Can make payment: ' + e.toString());
  }
}

async function checkHasEnrolledInstrument(request) {
  if (!request.hasEnrolledInstrument) {
    return;
  }

  try {
    const result = await request.hasEnrolledInstrument();
    info(result ? 'Has enrolled instrument.' : 'No enrolled instrument.');
  } catch (e) {
    error('Has enrolled instrument: ' + e.toString());
  }
}

const supportedInstruments = [{
  supportedMethods: 'https://skilful-reserve-239412.appspot.com/static/apps/pmc',
}];

const details = {
  total: {
    label: 'Payment',
    amount: {
      currency: 'USD',
      value: '0.99',
    },
  },
};

const globalDetails = {
  total: {
    label: 'Donation',
    amount: {
      currency: 'EUR',
      value: '1.11',
    },
  },
};

function buildPaymentRequest() {
  if (!window.PaymentRequest) {
    error('PaymentRequest API is not supported.');
    return null;
  }

  request = null;

  try {
    request = new PaymentRequest(supportedInstruments, details);
  } catch (e) {
    error('Payment request: ' + e.toString());
    return null;
  }


  if (request.onpaymentmethodchange !== undefined) {
    request.addEventListener('paymentmethodchange', (evt) => {
      console.log('Payment method change event: ' + JSON.stringify({'methodName': evt.methodName, 'methodDetails': evt.methodDetails}, undefined, 2));
      if (evt.methodDetails && evt.methodDetails.billingAddress && evt.methodDetails.billingAddress.country) {
        if (evt.methodDetails.billingAddress.country === 'US') {
          evt.updateWith(details);
        } else {
          evt.updateWith(globalDetails);
        }
      }
    });
  }

  checkCanMakePayment(request);
  checkHasEnrolledInstrument(request);

  return request;
}

function buildRejectPaymentRequest() {
  if (!window.PaymentRequest) {
    error('PaymentRequest API is not supported.');
    return null;
  }

  request = null;

  try {
    request = new PaymentRequest(supportedInstruments, details);
  } catch (e) {
    error('Payment request: ' + e.toString());
    return null;
  }


  if (request.onpaymentmethodchange !== undefined) {
    request.addEventListener('paymentmethodchange', (evt) => {
      evt.updateWith(Promise.reject('Merchant reject the paymentmethodchange event.'));
    });
  }

  checkCanMakePayment(request);
  checkHasEnrolledInstrument(request);

  return request;
}


function buildExceptionPaymentRequest() {
  if (!window.PaymentRequest) {
    error('PaymentRequest API is not supported.');
    return null;
  }

  request = null;

  try {
    request = new PaymentRequest(supportedInstruments, details);
  } catch (e) {
    error('Payment request: ' + e.toString());
    return null;
  }


  if (request.onpaymentmethodchange !== undefined) {
    request.addEventListener('paymentmethodchange', (evt) => {
      evt.updateWith(new Promise(() => {
        throw new Error('Error for test');
      }););
    });
  }

  checkCanMakePayment(request);
  checkHasEnrolledInstrument(request);

  return request;
}

let request = null;

async function onBuyClicked() { // eslint-disable-line no-unused-vars
  if (!request) {
    error('please build payment request first.');
    return;
  }

  try {
    const instrumentResponse = await request.show()
    await instrumentResponse.complete('success');
    done('This is a demo website. No payment will be processed.', instrumentResponse);
  } catch (e) {
    error(e.toString());
    request = buildPaymentRequest();
  }
}

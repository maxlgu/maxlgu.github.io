/* exported createPaymentCredential */
/* exported onBuyClicked */

const textEncoder = new TextEncoder();

/**
 * Creates a payment credential.
 */
async function createPaymentCredential(windowLocalStorageIdentifier) {
  const rp = {
    id: 'maxlgu.github.io',
    name: 'Max',
  };
  const instrument = {
    displayName: 'Max Pay',
    icon: 'https://maxlgu.github.io/pr/spc/troy.png',
  };
  const pubKeyCredParams = [{
    type: 'public-key',
    alg: -7,  // ECDSA, not supported on Windows.
  }, {
    type: 'public-key',
    alg: -257,  // RSA, supported on Windows.
  }];
  const authenticatorSelection = {
    authenticatorAttachment: 'platform',
    requireResidentKey: false,
    userVerification: 'discouraged',
  };
  const payment = {
    rp,
    instrument,
    challenge: textEncoder.encode('Transaction approval challenge'),
    pubKeyCredParams,
    authenticatorSelection,
    attestation: "none",
  };
  try {
    const publicKeyCredential = await navigator.credentials.create({payment});
    info("created publicKeyCredential: "+ publicKeyCredential);
    window.localStorage.setItem(
        windowLocalStorageIdentifier,
        btoa(String.fromCharCode(...new Uint8Array(
            publicKeyCredential.rawId))));
    info(windowLocalStorageIdentifier + ': Credential ' +
         window.localStorage.getItem(windowLocalStorageIdentifier) +
         ' enrolled.');
  } catch (err) {
    error(err);
  }
}

/**
 * Initializes the payment request object.
 * @return {PaymentRequest} The payment request object.
 */
async function buildPaymentRequest(windowLocalStorageIdentifier) {
  if (!window.PaymentRequest) {
    return null;
  }

  let request = null;

  try {
    // Documentation:
    // https://github.com/rsolomakhin/secure-payment-confirmation
    const supportedInstruments = [{
      supportedMethods: 'secure-payment-confirmation',
      data: {
        action: 'authenticate',
        credentialIds: [Uint8Array.from(
            atob(window.localStorage.getItem(windowLocalStorageIdentifier)),
            c => c.charCodeAt(0))],
        networkData: textEncoder.encode('network_data'),
        timeout: 60000,
        fallbackUrl: 'https://maxlgu.github.io/pr/spc/fallback'
      },
    }];

    const details = {
      total: {
        label: 'Total',
        amount: {
          currency: 'USD',
          value: '0.01',
        },
      },
    };

    request = new PaymentRequest(supportedInstruments, details);
  } catch (err) {
    error(err);
  }

  return request;
}

/**
 * Launches payment request for Android Pay.
 */
async function onBuyClicked(windowLocalStorageIdentifier) {
  if (!window.PaymentRequest) {
    error('PaymentRequest API is not supported.');
    return;
  }

  const request = await buildPaymentRequest(windowLocalStorageIdentifier);
  if (!request)
    return;

  try {
    const instrumentResponse = await request.show();
    await instrumentResponse.complete('success')
    info(windowLocalStorageIdentifier + ': your payment is successful!\n\n' + JSON.stringify(instrumentResponse, undefined, 2));
  } catch (err) {
    error(err);
  }
}

async function checkCanMakePayment(windowLocalStorageIdentifier) {
  if (!window.PaymentRequest) {
    error('PaymentRequest API is not supported.');
    return;
  }
  try {
    const request = await buildPaymentRequest(windowLocalStorageIdentifier);
    if (!request)
      return;
    const result = await request.canMakePayment();
    info(windowLocalStorageIdentifier + ': ' + (result ? 'Can make payment.' : 'Cannot make payment'));
  } catch (err) {
    error(err);
  }
}

/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}

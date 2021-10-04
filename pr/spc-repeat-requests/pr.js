/* exported createPaymentCredential */
/* exported onBuyClicked */
const textEncoder = new TextEncoder();

/**
 * Converts a base64 encoded string into Unit8Array.
 */
function base64ToArray(input) {
  return Uint8Array.from(atob(input), c => c.charCodeAt(0))
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
    const challenge = textEncoder.encode('network_data');
    const updatedInstrument = {
      displayName: 'Max Pay',
      icon: 'https://maxlgu.github.io/pr/spc/bobpaycc.png',
    };
    const supportedInstruments = [{
      supportedMethods: 'secure-payment-confirmation',
      data: {
        action: 'authenticate',
        credentialIds: [base64ToArray(window.localStorage.getItem(
          windowLocalStorageIdentifier))],
        instrument: updatedInstrument,
        networkData: challenge,
        challenge,
        timeout: 60000,
        payeeOrigin: window.location.origin,
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

async function repeatCreatingSpcRequests() {
  reloadIn1s();
  for (let i=0;i<100;i++) {
    console.log("iteration "+i);
    await buildPaymentRequest("id#"+i);
  }
}

function reloadIn1s() {
  info("Reload in 2s.");
  setTimeout(() => {
    window.location.reload();
  }, 2000);
}

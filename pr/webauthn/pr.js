
async function isUVPAA() {
    const result = await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
    info('isUserVerifyingPlatformAuthenticatorAvailable=' + result);
}

async function isUVPAAs() {
  await isUVPAA();
  await isUVPAA();
}
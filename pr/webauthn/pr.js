
async function isUVPAA() {
    const result = await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
    info('isUserVerifyingPlatformAuthenticatorAvailable=' + result);
}

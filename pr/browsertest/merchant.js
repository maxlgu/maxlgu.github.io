/**
 * Launches the payment handler.
 */
async function launch() { // eslint-disable-line no-unused-vars
  try {
    const request = new PaymentRequest([{supportedMethods: methodName}], {
      total: {label: 'Total', amount: {currency: 'USD', value: '0.01'}},
    });
    const response = await request.show();
    await response.complete('success');
    return 'success';
  } catch (e) {
    return e.toString();
  }
}
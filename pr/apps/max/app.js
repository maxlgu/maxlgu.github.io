self.addEventListener('paymentrequest', (evt) => {
    evt.respondWith({
        methodName: 'basic-card',
        details: {
            billingAddress: {
                addressLine: [
                    '5555 Yonge St',
                ],
                city: 'Toronto',
                country: 'CA',
                dependentLocality: '',
                languageCode: '',
                organization: 'DuckDuckGo',
                phone: '+15555555555',
                postalCode: '20190',
                recipient: 'Rouslan',
                region: 'VA',
                sortingCode: ''
            },
            cardNumber: '4111111111111111',
            cardSecurityCode: '123',
            cardholderName: 'Max',
            expiryMonth: '01',
            expiryYear: '2022',
        },
    });
});

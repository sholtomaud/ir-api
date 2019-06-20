const doTest = require('../../../helpers/privateHandlerTest')

const config = {
  handler: 'placeLimitOrder',
  params: {
    primaryCurrencyCode: 'Xbt',
    secondaryCurrencyCode: 'Aud',
    orderType: 'LimitBid',
    price: 12345.67,
    volume: 0.25
  },
  useDefaults: false,
  validation: {
    primaryCurrencyCode: ['isRequired'],
    secondaryCurrencyCode: ['isRequired'],
    orderType: ['isRequired'],
    price: ['isRequired'],
    volume: ['isRequired']
  }
}

doTest(config)

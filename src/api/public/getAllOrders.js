const { encode } = require('querystring')
const { getTransport } = require('../../utils/transport')
const validate = require('../../validation')

const { get } = getTransport()

const validation = {
  primaryCurrencyCode: ['isRequired'],
  secondaryCurrencyCode: ['isRequired']
}

const getAllOrders = async ({ primaryCurrencyCode, secondaryCurrencyCode }) => {
  const params = { primaryCurrencyCode, secondaryCurrencyCode }
  validate(params, validation)
  return get(`Public/GetAllOrders?${encode(params)}`)
}

module.exports = getAllOrders

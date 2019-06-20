const { encode } = require('querystring')
const { getTransport } = require('../../utils/transport')
const validate = require('../../validation')

const { get } = getTransport()

const validation = {
  primaryCurrencyCode: ['isRequired'],
  secondaryCurrencyCode: ['isRequired'],
  numberOfHoursInThePastToRetrieve: ['isRequired']
}

const getTradeHistorySummary = async ({
  primaryCurrencyCode,
  secondaryCurrencyCode,
  numberOfHoursInThePastToRetrieve
}) => {
  const params = {
    primaryCurrencyCode,
    secondaryCurrencyCode,
    numberOfHoursInThePastToRetrieve
  }
  validate(params, validation)
  return get(`Public/GetTradeHistorySummary?${encode(params)}`)
}

module.exports = getTradeHistorySummary

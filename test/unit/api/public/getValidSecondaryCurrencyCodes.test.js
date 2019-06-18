const { expect } = require('chai')
const { stub } = require('sinon')
const proxyquire = require('proxyquire')

describe('api/public/getValidSecondaryCurrencyCodes', () => {
  const expected = ['Aud', 'Usd', 'Nzd']

  const get = stub().resolves(expected)
  const transport = {
    getTransport: stub().returns({ get })
  }

  const method = proxyquire(
    '../../../../src/api/public/getValidSecondaryCurrencyCodes',
    {
      '../../utils/transport': transport
    }
  )

  const resetHistory = () => {
    transport.getTransport.resetHistory()
    get.resetHistory()
  }

  let result

  before(async () => {
    result = await method()
  })

  after(resetHistory)

  it('called getTransport', () => {
    expect(transport.getTransport).to.have.been.calledOnce
  })

  it('called get with the correct params', () => {
    expect(get).to.have.been.calledOnceWith(
      'Public/GetValidSecondaryCurrencyCodes'
    )
  })

  it('returned the expected result', () => {
    expect(result).to.deep.equal(expected)
  })
})
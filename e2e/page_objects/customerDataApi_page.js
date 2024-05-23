const { I } = inject();
const assert = require('assert');
const { generateBearerToken } = require('../support/helpers/generateToken_helper');

class CustomerDataApiPage {
  async postCreateConsent(permissions, expirationDateTime, status) {
    const token = generateBearerToken();
    const data = {
      data: {
        permissions: permissions,
        expirationDateTime: expirationDateTime
      }
    };

    const headers = {
      'Authorization': `Bearer ${token}`
    };

    const response = await I.sendPostRequest('/test-api/consents/v1/consents', data, headers);
    assert.equal(response.status, 201);

    const responseData = response.data.data;

    assert.ok(responseData.consentId);
    assert.strictEqual(responseData.clientId, 'client1');
    assert.strictEqual(responseData.status, status);
    assert.strictEqual(responseData.permission, permissions);
    const expectedExpirationDate = expirationDateTime.replace('.000Z', 'Z').replace('Z', '');
    const actualExpirationDate = responseData.expirationDatTime.replace('.000Z', 'Z').replace('Z', '');
    assert.strictEqual(actualExpirationDate, expectedExpirationDate);

    return responseData.consentId;
  }

  async putUpdateConsentStatus(consentId, status) {
    const token = generateBearerToken();
    const data = {
      data: {
        status: status
      }
    };

    const headers = {
      'Authorization': `Bearer ${token}`
    };

    const response = await I.sendPutRequest(`/test-api/consents/v1/consents/${consentId}`, data, headers);
    assert.equal(response.status, 200);

    const responseData = response.data.data;

    assert.strictEqual(responseData.status, status);

    return responseData;
  }

}

module.exports = new CustomerDataApiPage();


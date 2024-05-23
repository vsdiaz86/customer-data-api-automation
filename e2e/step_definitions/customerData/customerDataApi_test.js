const { I, CustomerDataApiPage } = inject();
const timeout = 60;
const assert = require('assert');


//#region .: Addying a new note by Api :.

Given('I create a consent by API with permission {string}', async (permissions) => {
  const expirationDateTime = "2024-12-21T13:54:31Z";
  const status = "AWAITING_AUTHORISATION"
  const response = await CustomerDataApiPage.postCreateConsent(permissions, expirationDateTime, status);
});

  Given('I created a consent and edited the status to {string}', async (newStatus) => {
    const expirationDateTime = "2024-12-21T13:54:31Z";
    const status = "AWAITING_AUTHORISATION";
    const permissions = "ACCOUNTS_READ"
    const consentId = await CustomerDataApiPage.postCreateConsent(permissions, expirationDateTime, status);
    await CustomerDataApiPage.putUpdateConsentStatus(consentId, newStatus);
  });

//#endregion
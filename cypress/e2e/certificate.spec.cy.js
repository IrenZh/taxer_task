import { BasePage } from "../models/basePage";

describe('The certificate data test', () => {
    
    const BASEPAGE = new BasePage()

    beforeEach(() => {
        BASEPAGE.openWebsite()
        BASEPAGE.clickRunButoon()
        BASEPAGE.clickAddButoon()
        BASEPAGE.dragAndDropFile()
      })

      it('Check uploading certificate', () => {
        BASEPAGE.verifyUploadingCertificate()
      })

      it('Check Subjects name on the certificate', () => {
        BASEPAGE.verifyNameSubject()
      })

      it('Check Issuers name on the certificate', () => {
        BASEPAGE.verifyNameIssuer()
      })

      it('Check Date from on the certificate', () => {
        BASEPAGE.verifyDateFrom()
      })

      it('Check Date till on the certificate', () => {
        BASEPAGE.verifyDateTill()
      })

})

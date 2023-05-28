let name = 'Таксер Тест Тестерович'
let issuer = 'Тестовий ЦСК АТ "ІІТ"'
let dateFrom = '2015-04-09'
let dateTill = '2017-04-09'

export class BasePage {

  openWebsite() {
    cy.visit('/')
  }

  getRunButton() {
    return cy.get('button[onclick="__runProject()"]')
  }

  getAddButton() {
    return cy.get('button.btn.btn-primary')
  }

  clickRunButoon() {
    this.getRunButton().click()
  }

  clickAddButoon() {
    this.getAddButton().click()
  }

  dragAndDropFile() {
    cy.fixture('certificates/cert.cer', 'base64').then((fileContent) => {
      const fileName = 'cert.cer'
      const mimeType = 'application/x-x509-ca-cert'
  
      const file = new File([Cypress.Blob.base64StringToBlob(fileContent, mimeType)], fileName)
      const dataTransfer = new DataTransfer()
      dataTransfer.items.add(file)
  
      cy.get('dropbox.dropbox.ng-isolate-scope').trigger('drop', { dataTransfer })
    })
  }
  
  verifyUploadingCertificate() {
    return cy.contains('th', 'SubjectCN:').should('exist')
  }

  verifyNameSubject() {
    return cy.contains('th', 'SubjectCN:').siblings('td').should('contain', name)
  }
  
  verifyNameIssuer() {
    return cy.contains('th', 'IssuerCN:').siblings('td').should('contain', issuer)
  }

  verifyDateFrom() {
    return cy.contains('th', 'ValidFrom:').siblings('td').should('contain', dateFrom)
  }

  verifyDateTill() {
    return cy.contains('th', 'ValidTill:').siblings('td').should('contain', dateTill)
  }

}

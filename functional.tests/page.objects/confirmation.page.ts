import BasePage from "./base.page.js";
class ConfirmationPage extends BasePage {
  protected get confirmationSection() {
    return $("#checkout_complete_container");
  }
  protected get confirmationHeader() {
    return $('[data-test="complete-header"]');
  }
  protected get confirmationMessage() {
    return $('[data-test="complete-text"]');
  }
  protected get backToHomeBtn() {
    return $("#back-to-products");
  }
  public async getConfirmationHeaderText(): Promise<string> {
    return (await this.confirmationHeader).getText();
  }
  public async getConfirmationMessage(): Promise<string> {
    return (await this.confirmationMessage).getText();
  }
  public async backToHome() {
    (await this.backToHomeBtn).scrollIntoView();
    (await this.backToHomeBtn).click();
  }
}
export default new ConfirmationPage();

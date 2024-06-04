import { $$ } from "@wdio/globals";
import  BasePage  from "./base.page.js";
class CheckoutPage extends BasePage{
  protected get firstNametxt() {
    return $('#first-name');
  }
  protected get lastNametxt() {
    return $('#last-name');
  }
  protected get postalCodetxt() {
    return $('#postal-code');
  }
  protected get continueBtn() {
    return $('#continue');
  }
  protected get cancelBtn() {
    return $('#cancel');
  }


  public async submitInfo(firstName:string,lastName:string,postalCode:string)
  {
    (await this.firstNametxt).addValue(firstName);
    (await this.lastNametxt).addValue(lastName);
    (await this.postalCodetxt).addValue(postalCode);
    (await this.continueBtn).click();
  }

}
export default new CheckoutPage();

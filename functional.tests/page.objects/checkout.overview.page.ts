import { $$ } from "@wdio/globals";
import BasePage from "./base.page.js";
export class CheckoutOverviewPage extends BasePage {
  protected get allInventoryItems() {
    return $$('[data-test="inventory-item"]');
  }
  protected inventoryName(index: number) {
    return this.allInventoryItems[index].$('[data-test="inventory-item-name"]');
  }
  protected inventoryDescription(index: number) {
    return this.allInventoryItems[index].$('[data-test="inventory-item-desc"]');
  }
  protected inventoryPrice(index: number) {
    return this.allInventoryItems[index].$(
      '[data-test="inventory-item-price"]'
    );
  }
  protected get finishBtn() {
    return $("#finish");
  }
  public async getInventoryName(index: number) {
    return await this.inventoryName(index).getText();
  }
  public async getInventoryDescription(index: number) {
    return await this.inventoryDescription(index).getText();
  }
  public async getInventoryPrice(index: number) {
    return await this.inventoryPrice(index).getText();
  }
  public async confirm() {
    (await this.finishBtn).scrollIntoView();
    (await this.finishBtn).click();
  }
}
export default new CheckoutOverviewPage();

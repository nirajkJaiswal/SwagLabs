import { $$ } from "@wdio/globals";
import  BasePage  from "./base.page.js";
class CartPage extends BasePage{
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
  protected get checkoutBtn() {
    return $('#checkout');
  }
  protected get continueShoppingBtn() {
    return $('#continue-shopping');
  }
  protected removeItemBtn(index: number) {
    return this.allInventoryItems[index].$("[id*=remove-sauce-]");
  }
  public async waitForPageLoad() {
    await this.removeItemBtn(0).waitForClickable();
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
  public async removeProduct(index: number) {
    await this.removeItemBtn(index).scrollIntoView();
    await this.removeItemBtn(index).waitForClickable();
    await this.removeItemBtn(index).click();
  }
  public async isInventoryItemsDisplayed(): Promise<boolean> {
    return await this.allInventoryItems.length>0;
  }
  public async checkout()
  {
    (await this.checkoutBtn).scrollIntoView();
    (await this.checkoutBtn).waitForClickable();
    (await this.checkoutBtn).click();
  }
  public async continueShopping()
  {
    (await this.continueShoppingBtn).scrollIntoView();
    (await this.continueShoppingBtn).waitForClickable();
    (await this.continueShoppingBtn).click();
  }
}
export default new CartPage();

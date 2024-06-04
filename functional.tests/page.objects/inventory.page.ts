import { $$ } from "@wdio/globals";
import BasePage from "./base.page.js";
export class InventoryPage extends BasePage {
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
  protected inventoryAddToCartBtn(index: number) {
    return this.allInventoryItems[index].$("[id*=add-to-cart]");
  }
  public async waitForPageLoad() {
    await this.inventoryAddToCartBtn(0).waitForClickable();
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
  public async addToCart(index: number) {
    await this.inventoryAddToCartBtn(index).scrollIntoView();
    await this.inventoryAddToCartBtn(index).waitForClickable();
    await this.inventoryAddToCartBtn(index).click();
  }
  public async isInventoryDisplayed(): Promise<boolean> {
    return (await this.allInventoryItems.length) > 0;
  }
  public async getInventoryCount(): Promise<number> {
    return await this.allInventoryItems.length;
  }
}
export default new InventoryPage();

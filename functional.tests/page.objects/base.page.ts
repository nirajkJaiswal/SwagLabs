import { $ } from "@wdio/globals";
import Logger from "../Utility/logger.js";
export default class BasePage {
  
  protected get menuBtn() {
    return $("#react-burger-menu-btn");
  }
  protected get cartBtn() {
    return $('[data-test="shopping-cart-link"]');
  }
  protected get cartItems() {
    return $('[data-test="shopping-cart-badge"]');
  }
  public async OpenMenu() {
    await this.menuBtn.scrollIntoView();
    await this.menuBtn.click();
  }
  public async viewCart() {
    await this.cartBtn.scrollIntoView();
    await this.cartBtn.click();
  }
  public async cartItemsCount(): Promise<number> {
    return parseInt(await this.cartItems.getText());
  }
}

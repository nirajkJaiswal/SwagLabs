import { LoginPage } from "./index";
import cartPage, { CartPage } from "./page.objects/cart.page.js";
import checkoutOverviewPage, { CheckoutOverviewPage } from "./page.objects/checkout.overview.page.js";
import checkoutPage, { CheckoutPage } from "./page.objects/checkout.page.js";
import confirmationPage, { ConfirmationPage } from "./page.objects/confirmation.page.js";
import inventoryPage, { InventoryPage } from "./page.objects/inventory.page.js";
import loginPage from "./page.objects/login.page.js";
 export class SwagLabsApp {
  loginPage:LoginPage;
  inventoryPage:InventoryPage;
  cartPage: CartPage;
  checkoutPage:CheckoutPage;
  overViewPage:CheckoutOverviewPage;
  confimationPage:ConfirmationPage;
  constructor() {
   this.loginPage= loginPage;
   this.inventoryPage=inventoryPage;
   this.cartPage=cartPage;
   this.checkoutPage=checkoutPage;
   this.overViewPage=checkoutOverviewPage;
   this.confimationPage=confirmationPage;
    
  }
  public async Launch() {
    browser.url("/");
    await browser.maximizeWindow();
  }
}
export default new  SwagLabsApp();
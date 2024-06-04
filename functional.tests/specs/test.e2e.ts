import { LoginData } from "../data/login.data.js";
import cartPage from "../page.objects/cart.page.js";
import checkoutOverviewPage from "../page.objects/checkout.overview.page.js";
import checkoutPage from "../page.objects/checkout.page.js";
import confirmationPage from "../page.objects/confirmation.page.js";
import inventoryPage from "../page.objects/inventory.page.js";
import loginPage from "../page.objects/login.page.js";
import { SwagLabsApp } from "../swag.labs.app.js";

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    new SwagLabsApp().Launch();

    await expect(loginPage.isLoginButtonEnabled()).toBeTruthy();
    await loginPage.login(
      LoginData.standard_user.username,
      LoginData.standard_user.password
    );
    await expect(
      (await inventoryPage.isInventoryDisplayed()).valueOf()
    ).toBeTruthy();
    await inventoryPage.addToCart(0);
    await expect((await inventoryPage.cartItemsCount()).valueOf()).toBe(1);
    await inventoryPage.viewCart();
    await cartPage.checkout();
    await checkoutPage.submitInfo("Niraj","kumar","411045");
    await checkoutOverviewPage.confirm();
    await expect( (await confirmationPage.getConfirmationHeaderText()).valueOf()).toBe("Thank you for your order!");
    await expect( (await confirmationPage.getConfirmationMessage()).valueOf()).toBe("Your order has been dispatched, and will arrive just as fast as the pony can get there!");
  });
});

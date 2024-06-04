import {
  And,
  Given,
  Then,
  When,
  InputData,
  LoginData,
  OutputData,
} from "../index.js";
import cartPage from "../page.objects/cart.page.js";
import checkoutOverviewPage from "../page.objects/checkout.overview.page.js";
import checkoutPage from "../page.objects/checkout.page.js";
import confirmationPage from "../page.objects/confirmation.page.js";
import inventoryPage from "../page.objects/inventory.page.js";
import loginPage from "../page.objects/login.page.js";
import SwagLabsApp from "../swag.labs.app.js";

describe("Swag Labs application", () => {
  it("Verify the e2e flow for complete checkout", async () => {
    Given("User launch the application");
    await SwagLabsApp.Launch();
    Then("Login page should display");
    await expect(loginPage.isLoginButtonEnabled()).toBeTruthy();
    When(`User login with ${LoginData.standard_user.username} `);
    await loginPage.login(
      LoginData.standard_user.username,
      LoginData.standard_user.password
    );
    Then("User should logged in and lands on inventory page");
    await expect(
      (await inventoryPage.isInventoryDisplayed()).valueOf()
    ).toBeTruthy();
    And("Added multiple items to cart");
    await inventoryPage.addToCart(
      Math.floor(
        Math.random() * (await inventoryPage.getInventoryCount()).valueOf()
      )
    );
    await inventoryPage.addToCart(
      Math.floor(
        Math.random() * (await inventoryPage.getInventoryCount()).valueOf()
      )
    );
    await inventoryPage.addToCart(
      Math.floor(
        Math.random() * (await inventoryPage.getInventoryCount()).valueOf()
      )
    );
    Then("Cart should be updated");
    await expect((await inventoryPage.cartItemsCount()).valueOf()).toBe(3);
    And("User open cart to view items");
    await inventoryPage.viewCart();
    Then("All items should display on cart");
    await expect((await cartPage.getInventoryItemsCount()).valueOf()).toBe(3);
    And("User proceed to checkout page");
    await cartPage.checkout();
    Then("User infor form should displaye");
    await expect(
      (await checkoutPage.isUserInfoDisplayed()).valueOf()
    ).toBeTruthy();
    And("User submit all the mandatory details");
    await checkoutPage.submitInfo(
      InputData.FirstName,
      InputData.LastName,
      InputData.PostalCode
    );
    And("User clicks on Finish button;");
    await checkoutOverviewPage.confirm();
    Then("Confirmation page should display");
    await expect(
      (await confirmationPage.getConfirmationHeaderText()).valueOf()
    ).toBe(OutputData.ConfirmationHeader);
    await expect(
      (await confirmationPage.getConfirmationMessage()).valueOf()
    ).toBe(OutputData.ConfirmationMessage);
  });
});

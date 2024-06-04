
import { LoginData } from "../data/login.data.js";
import loginPage from "../pageobjects/login.page.js";
import { SwagLabsApp } from "../swag.labs.app.js";
import log from "../Utility/log.js";

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
     new SwagLabsApp().Launch();
    // await navigation.launch();
    await loginPage.login(
      LoginData.standard_user.username,
      LoginData.standard_user.password
    );
    log.info("test message!")
    // await expect(SecurePage.flashAlert).toBeExisting();
  });
});

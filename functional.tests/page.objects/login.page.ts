import {$ } from "@wdio/globals";
class LoginPage {
  public get inputUsername() {
    return $("#user-name");
  }

  public get inputPassword() {
    return $("#password");
  }

  public get btnLogin() {
    return $("#login-button");
  }

  public async isLoginButtonEnabled(): Promise<boolean> {
    return await this.btnLogin.isEnabled();
  }
  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  public async login(username: string, password: string) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnLogin.click();
  }
}
export default new LoginPage();

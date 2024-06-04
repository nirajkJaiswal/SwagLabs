import { default as Reporter } from "@wdio/allure-reporter";

class Logger {
  public info(message: any) {
    Reporter.addStep(message);
  }
}
export default new Logger();

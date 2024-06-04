import { default as Reporter } from "@wdio/allure-reporter";

class Log {
  public info(message: string) {
    Reporter.addStep(message);
  }
}
export default new Log();

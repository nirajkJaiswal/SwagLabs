import { Reporter } from "../index.js";

class Logger {
  public info(arg0: any) {
    Reporter.addStep(arg0);
  }
}
export default new Logger();

export function Given(arg0: any) {
  Reporter.addStep("Given: " + arg0);
}
export function When(arg0: any) {
  Reporter.addStep("When: " + arg0);
}
export function Then(arg0: any) {
  Reporter.addStep("Then: " + arg0);
}
export function And(arg0: any) {
  Reporter.addStep("And: " + arg0);
}

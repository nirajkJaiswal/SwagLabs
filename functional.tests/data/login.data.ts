import { Icredential } from "./Icredential";
export class LoginData {
 static standard_user: Icredential = {
    username: "standard_user",
    password: "secret_sauce",
  };
 static locked_out_user: Icredential = {
    username: "locked_out_user",
    password: "secret_sauce",
  };
 static problem_user: Icredential = {
    username: "problem_user",
    password: "secret_sauce",
  };
 static performance_glitch_user: Icredential = {
    username: "performance_glitch_user",
    password: "secret_sauce",
  };
 static error_user: Icredential = {
    username: "error_user",
    password: "secret_sauce",
  };
 static visual_user: Icredential = {
    username: "visual_user",
    password: "secret_sauce",
  };
}
export default new LoginData();

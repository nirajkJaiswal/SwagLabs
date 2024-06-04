import  LoginPage  from "./pageobjects/login.page";
export class SwagLabsApp{
    
    // protected loginPage:LoginPage;
    /**
     *
     */
    constructor() {
    //    this.loginPage=new LoginPage();
        
    }
    public Launch()
    {
        browser.url('/');
        // return this.loginPage;
        // return LoginPage;
    }
}
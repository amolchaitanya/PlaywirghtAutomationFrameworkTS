import { Page } from "@playwright/test";
import HomePage from "./HomePage";

export default class LoginPage{

    private readonly usernameinputselector= '#username';
    private readonly passwordinputselector= '#password';
    private readonly loginbuttonselector= '#Login';

    constructor(private page:Page) {}
    
    async navigateToLoginPage() {
         await this.page.goto("/")
    }

    async fillUserName(){

        await this.page.fill(this.usernameinputselector,"username");
        
    }
    async fillPassword(){

        await this.page.fill(this.passwordinputselector,"Password");
        
    }

    async clickLoginButton(){
        await this.page.click(this.loginbuttonselector)
        .catch((error) => {
            console.error("Error Encountered:" + error);
            throw error;
        })
        

        const homePage = new HomePage(this.page);
        return HomePage;
    }

}



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

    async fillUserName(username:string ){
        
        await this.page.locator(this.usernameinputselector).fill(username);
        
    }
    async fillPassword(password:string){

        await this.page.locator(this.passwordinputselector).fill(password);
        
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



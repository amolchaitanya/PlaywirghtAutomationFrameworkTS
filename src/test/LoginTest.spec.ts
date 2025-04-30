import {test,expect} from '@playwright/test';
import LoginPage from '../pages/LoginPage';

test("LoginTest",async ({page}) =>{

  const loginPage =  new LoginPage(page);

  await loginPage.navigateToLoginPage();
  await loginPage.fillUserName("Test");
  await loginPage.fillPassword("Test");
  await loginPage.clickLoginButton();

}

);

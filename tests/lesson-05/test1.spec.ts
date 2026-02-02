import { test, expect } from '@playwright/test';

test('Bai 1: Dang ky thanh vien', async ({page}) => {
    //1. Truy cap trang chu
    await page.goto('https://material.playwrightvn.com/');
    //2. Click "Bai 1: Register Page"
    await page.locator("//a[text()='Bài học 1: Register Page (có đủ các element)']").click();
    //a. Nhập thông tin cho các field
    // Input Username
    await page.locator("//input[@id='username']").fill('Vanh');
    // Input Email
    await page.locator("//input[@id='email']").fill('Vanhnguyen@gmail.com');
    // Chon Gender (Radio button)
    await page.locator("//input[@value='female']").check();
    // Chon Hobbies (Checkbox)
    await page.locator("//input[@value='reading']").check();
    // Chon Interests 
    await page.locator("//select[@id='interests']").selectOption('Art');
    // Chon country
    await page.locator("//select[@id='country']").selectOption('canada')
    // Chon Date of Birth
    await page.locator("//input[@id='dob']").fill('1995-05-15');
    // Input Biography
    await page.locator("//textarea[@id='bio']").fill('I am...')
    //b. Click button Register
    await page.locator("//button[text()='Register']").click();
});
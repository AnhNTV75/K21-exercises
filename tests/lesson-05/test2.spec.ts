import { test, expect } from '@playwright/test';

test('Bài 2: Thêm sản phẩm bằng XPath', async ({ page }) => {
    // 1. Truy cập trang chủ
    await page.goto('https://material.playwrightvn.com/');
    // 2. Chọn Bài học 2 
    await page.locator("//a[text()='Bài học 2: Product page']").click();

    // a. Sản phẩm 1: Thêm 2 sản phẩm (Dùng data-product-id để định danh duy nhất)
    const btnProduct1 = page.locator("//button[@data-product-id='1']");
    for (let i = 0; i < 2; i++){
        await btnProduct1.click();
    }
    // b. Sản phẩm 2: Thêm 3 sản phẩm
    const btnProduct2 = page.locator("//button[@data-product-id='2']");
    for (let i = 0; i < 3; i++) {
        await btnProduct2.click();
    }
    // c. Sản phẩm 3: Thêm 1 sản phẩm
    const btnProduct3 = page.locator("//button[@data-product-id='3']");
    await btnProduct3.click();
});   
import { test, expect } from '@playwright/test';

test('Bài 3: Quản lý todo list bằng XPath', async ({ page }) => {
    // 1. Truy cập trang chủ
    await page.goto('https://material.playwrightvn.com/');
    // 2. Chọn Bài học 3
    await page.locator("//a[text()='Bài học 3: Todo page']").click();
    // a. Thêm mới 100 todo item có nội dung "Todo <i>"
    const inputTodo = page.locator("//input[@id='new-task']");
    const btnAdd = page.locator("//button[@id='add-task']");

    for(let i = 1; i <= 100; i++){
        await inputTodo.fill(`Todo ${i}`);
        await btnAdd.click();
    }

    // b. Xoá todo lẻ 
    for (let i = 1; i <= 100; i += 2){
        const xpathDelete = `//button[@id='todo-${i-1}-delete']`;
        await page.locator(xpathDelete).click();
    }

});   

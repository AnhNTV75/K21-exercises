import { test, expect } from '@playwright/test';

test('Bài 4: Personal notes', async ({ page }) => {
    // 1. Truy cập trang chủ
    await page.goto('https://material.playwrightvn.com/');
    // 2. Chọn Bài học 4
    await page.locator("//a[text()='Bài học 4: Personal notes']").click();
    // 10 data 
    const notesData = [
        {title: 'Click', content: 'Hàm click dùng để thực hiện click vào các phần tử trên trang web'},
        {title: 'Fill', content: 'Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web'},
        {title: 'Type', content: 'Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng'},
        {title: 'Hover', content: 'Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover'},
        {title: 'Check', content: 'Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked'},
        {title: 'Uncheck', content: 'Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked'},
        {title: 'SelectOption', content: 'Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown'},
        {title: 'Press', content: 'Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác'},
        {title: 'dblclick', content: 'Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web'},
        {title: 'dragAndDrop', content: 'Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web'},  
    ]
    // a. Thêm mới 10 note 
    for (const note of notesData){
        await page.locator("//input[@id='note-title']").fill(note.title);
        await page.locator("//textarea[@id='note-content']").fill(note.content);
        await page.locator("//button[@id='add-note']").click();
    }
    // b. Thực hiện search "một hoặc nhiều"
        await page.locator("//input[@id='search']").fill('một hoặc nhiều');

    });        
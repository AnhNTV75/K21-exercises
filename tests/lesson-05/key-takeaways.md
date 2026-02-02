---Lesson-05----
# Function advance
## Function expression
- Định nghĩa function bằng cách gán nó cho 1 biến 
## Lambda function 
- Một cách viết ngắn gọn hơn cho function, sử dụng dấu => có thể rút gọn cặp ngoặc nhọn và bỏ return
## Anonymous function 
- Function không có tên, sử dụng khi function chỉ cần dùng 1 lần or khi cần callback
## Ví dụ về 3 loại function phía trên 
// Function truyền thống 
function add(a, b){
    return a + b;
}
// Function expression 
const add = function(a, b){
    return a+b;
};
// Arrow function (Lambda)
const add = (a, b) => {
    return a+b;
};
//Anonymous function (không tên)
function() {
    console.log("Vanh");
}
// Anonymous function phải được sử dụng ngay -> Gán biến 
const anonymousFunc = function(){
    console.log("I'm anonymous but stored in a variable!")
}
# DOM
## Định nghĩa 
- Hiểu nôm na HTML là bản vẽ trên giấy còn DOM như 1 ngôi nhà trên thực tế có thể chạm vào và sửa được 
## Cấu trúc của DOM
- Gốc (Root): Là đối tượng document 
- Các nhánh và lá: là các thẻ HTML (như <body>, <div>, <a>)
## Cách DOM hoạt động 
- Tìm kiếm phần tử: Sử dụng XPath để trỏ vào vị trí phần tử trong DOM
- Tương tác: Dùng Playwright thực hiện hành động click(), goto() dựa trên các đối tượng đã được định nghĩa trong DOM
## Các thẻ tiêu chuẩn 
### Thẻ cấu trúc khung trang 
- <html>: Thẻ gốc của trang
- <head>: chứa metadata, tiêu đề website, hiển thi Google
- <body>: Nội dung của cả website
### Thẻ bố cục & ngữ nghĩa 
- <div>: Khối/ container chung 
- <span>: Inline container (phần tử nội tuyến)
- <header>, <footer>, <nav>, <section>: Thẻ ngữ nghĩa
### Thẻ nội dung 
- <h1> đến <h6>: Tiêu đề 
- <p>: Đoạn văn 
- <ul>, <ol>, <li>: Danh sách
### Thẻ tương tác & Media
- <a>: Liên kết
- <img>: Hình ảnh 
### Thẻ form 
- <form>: Biểu mẫu 
- <input>: Ô nhập liệu (text, password, checkbox, radio, etc.)
- <button>: Nút bấm
- <select> & <option>: Dropdown
- <textarea>: Vùng văn bản nhiều dòng
# Selector
## Định nghĩa: Selector là "công cụ định vị" để chỉ cho máy tính biết chính xác nó cần tương tác với phần tử nào trên trang web
## Có 3 loại Selector phổ biết sẽ dùng
### XPath -> Mạnh, dùng trong hầu hết các trường hợp (điểm yếu hơi dài)
- XPath tuyệt đối: Đi từ gốc (dễ hỏng nếu trang web có sự thay đổi -> ko nên dùng)
- XPath tương đối: Tìm trực tiếp đến phần tử mục tiêu, ví dụ //div[@id= 'ads-here']
### CSS Selector -> Ngắn gọn, ko linh hoạt bằng XPath
- Theo ID: #ads-here
- Theo Class: .container
- Theo thuộc tính: [href='login.html']
### Playwright Locators -> Chỉ dùng riêng cho Playwright
Cung cấp các phương thức "ngôn ngữ tự nhiên" hơn, giúp code dễ đọc và ổn định 
- Button: page.getByRole('button', {name: 'Send'})
- Link: page.getByRole('link, { name: 'Go Home'})
- Textbox: page.getByRole('textbox', {name: 'Input Name'})
- Checkbox: page.getByRole('checkbox', {name: 'Yes/No'})
- Heading: page.getByRole('heading', {name: 'Information'})
### MẸO
- Ưu tiên sự ổn định: Nên dùng id or data-testid vì ít thay đổi khi giao diện web cập nhật 
- Kiểm tra trực tiếp: F12 trình duyệt -> vào tab Console -> gõ $x('đường_dẫn_xpath') để thử nghiệm trước khi đưa vào code 

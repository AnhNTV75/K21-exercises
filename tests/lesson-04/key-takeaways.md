#Javascript (continue)
## Phạm vi của biến (Scope) 
-> giới hạn vùng biến có thể truy cập, có 3 loại phồ biến 
- Block scope (khối) -> Nằm trong cặp ngoặc nhọn
    - var: không giới hạn
    - let/const: bị giới hạn bên trong khối
- Function scope (hàm) -> Nằm trong function 
    - let, vả, const đều không thể truy cập từ bên ngoài
- Global scope -> Khai báo tự do
=> Note: Ưu tiên const, cần thay đổi giá trị dùng let, hạn chế dùng var
## Break & Continue (Dùng để điều khiển vòng lặp)
### Break: Thoát khỏi vòng lặp ngay lập tức
ex1:tìm thấy số 0 thì dừng 
let arr = [1, 8, 0, 6, 7];
for(let i = 0; i< arr.length; i++){
    if (arr[i] === 0) break; 
        break;
    console.log(i);
}
### Continue: Bỏ qua phần còn lại của vòng lặp hiện tại & chuyển sang lần lặp tiếp theo
ex2: bỏ qua số chia hết cho 3
for(let i = 0; i< 10; i++){
    if(i%3 ===0) continue;
    console.log(i);
}

## Câu đk nâng caooooo
### if...else (dùng cho 2 trường hợp) 
ex3: 
let money = 100; 
if (money >= 50){
    console.log("Giàu đấy");
}else{
    console.log("Chán ko buồn lói");
}
### if...else...if (nhiều hơn 2 trường hợp thì dùng)
ex4: 
let money = 100; 
if (money >= 50){
    console.log("Đại gia");
}else if (money >= 30){
    console.log("Thiếu gia");
}else{
    console.log("Dân đen");
}
### String Methods: Dùng khi lấy text từ giao diện web (UI)
- trim() -> bỏ khoảng trắng 2 đầu (trước, sau)
- trimStart() -> bỏ khoảng trắng bên trái 
- trimEnd() -> bỏ khoảng trắng bên phải
- toUpperCase()/ toLowerCase()  -> chuyển chữ viết thường sang viết hoa (và ngược lại)
- includes ("text") -> kiểm tra chuỗi có chứa "text" ko (lưu ý phân biệt đúng chữ hoa thường)
- split(" ") -> cắt chuỗi thành mảng dựa trên kí tự phân cách
- replace("a", "b") -> thay thế a = b
ex5: 
let text = "Vanh khuna";
console.log(text.replace("Vanh", "Minh");
### Array Methods (Xử lý danh sách)
1. Thêm/ Xoá phần tử
- .push(<val) -> thêm phần tử vào cuối mảng 
- .pop(): Xoá phần tử cuối
- .unshift(<val>) -> thêm phần tử vào đầu mảng
- .shift() -> Xoá phần tử đầu 
- .splice(index, deleteCount, item) -> Xử lý tại vị trí bất kì 
    - arr.splice(1, 1) : Xoá 1 phần tử tại vị tri index 1
    - arr.aplice(1, 0, "X"): Thêm X vào vị trí index 1 (ko xoá cái gì)
2. Duyệt và lịc mảng
- .find() -> trả về phần tử đầu tiên thoả mãn điều kiện
- .filter() -> Trả về mảng mới chứa tất cả phần tử thoả mãn đk
- .map() -> Trả về mảng mới bằng cách biến đổi từng phần tử của mảng cũ 
- .sort ((a,b) -> a-b) -> Sắp xếp mảng tăng dần 

## Mẹo chạy code nhanh
1. Mở trình duyệt mới
2. Chuột phải (Or nhấn F12)-> Inspect
3. Chọn tab Console -> Paste code và nhấn Enter



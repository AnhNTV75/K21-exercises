# Key Takeaways (3)
## JavaScript Basic
- let -> biến (thay đổi)
- const -> hằng (ko thay đổi)
- Object dùng `{}`
- Array dùng `[]`
- Truy cập object có 2 cách 
    - obj.prop
    - obj.["prop"]
- Thêm phần tử: array.push(value)
- Duyệt mảng 
     for (let i = 0; i< array.length; i++)
     ** lưu ý ko xài i<= lỗi đó

- Convention: đặt tên biến -> có nhiều loại nhưng sẽ dùng camelCase (chữ đầu viết thường, các chữ sau viết hoa chữa cái đầu tiên)

## Operators (Vài toán tử hay dùng)
- `=` -> gán giá trị 
- `+=` -> cộng rồi gán 
- `-=`, `*=`, `/=` -> tương tự 
- ex:
    - a += 2 -> a = a+2
    - a -= 1 -> a = a-1
    - a *= 2 -> a = a*2
    - a /= 5 -> a = a/5 
- `===` -> so sánh giá trị 
- `%` -> chia lâý dư 
    - number%2 === 0 ->  số chẵn 
    - number%2 !== 0 ->  số lẻ 

## Git
- git init -> khởi tạo repo
- git add <file> -> add file x vào staging
- git add . -> add all file vào staging area 
- git commit -m "msg" -> đưa file vào repo 
- git commit --amend -> sửa commit gần nhất
- git commit --amend -m "msg" -> sửa nhanh message 
- git restore --staged <file> -> bỏ file khỏi staging
- git reset HEAD~1 -> xoá commit gần nhất mà ko xoá file 
- git pull origin main -> lấy code về từ nhánh main (luôn pull code về tước khi tạo nhanh mới)
- .gitignore -> chỉ định file và thư mục không được theo dõi bởi Git (ex: câu hình cá nhân, api keys, passwords, certificates...)
- git branch <ten nhánh> -> tạo nhánh mới
- git checkout branch <ten nhánh> -> chuyển sang nhánh mới (chơi)
- git branch -D <ten nhánh> -> xoá nhánh (ko xoá chính nhánh đang đứng) 

## Markdown
### Tiêu đề 
- # -> tiêu đề cấp 1
- ## -> tiêu đề cấp 2
- ### -> tiêu đề cấp 3
### Nhấn mạnh văn bản 
- **in đậm** 
- *in nghiêng*
- ***vừa nghiêng vừa đậm***
### Danh sách 
- Mục 1
- Mục 2
 - Mục con 1
 - Mục con 2
### Link 
[Văn bản hiển thị](link)
### Hình ảnh 
![Văn bản thay thế](đường dẫn h/a.jpg)
### Trích dẫn 
> có thể note 1 or nhiều dòng 
>> trích dẫn lồng nhau
### code inline
`code` 
### kẻ ngang 
--- or ***
### bảng 
|cột 1| cột 2|
|dữ liệu 1| dữ liệu 2|
### Checkbox 
- [x] Nhiệm vụ đã hoàn thành 
- [] Nhiệm vụ chưa hoàng thành 







---Lesson-06: Git, Javascript advanced---
# Git 
## Git remote 
- Remote là các phiên bản của dự án được lưu trữ trên máy chủ từ xa (như GitHub, GitLab), giúp nhiều người có thể cùng cộng tác và chia sẻ code 
- Thay vì dùng URL dài dòng, mỗi remote được dán 1 tên ngắn gọn để dễ dàng thao tác 
- Tên remote phổ biến nhất thường là origin, trỏ thẳng đến kho lưu trữ gốc
- Một số lệnh phổ biến để quản lý remote
    - Xem danh sách remote hiện có: git remote -v
    - Thêm một remote mới: git remote add <tên> <url>
    - Đổi URL của remote: git remote set -url <ten> <new_url>
## Git clone, pull, push 
1. Clone: lấy toàn bộ lịch sử và mã nguồn từ một kho lưu trữ (repository) từ xa về máy tính cá nhân
    - Câu lệnh clone: git clone <link_repo> 
    - Đặt tên thư mục đích: git clone <link_repo> <tên_thư_muc>
2. Push: đưa các thay đổi đã được commit từ Local Repository lên Remote Repository để chia sẻ với mn
    - Câu lệnh push: git push <remote_name> <branch_name>
    - Lưu ý: Trước khi push, bắt buộc phải thực hiện git add và git commit để xác nhận các thay đổi
3. Pull: cập nhật mã nguồn từ Remote Repository về máy cá nhân
    - Bản chất: là kết hợp của 2 hành động Fetch (lấy code về) và Merge (gộp vào nhánh hiện tại)
    - Câu lệnh pull: git pull <remote_name> <branch_name>
    - Tính linh hoạt: Có thể pull từ một nhánh khác trên server để gộp trực tiếp vào nhánh đang đứng ở local
4. Stashing: cất tạm các thay đổi chưa hoàn thành vào 1 vùng nhớ đệm để làm sạch môi trường làm việc
    - Dùng khi: cần chuyển nhánh gấp or cần pull code mới về nhưng code hiện tại đang làm dở chưa muốn commit
    - Lưu tạm: git stash (hoặc git stash save "ghi chú")
    - Lâý lại công việc: git stash pop (lấy code ra và xoá bản lưu trong vùng nhớ tạm)
## Git convention (quy tắc chung)
1. Tại sao cần Convention?
    - Đồng bộ, làm việc theo 1 tiêu chuẩn thống nhất
    - Dễ quản lý, đoán định nội dung pull request
    - Tạo thói quen tốt khi làm việc trong dự án thực tế
2. Quy tắc đặt tên nhánh (branch naming)
Cấu trúc <type>/<short-description>-<name>
    Các type phổ biến: 
        - feat: (Feature) Phát triển tính năng mới 
        - fix: (Bug fix) Sửa lỗi code or logic 
        - conf: (Configuration) Thay đổi các file cấu hình
        - chore: (Lặt vặt) Các thay đổi không liên quan đến logic như xoá file rác, đổi tên file, cập nhật .gitignore
        - docs: (Tuỳ chọn thêm) Chỉ cập nhật tài liệu hoặc file .md

    Ex: git commit -m "feat: complete lesson 06 ..."
# Javascript
## Định nghĩa: Class là một "bản thiết kế" để tạo ra các đối tượng (object) có cùng cấu trúc và hành vi 
## Mục đích: Giúp tổ chức code gọn gàng, dễ tái sử dụng và quản lý dữ liệu hiệu quả hơn 
## Thành phần 1 class
    1. Hàm tạo (constructor)
    - Là hàm tự động chạy ngay khi dùng từ khoá new để tạo đối tượng 
    - Dùng để khởi tạo các giá trị ban đầu cho đối tượng
    2. Thuộc tính (properties)
    - Là các biến lưu tữ thông tin của đối tượng (như name, age, address)
    - Được truy cập thông qua từ khoá this (đại diện cho đối tượng hiện tại)
    3. Phương thức (methods)
    - Là hàm định nghiã hành động mà đối tượng có thể thực hiện (như displayInfo(), calculateGPA()

## Ví dụ 
class Student{
    //1. Hàm tạo
    constructor(name, classCode){
        this.name = name;
        this.classCode = classCode;
    }
    //2. Phương thức
    study(){
        console.log(`${this.name} đang học ...`);
    }
}
// Khởi tạo đối tượng 
const vanh = new Student("Vanh", "K21");
vanh.study();
// KQ: Vanh đang học....


        

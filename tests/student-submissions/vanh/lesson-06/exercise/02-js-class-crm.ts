// tạo class lưu trữ thông tin kh và các phương thức để thao tác dữ liệu 
// tạo class Customer theo y/c
class Customer{
    id: number;
    name: string;
    email: string;
    phone: string;

    constructor(id: number, name: string, email: string, phone: string){
        this.id = id; 
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

// thong tin khach hang
    displayInfo(): void{
        console.log(`---Thong tin khach hang---`);
        console.log(`ID: ${this.id}`);
        console.log(`Ten: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Sdt: ${this.phone}`);
    }

// phuong thuc updateEmail
    updateEmail(newEmail: string): void{
        this.email = newEmail;
        console.log(`Cap nhat email thanh cong cho k/h ${this.name}`)
    }
} 

// run
    const customer1 = new Customer(1, "Vanh", "vanh@gmail.com", "0987654321");
    customer1.displayInfo();
    customer1.updateEmail("vanh.new@gmail.com");
    customer1.displayInfo();

// run code = lệnh -> npx tsx tests/student-submissions/vanh/lesson-06/exercise/02-js-class-crm.ts
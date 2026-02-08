// tạo class chứa thuộc tính name, location, books
class Library{
    name: string;
    location: string;
    books: string[];

    constructor(name: string, location: string){
        this.name = name;
        this.location = location;
        this.books = []; //Khoi tao mang rong
    }
    // them sach vao thu vien
    addBook(bookTitle: string): void {
        this.books.push(bookTitle);
        console.log(`Them sach: "${bookTitle}" vao thu vien ${this.name}.`);

    }
    // tim sach theo tieu de
    findBook(title: string): string | null{
        const found = this.books.find(book => book.toLowerCase() === title.toLowerCase());

        if(found){
            console.log(`Tim thay: "${found}" dang co san tai ${this.location}.`);
            return found;
        }else{
            console.log(`Khong tim thay sach: "${title}".`);
            return null;
        }
    }
}
// Run test

const myLibrary = new Library("Thu vien Ha Noi", "Hoan Kiem");
myLibrary.addBook("Suoi Nguon");
myLibrary.addBook("Nhung ke au lo");

myLibrary.findBook("Nhung ke au lo");
myLibrary.findBook("Ac Y");

// 
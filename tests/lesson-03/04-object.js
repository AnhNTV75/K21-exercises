//1. tạo object car & in ra năm sx
const car = {
    make: "Toyota",
    model: 'Corolla',
    year: 2021
}
console.log(car.year)

//2 tạo object person -> in ra tên phố
const person = {
    name: "Vanh",
    address: {
        street: "Đặng Thái Thân",
        city: "Hue",
        country: "Vietnam"

    }
}
console.log(person.address.street);

//3 in ra điểm toán của Vanh
const student = {
    name: "Vanh",
    grades: {
        math: 10,
        english: 8,
    }
}
console.log(student.grades["math"]);

//4 thay đổi volume rồi in ra thông tin setting
let settings = {
    volume: 50,
    brightness: 100,
};
settings.volume = 80;
console.log(settings);

//5 thêm thuộc tính color 
const bike = {
    brand: "Honda",
    price: 50000
};
bike.color = "red"
console.log(bike);

//6 Xoá age 
let employee = {
    name: "Vanh",
    age: "18",
};
delete employee.age
console.log(employee);

//7 in ra tên hs class A, B
const school = {
    classA: ["An", "Binh", "Chau"],
    classB: ["Đào", "Hương", "Giang"],
}
console.log(school);


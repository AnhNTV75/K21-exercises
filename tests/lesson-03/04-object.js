//1
car = {
    make: "Toyota",
    model: 'Corolla',
    year: 2021
}
console.log(car.year)

//2
const person = {
    name: "Vanh",
    address: {
        street: "Đặng Thái Thân",
        city: "Hue",
        country: "Vietnam"

    }
}
console.log(person.address.street);

//3
student = {
    name: "Vanh",
    grades: {
        math: 10,
        english: 8,
    }
}
console.log(student.grades["math"]);

//4
let settings = {
    volume: 50,
    brightness: 100,
};
settings.volume = 80;
console.log(settings);

//5
let bike = {
    brand: "Honda",
    price: 50000
};
bike.color = "red"
console.log(bike);

//6
let employee = {
    name: "Vanh",
    age: "18",
};
delete employee.age
console.log(employee);

//7
const school = {
    classA: ["An", "Binh", "Chau"],
    classB: ["Đào", "Hương", "Giang"],
}
console.log(school);


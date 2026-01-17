//1. nhân
// function multiply(a, b){
//     return a*b;
// }
// console.log(multiply(2,3));
// console.log(multiply(4,5));

// 2. tìm min
// function findMin(a, b, c){
//     return Math.min(a, b, c);
// }
// console.log(findMin(10,5,7));
// console.log(findMin(100,500,7));

//3. 
// const students = [
//     { name: "Vanh", score: 9 },
//     { name: "Minh", score: 6 }
// ];

// function getTopStudents(students, threshold) {
//     const result = [];

//     for (let i = 0; i < students.length; i++) {
//         if (students[i].score >= threshold) {
//             result.push(students[i].name);
//         }
//     }
//     return result;

// }
// const topStudents = getTopStudents(students, 7);
// console.log(topStudents);

//4. 

// function calculateInterest(principal, rate, years) {
//     const total = principal + (principal * rate * years) / 100;
//     return total;
// }

// const total = calculateInterest(100, 5, 2);
// console.log(total);









function calculateInterest(principal, rate, years) {
    const total1 = principal + (principal * rate * years) / 100;
    return total1;
}
const total1 = calculateInterest(10, 2, 3);
console.log(total1);
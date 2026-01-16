//1. tính tổng 1 -> 100
const numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);

//2. in bảng cửu chương từ 2 -> 9
for (let i = 2; i <= 9; i++) {
    console.log(`Bang cuu chuong ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`)
    }
    console.log("----");
}

// 3. Tạo một mảng chứa các số lẻ từ 1 đến 99.
const oddNumber = [];
for (let i = 1; i <= 99; i += 2) {
    oddNumber.push(i);

}
console.log(oddNumber);

//4. In ra 10 email dựa trên tên người dùng và số thứ tự
for (let i = 1; i <= 10; i++) {
    console.log(`vanh${i}@gmai.com`)
}

//5. tính tổng doanh thu 1 năm 
let monthlyRevenue = [
    { month: 1, revenue: 100 },
    { month: 2, revenue: 200 },
    { month: 3, revenue: 300 },
    { month: 4, revenue: 400 },

]
let totalRevenue = 0;
for (let i = 0; i < monthlyRevenue.length; i++) {
    totalRevenue += monthlyRevenue[i].revenue;
}
console.log("Tong totalRevenue: ", totalRevenue);


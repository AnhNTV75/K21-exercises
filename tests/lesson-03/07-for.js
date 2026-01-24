//1. in bảng cửu chương từ 2->5, mỗi bảng nhân từ 1->10
for (let hang = 2; hang <= 5; hang++) {
    console.log(`\nBảng nhân ${hang}:`);

    for (let cot = 1; cot <= 10; cot++) {
        let ketQua = hang * cot;
        console.log(`${hang} x ${cot} = ${ketQua}`);
    }
    console.log("------");
}

// 2. đếm từ 1 -> 20 theo hàng 

let so1 = 1;

for (let hang = 1; hang <= 4; hang++) {
    let dong = "";

    for (let cot = 1; cot <= 5; cot++) {
        dong += so1 + " ";
        so1++;
    }
    console.log(dong);
}

// 3. in tam giác xuoi
function inTamGiacXuoi(n) {
    for (let i = 1; i <= n; i++) {
        let dong = "";

        for (let j = 1; j <= i; j++) {
            dong += j + " ";
        }
        console.log(dong);

    }

}
inTamGiacXuoi(3);

// 4. cap so co tong = 10
let arr = [2, 4, 6, 8, 3, 5, 7, 1];
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === 10) {
            console.log(`(${arr[i]} , ${arr[j]})`)
        }
    }
}

// 6. in tam giac nguoc 
function inTamGiacNguoc(n) {
    for (let i = n; i >= 1; i--) {
        let dong = "";

        for (let j = 1; j <= i; j++) {
            dong += j + " ";
        }
        console.log(dong);

    }

}

inTamGiacNguoc(3);

// 7. in lich thang (có 30 ngày) 

let so = 1;

for (let hang = 1; hang <= 5; hang++) {
    let dong = "";

    for (let cot = 1; cot <= 7 && so <= 30; cot++) {
        dong += so + " ";
        so++;
    }
    console.log(`Tuan ${hang}: `, dong);
}

// 9. Tinh tong các số chia hết cho 3 & 5

let tong = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
        tong += i;
    }
}
console.log(`Tong:`, tong);



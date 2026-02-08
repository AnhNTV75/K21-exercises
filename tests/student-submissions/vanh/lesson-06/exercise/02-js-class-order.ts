// SP bao gom thuoc tinh: name, price, amount, discount
interface Product{
    name: string;
    price: number; 
    amount: number;
    discount: number;
}

// QL Order
class Order{
    orderID: number;
    customerName: string;
    items: Product[];
    totalAmount: number;

    constructor(orderID: number, customerNumber: string){
        this.orderID = orderID;
        this.customerName = customerNumber;
        this.items = [];
        this.totalAmount = 0;
    }
// Them sp
    addItem(product: Product): void{
        this.items.push(product);
        console.log(`Them sp: ${product.name}`);

    }
// Tính tổng tiền bằng vòng lặp for...
    calculateTotal(): number{
        let sum = 0;

        for(const item of this.items){
            const itemPrice = item.price * item.amount * (1 - item.discount);
            sum += itemPrice;
        }
        this.totalAmount = sum;
        return this.totalAmount;
    }
}
// Run
const myOrder = new Order(123, "Vanh");
myOrder.addItem({name: "Laptop", price: 1000, amount: 1, discount: 0.1});
myOrder.addItem({name: "Mouse", price: 50, amount: 2, discount: 0});

const finalTotal = myOrder.calculateTotal()
console.log(`Tong bill cua khach hang ${myOrder.customerName} la: ${finalTotal}`);


export class Product {
    id;
    title;
    category;
    price;
    discountPercentage;
    constructor(id, title, category, price, discountPercentage) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.price = price;
        this.discountPercentage = discountPercentage;
    }
    displayDetails() {
        return `Product id: ${this.id} \n title: ${this.title} \n Category: ${this.category} \n Price: ${this.price} \n Discount Percentage: ${this.discountPercentage}`;
    }
    getPriceWithDiscount() {
        return this.price - this.price * (this.discountPercentage / 100);
    }
}

export class Product{
    id: number;
    title: string;
    category: string;
    price: number;
    discountPercentage: number;
    constructor(id:number, title:string, category: string, price: number, discountPercentage: number){
        this.id = id;
        this.title = title;
        this.category = category;
        this.price = price;
        this.discountPercentage = discountPercentage;
    }
    displayDetails(): string{
         return `Product id: ${this.id} \n title: ${this.title} \n Category: ${this.category} \n Price: ${this.price} \n Discount Percentage: ${this.discountPercentage}`;
    }
    getPriceWithDiscount(): number{
        return this.price - this.price * this.discountPercentage;
    }
}
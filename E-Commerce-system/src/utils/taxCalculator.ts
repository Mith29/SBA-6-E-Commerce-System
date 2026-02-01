import { Product} from "../models/product.ts";

export function calculateTax(product: Product): number{
if(product.category === "groceries")
    return product.price * 0.03;
else return product.price * 0.0475;


}

import { Product} from "../models/product.js";

export function calculateDiscount(product: Product): number{
    return product.price * (product.discountPercentage/100);
}
import { Product } from "../models/product.js";
export function calculateDiscount(product) {
    return product.price * (product.discountPercentage / 100);
}

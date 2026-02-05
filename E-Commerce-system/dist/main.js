import { Product } from "./models/product.js";
import { calculateDiscount } from "./utils/discountCalculator.js";
import { fetchAPIData, products } from "./services/apiService.js";
import { calculateTax } from "./utils/taxCalculator.js";
import { NetworkError, DataError } from "./utils/errorHandler.js";

const fetchButton = document.getElementById('fetchData');
fetchButton.addEventListener("click", main());
async function main() {
    try {
        await fetchAPIData();
    }
    catch (error) {
        if (error instanceof NetworkError) {
            console.log("Network Error", error.message);
        }
        else if (error instanceof DataError) {
            console.log("Data Error", error);
        }
        else {
            console.error("Unknown Error:", error);
        }
    }
    for (const product of products) {
        const item = new Product(product.id, product.title, product.category, product.price, product.discountPercentage);
        console.log(item.displayDetails());
        console.log("Price after discount: " + item.getPriceWithDiscount().toFixed(2));
        console.log("Discounted amount:" + calculateDiscount(item).toFixed(2));
        console.log("calculated tax for the product:" + calculateTax(item).toFixed(2));
        console.log("----------------------------------");
    }
}



import { Product } from "./models/product.js";
import { calculateDiscount } from "./utils/discountCalculator.js";
import { fetchAPIData, products } from "./services/apiService.js";
import { calculateTax } from "./utils/taxCalculator.js";
import { NetworkError, DataError } from "./utils/errorHandler.js";

const fetchButton = document.getElementById('fetchData');
const productContainer = document.getElementById('productContainer');
//Added event listener to fetch button to call main function on click
fetchButton.addEventListener("click", main);

// Main function to fetch data and display products
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
        return;
    }
    // clear previous results
       productContainer.textContent = ""; 

    // Display each product's details

    for (const product of products) {
        const item = new Product(product.id, product.title, product.category, product.price, product.discountPercentage);
          const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        // Title
        const title = document.createElement("h3");
        title.textContent = `ID: ${item.id} ${item.title}`;
        productDiv.appendChild(title);

        // Category
        const category = document.createElement("p");
        category.textContent = `Category: ${item.category}`;
        productDiv.appendChild(category);

        // Price
        const price = document.createElement("p");
        price.textContent = `Price: $${item.price.toFixed(2)}`;
        productDiv.appendChild(price);

        // Discount
        const discount = document.createElement("p");
        discount.textContent = `Discount: ${item.discountPercentage}%`;
        productDiv.appendChild(discount);

        // Price after discount
        const priceAfterDiscount = document.createElement("p");
        priceAfterDiscount.textContent = `Price after discount: $${item.getPriceWithDiscount().toFixed(2)}`;
        productDiv.appendChild(priceAfterDiscount);

        // Discounted amount
        const discountedAmount = document.createElement("p");
        discountedAmount.textContent = `Discounted amount: $${calculateDiscount(item).toFixed(2)}`;
        productDiv.appendChild(discountedAmount);

        // Tax
        const tax = document.createElement("p");
        tax.textContent = `Tax: $${calculateTax(item).toFixed(2)}`;
        productDiv.appendChild(tax);

        // Add the product div to the container
        productContainer.appendChild(productDiv);



        // console.log(item.displayDetails());
        // console.log("Price after discount: " + item.getPriceWithDiscount().toFixed(2));
        // console.log("Discounted amount:" + calculateDiscount(item).toFixed(2));
        // console.log("calculated tax for the product:" + calculateTax(item).toFixed(2));
        // console.log("----------------------------------");
    }
}



import { Product } from "../models/product.js";
import { NetworkError, DataError } from "../utils/errorHandler.js";



export let products: Product[];





export async function fetchAPIData(): Promise<void>{
    try{
        const response: Response = await fetch('https://dummyjson.com/products');
          if (!response.ok) {
      throw new NetworkError(`HTTP error! Status: ${response.status}`);
    }

        const data = await response.json(); // returns object of arrays
         products = data.products; //returns the array of products
        // console.log(products);
        //  for (let product of products) {
        //      console.log(`${product.id}: ${product.title}`);
    }
        

     catch(error)  {
        if (error instanceof NetworkError) {
          console.log("Network Error", error.message);
        } else if (error instanceof DataError) {
          console.log("Data Error", error);
        } else {
          console.error("Unknown Error:", error);
        }
      }
     
}

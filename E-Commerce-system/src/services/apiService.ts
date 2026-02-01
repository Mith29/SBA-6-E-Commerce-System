import { NetworkError, DataError } from "../utils/errorHandler.ts";




type Product = {
  id: number;
  title: string;
};


type ProductsResponse = {
  products: Product[];
};


async function fetchAPIData(): Promise<void>{
    try{
        const response = await fetch('https://dummyjson.com/products');
          if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

        const data = await response.json();
        const products = data.products;
        console.log(products);
         for (let product of products) {
             console.log(`${product.id}: ${product.title}`);
    }
        

    } catch(error)  {
        if (error instanceof NetworkError) {
          console.log("Network Error", error.message);
        } else if (error instanceof DataError) {
          console.log("Data Error", error);
        } else {
          console.error("Unknown Error:", error);
        }
      }
     
}
fetchAPIData();
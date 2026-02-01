type Product = {
  id: number;
  title: string;
};


type ProductsResponse = {
  products: Product[];
};


async function fetchApiData(): Promise<void>{
    try{
        const response = await fetch('https://dummyjson.com/products');
    //       if (!response.ok) {
    //   throw new Error(`HTTP error! Status: ${response.status}`);
    // }

        const data = await response.json();
        const products = data.products;
        console.log(products);
         for (let product of products) {
             console.log(`${product.id}: ${product.title}`);
    }
        

    } catch(e){
    console.error(e);
    }
}
fetchApiData();
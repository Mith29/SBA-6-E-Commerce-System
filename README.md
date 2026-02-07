How you implemented TypeScript features and OOP principles.
In this project, I used TypeScript to build a structured and maintainable E-commerce Product Management System. TypeScript ensured type safety and reduce runtime errors. I created a Product class with properties like id, title, category, price, and discount. The class also includes methods to display product details and calculate the price after discount.followed Object-Oriented Programming concepts I followed Object-Oriented Programming concepts:
Encapsulation: Product data and related functions are inside the Product class.
Abstraction: Discount and tax calculations are separated into utility files.
Modularity: The project is divided into models, services, and utils for better structure and reuse.


The challenges you encountered and how you overcame them.
One challenge was fetching data from an API because it is asynchronous and does not return data immediately. Sometimes the program tried to use the data before it was loaded. I solved this by using async/await to wait for the data and try/catch to handle network errors. This ensured the application worked smoothly even if the API failed.


How you handled asynchronous operations and error management.
I used async/await to fetch product data from the API. I wrapped the API call inside try/catch to handle network or data errors safely. Custom error classes helped identify different types of errors. This made the application stable even when something failed.

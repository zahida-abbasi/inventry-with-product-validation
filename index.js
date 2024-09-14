"use strict";
const products = [
    { productName: "Laptop", quantity: 10, price: 1200 },
    { productName: "Smartphone", quantity: 20, price: 800 },
    { productName: "Tablet", quantity: 15, price: 500 },
    { productName: "Headphones", quantity: 50, price: 100 }
];
// Function to display products in the table
function displayProducts(products) {
    const tableBody = document.querySelector("#inventoryTable tbody");
    if (tableBody) {
        tableBody.innerHTML = ""; // Clear existing rows
        products.forEach(product => {
            const row = document.createElement("tr");
            const nameCell = document.createElement("td");
            nameCell.textContent = product.productName;
            row.appendChild(nameCell);
            const quantityCell = document.createElement("td");
            quantityCell.textContent = product.quantity.toString();
            row.appendChild(quantityCell);
            const priceCell = document.createElement("td");
            priceCell.textContent = `$${product.price.toFixed(2)}`;
            row.appendChild(priceCell);
            tableBody.appendChild(row);
        });
    }
}
// Initial display of products
displayProducts(products);
// Function to handle the addition of a new product with validation
function addProduct() {
    // Get the input field elements
    const productNameInput = document.getElementById("productName");
    const productQuantityInput = document.getElementById("productQuantity");
    const productPriceInput = document.getElementById("productPrice");
    // Get the values from input fields
    const productName = productNameInput.value.trim();
    const quantity = parseInt(productQuantityInput.value);
    const price = parseFloat(productPriceInput.value);
    // Basic validation
    if (productName === "") {
        alert("Product Name cannot be empty.");
        return;
    }
    if (isNaN(quantity) || quantity <= 0) {
        alert("Quantity must be a positive number.");
        return;
    }
    if (isNaN(price) || price <= 0) {
        alert("Price must be a valid number greater than zero.");
        return;
    }
    // Add the new product to the array if validation passes
    products.push({ productName, quantity, price });
    // Clear the input fields after adding the product
    productNameInput.value = "";
    productQuantityInput.value = "";
    productPriceInput.value = "";
    // Update the table with the new product
    displayProducts(products);
}
// Add event listener to the "Add Product" button
const addProductBtn = document.getElementById("addProductBtn");
if (addProductBtn) {
    addProductBtn.addEventListener("click", addProduct);
}

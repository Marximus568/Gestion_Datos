# Simple Inventory Management Web App

This is a basic web-based inventory management application built with **HTML**, **CSS**, and **JavaScript**. The program allows users to manage a product inventory with essential CRUD operations (Create, Read, Update, Delete), and it also features different ways to display inventory data.

## 🚀 Features

### 🔧 Inventory Operations
Users can perform the following operations through a web form:

- **Add**: Insert a new product with a unique ID, name, and price.
- **Read**: Display product details by entering the corresponding ID.
- **Update**: Modify an existing product's name and price by ID.
- **Delete**: Remove a product from the inventory using its ID.

### 📋 Multiple Display Modes

1. **Complete Product List**  
   Shows all products in the inventory along with their ID, name, and price.

2. **Unique Product Names**  
   Displays a list of all unique product names using a JavaScript `Set`.

3. **Category-Product Map**  
   A separate inventory using a `Map` structure to associate product categories with a specific product (e.g., `"Electronics" -> "Laptop"`).  
   This map is currently static, but it can be modified to accept dynamic user input.

## 🧠 Technologies Used
- HTML5
- JavaScript (ES6)
- DOM Manipulation
- JavaScript `Object`, `Set`, and `Map`

## 📌 Notes
- Input validation is included to avoid invalid operations (e.g., negative prices, missing fields).
- All changes are handled in memory; no data is persisted after page reload.
- The app is useful for learning how to manipulate data structures in JavaScript and perform DOM updates dynamically.

## ✍️ Author
Designed and developed by **Marx Leal**.
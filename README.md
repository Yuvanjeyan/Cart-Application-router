# 🛒 Cart Application (React + Router + FakeStoreAPI)

A fully functional **React shopping cart application** built using **Fake Store API** with **React Router** for navigation between the Products page and Cart page.  
The app supports quantity management, dynamic price calculation, and discount handling.

---

## 🚀 Features

### 🏠 Product Page
- Fetches products from Fake Store API
- Displays product image, title, description, and price
- Responsive product grid layout
- Add to Cart button
- Shows "Remove from Cart" button if item already exists in cart

### 🛒 Cart Page
- Displays all cart items
- Shows:
  - Product name
  - Price
  - Quantity controls (+ / -)
  - Remove from Cart button
- Per-item total price based on quantity
- Displays cart total price
- Applies **10% discount** on total price
- Dynamically updates prices when quantity changes

### 🔀 Navigation
- React Router used for page navigation
- Separate routes for:
  - Products page
  - Cart page
- Cart count shown in navbar

---

## 🧰 Tech Stack

- **React**
- **React Router DOM**
- **JavaScript (ES6+)**
- **CSS (Flexbox & Grid)**
- **Fake Store API**

---

## 🔗 API Used

https://fakestoreapi.com/products

---

## 📂 Project Structure
<img width="262" height="664" alt="image" src="https://github.com/user-attachments/assets/c375d666-98a0-4ccf-886c-30755e862cca" />

Copy code

---

## 🧠 Key Concepts Implemented
- React Hooks (useState, useEffect)
- Component-based architecture
- State lifting for cart management
- Conditional rendering
- Quantity-based price calculation
- Discount logic
- Client-side routing with React Router
- Responsive UI using CSS Grid & Flexbox

---

## 🔗 Deployment URL

https://cart-router-application.netlify.app/

# 🍽️ Food Genie - AI Powered Food Ordering Platform

Food Genie is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) food ordering platform designed to provide a smooth restaurant discovery and online ordering experience.

The application allows users to explore restaurants, browse food menus, manage carts, place orders, and view AI-powered review insights. It also includes an admin management system for handling restaurants and food items.

---

## 🚀 Features

### 👤 User Features

- Secure user registration and login
- JWT based authentication
- User profile management
- Profile picture upload with Cloudinary
- Browse available restaurants
- Search restaurants by name
- Filter pure vegetarian restaurants
- Sort restaurants by ratings and reviews
- View restaurant menus
- Add food items to cart
- Update item quantity
- Remove items from cart
- Place food orders
- View order history

---

### 🤖 AI Review Intelligence

Food Genie includes AI-powered restaurant review analysis to help users understand customer feedback quickly.

Features include:

- Automatic review summarization
- Customer sentiment analysis
- Positive, negative, and mixed feedback detection
- Extraction of frequently mentioned topics
- Smart restaurant insights from user reviews

---

### 🛠️ Admin Features

- Role based admin access
- Add new restaurants
- Delete restaurants
- Manage food items
- Delete menu items
- Generate AI review summaries
- Manage platform content securely

---

## 🛒 Ordering System

- Dynamic cart management
- Quantity increase/decrease
- Stock validation
- Order creation
- User order tracking
- Secure checkout workflow

---

## 💳 Payment Integration

Integrated Stripe payment gateway for secure online payments.

Features:

- Secure payment processing
- Checkout session handling
- Payment verification

---

## ☁️ Image Management

Cloudinary integration is used for:

- User profile images
- Restaurant images
- Food item images
- Optimized cloud storage

---

# 🛠️ Tech Stack

## Frontend

- React.js
- Redux
- React Router DOM
- Axios
- Bootstrap
- CSS3

---

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- REST APIs

---

## Third Party Services

- Cloudinary
- Stripe Payment Gateway

---

# 📂 Project Structure

```
FoodGenie/

├── frontend/
│
│── src/
│   ├── components/
│   ├── redux/
│   ├── actions/
│   ├── reducers/
│   └── App.jsx


├── backend/

│── controllers/
│── models/
│── routes/
│── middlewares/
│── utils/
│── server.js
│── app.js
```

---

# ⚙️ Installation & Setup

Clone the repository:

```bash
git clone your-repository-url
```

---

## Backend Setup

Move into backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```env
PORT=4000

DB_URI=your_mongodb_connection

JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_secret

STRIPE_SECRET_KEY=your_stripe_key
```

Start backend:

```bash
npm start
```

---

## Frontend Setup

Move into frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run application:

```bash
npm run dev
```

---

# 🔐 Authentication & Authorization

Food Genie uses JWT authentication with role based authorization.

Roles:

- User
- Admin

Protected APIs ensure only authorized users can access sensitive operations.

---

# 📸 Screenshots

Add project screenshots here:

```
Home Page

Restaurant Page

Menu Page

Cart Page

Profile Page

Admin Features
```

---

# 🔮 Future Improvements

- Live order tracking
- Restaurant owner dashboard
- Real-time notifications
- Recommendation system
- Advanced AI food suggestions
- Mobile application support

---

# 👨‍💻 Developer

Developed by **Aleti Chiranjeevi**

A full-stack MERN project focused on building a scalable and intelligent food ordering experience.

---

⭐ If you like this project, consider giving it a star.
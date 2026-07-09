import React, { useEffect } from "react";

import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./components/Home";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Menu from "./components/Menu";

import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Profile from "./components/user/Profile";
import UpdateProfile from "./components/user/UpdateProfile";

import Cart from "./components/cart/Cart";

import OrderSuccess from "./components/cart/OrderSuccess";
import ListOrders from "./components/order/ListOrders";
import OrderDetails from "./components/order/OrderDetails";

import { loadUser } from "./redux/actions/userActions";
import store from "./redux/store";


function App() {


  useEffect(() => {

    store.dispatch(loadUser());

  }, []);



  return (

    <>

      <ToastContainer />


      <Router>


        <div className="App">


          <Header />


          <div className="container container-fluids">


            <Routes>


              {/* HOME */}

              <Route
                path="/"
                element={<Home />}
              />


              <Route
                path="/eats/stores/search/:keyword"
                element={<Home />}
              />



              {/* MENU */}

              <Route
                path="/eats/stores/:id/menus"
                element={<Menu />}
              />



              {/* USER */}

              <Route
                path="/users/login"
                element={<Login />}
              />


              <Route
                path="/users/signup"
                element={<Register />}
              />


              <Route
                path="/users/me"
                element={<Profile />}
              />


              <Route
                path="/users/me/update"
                element={<UpdateProfile />}
              />



              {/* CART */}

              <Route
                path="/cart"
                element={<Cart />}
              />



              {/* ORDER */}

              <Route
                path="/success"
                element={<OrderSuccess />}
              />


              <Route
                path="/eats/orders/me/myOrders"
                element={<ListOrders />}
              />


              <Route
                path="/eats/orders/:id"
                element={<OrderDetails />}
              />


            </Routes>


          </div>


          <Footer />


        </div>


      </Router>


    </>

  );

}


export default App;
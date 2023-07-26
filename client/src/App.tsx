import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import UserInfo from "./pages/UserInfo";
import Order from "./pages/Order";
import Footer from "./components/Footer";

function App() {
  return (
    <React.StrictMode>
    <Provider store={store}>      
    <BrowserRouter>    
    <Nav />
    <Routes>
    <Route path="/" element={<Login />} /> 
    <Route path="/cart" element={<Cart />} /> 
    <Route path="/order" element={<Order />} /> 
    <Route path="/Home" element={<Home />} /> 
    <Route path="/signup" element={<Signup />} /> 
    <Route path="/userinfo" element={<UserInfo />} /> 
    <Route path="/productlist" element={<ProductList />} /> 
    <Route path="/productdetail" element={<ProductDetail />} /> 
    </Routes>
    <Footer />
    </BrowserRouter>
    </Provider>
    </React.StrictMode>
  // <div className="App">Test</div>
  );
}

export default App;

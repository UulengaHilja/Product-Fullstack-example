import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchProducts,
  addProduct,
  addProductDetail,
  addToCartList,
} from "../redux/slices/product";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { getOrderByUserId } from "../redux/slices/product";
import {
  InitialState,
  CartItem,
  GetCartListAction,
  Product,
} from "../type/types";
import { MenuItem, Select } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router";
import { ThunkDispatch } from "redux-thunk";

const Cart = () => {
  const dispatch =
    useDispatch<ThunkDispatch<Product[], undefined, GetCartListAction>>();
  const cartList = useSelector((state: InitialState) => state.cart);
  const [updatedCartList, setUpdatedCartList] = useState<CartItem[]>([]);
  const [grandTotal, setGrandTotal] = useState(0);
  const [user, setUser] = useState(false);
  const navigate = useNavigate();

  // Function to calculate the updated price based on the selected quantity
  const calculateTotalPrice = (product: CartItem) => {
    return product.price * product.quantity;
  };

  const calculateGrandTotal = () => {
    let grandTotal = 0;
    updatedCartList.forEach((product) => {
      grandTotal += calculateTotalPrice(product);
    });
    return grandTotal;
  };

  // Function to handle the order button click
  const handleOrder = async () => {
    // Add logic here to place the order
    console.log("Order placed!");
    let userId = localStorage.getItem("user");
    let orderList = updatedCartList.map((product) => {
      return {
        userId: userId,
        name: product.name,
        quantity: product.quantity,
        imageLink: product.imageLink,
        total: product.price * product.quantity,
        price: product.price,
        category: product.category,
        description: product.description,
      };
    });
    //let url = "http://localhost:8000";
    let url = "https://backend-szom.onrender.com"; //render hosting

    try {
      const response = await axios.post(`${url}/order`, orderList);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateCartList = () => {
    let cartListModified = cartList.map((product) => {
      return {
        _id: product?._id,
        name: product.name,
        imageLink: product.imageLink,
        quantity: 1,
        price: product.price,
        category: product.category,
        description: product.description,
      };
    });
    console.log("cartListModified", cartListModified);
    setUpdatedCartList(cartListModified);
    return "";
  };

  const handleQuantity = (id: string, quantity: number) => {
    // Find the product with the given productId in the updatedCartList
    const updatedProduct = updatedCartList.find(
      (product) => product._id === id
    );

    if (updatedProduct) {
      // Update the quantity of the product in the updatedCartList
      updatedProduct.quantity = quantity;

      // Update the state with the updatedCartList
      setUpdatedCartList([...updatedCartList]);
      setGrandTotal(calculateGrandTotal());
    }
  };

  useEffect(() => {
    let userId: string | null = localStorage.getItem("user");

    if (!userId) {
      navigate("/");
    } else {
      setUser(true);
      dispatch(getOrderByUserId(userId));
      console.log("cartList", cartList);
    }
  }, []);

  return (
    <div>
      <Typography variant="h1" style={{ textAlign: "center", color: "blue" }}>
        {user && "CART"}
      </Typography>
      {user && cartList.length !== 0 && (
        <h1>{updatedCartList.length === 0 ? handleUpdateCartList() : ""}</h1>
      )}
      {user && cartList.length === 0 && (
        <h1 style={{ textAlign: "center" }}>Cart is Empty</h1>
      )}
      {user &&
        updatedCartList.length !== 0 &&
        updatedCartList.map((product: any) => (
          <Card className="card" sx={{ display: "flex" }} key={product._id}>
            <CardMedia
              component="img"
              sx={{ width: 600 }}
              style={{ width: "600px", height: "398px" }}
              image={product.imageLink} // Provide the image URL here
              alt={product.name} // Provide the alt text for accessibility
            />
            <CardContent>
              <Typography className="cardContent" variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography className="price" variant="h6" color="text.secondary">
                {product.price}$
              </Typography>
              <Typography
                className="location"
                variant="body2"
                color="text.secondary"
              >
                Type: {product.category}
              </Typography>
              <Typography
                className="description"
                variant="body2"
                color="text.secondary"
              >
                Description: {product.description}
              </Typography>
              <Select
                label="Quantity"
                value={product.quantity}
                onChange={(e) =>
                  handleQuantity(product._id, Number(e.target.value))
                }
                sx={{ width: "80px", mt: 2 }}
              >
                {/* Add options for quantity selection */}
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                {/* Add more options if needed */}
              </Select>
              <Typography
                className="totalPrice"
                variant="h6"
                color="text.secondary"
              >
                Total Price: {product.price * product.quantity}$
              </Typography>
            </CardContent>
          </Card>
        ))}
      {user && updatedCartList.length > 0 && (
        <Typography variant="h5" style={{ textAlign: "center", color: "blue" }}>
          Grand Total: {grandTotal ? grandTotal : calculateGrandTotal()}$
        </Typography>
      )}
      {user && updatedCartList.length > 0 && (
        <Button
          variant="contained"
          color="primary"
          style={{ width: "200px", margin: "20px auto", display: "block" }}
          onClick={handleOrder}
        >
          Place Order
        </Button>
      )}
    </div>
  );
};

export default Cart;

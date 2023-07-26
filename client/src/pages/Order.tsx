import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { fetchOrderByUserId } from "../redux/slices/product";
import {
  InitialState,
  CartItem,
  Product,
  OrderItem,
  GetOrderListAction,
} from "../type/types";
import { useNavigate } from "react-router";
import { ThunkDispatch } from "redux-thunk";

const Order = () => {
  const dispatch =
    useDispatch<ThunkDispatch<Product[], undefined, GetOrderListAction>>();
  const orderList = useSelector((state: InitialState) => state.order);

  const navigate = useNavigate();
  const [user, setUser] = useState(false);

  useEffect(() => {
    let user = localStorage.getItem("user");
    if (!user) {
      navigate("/");
    } else {
      setUser(true);
      let userId: string | null = localStorage.getItem("user");
      dispatch(fetchOrderByUserId(userId));
    }
  }, []);

  const calculateTotalPrice = (product: CartItem) => {
    return product.price * product.quantity;
  };
  const calculateGrandTotal = () => {
    let grandTotal = 0;
    console.log("orderList", orderList);
    orderList.forEach((product: CartItem) => {
      grandTotal += calculateTotalPrice(product);
    });
    return grandTotal;
  };

  return (
    <div>
      <Typography variant="h1" style={{ textAlign: "center", color: "blue" }}>
        {user && "ORDER"}
      </Typography>
      {user && orderList.length === 0 && (
        <h1 style={{ textAlign: "center" }}>Order is Empty</h1>
      )}
      {user &&
        orderList.length !== 0 &&
        orderList.map((product: CartItem) => (
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
              {product.quantity}
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
      {user && orderList.length > 0 && (
        <Typography variant="h5" style={{ textAlign: "center", color: "blue" }}>
          Grand Total: {calculateGrandTotal()}$
        </Typography>
      )}
    </div>
  );
};

export default Order;

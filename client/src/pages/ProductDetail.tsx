import { useDispatch, useSelector } from "react-redux";

import { addProductDetail, addToCartList } from "../redux/slices/product";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  Product,
  UserId,
  InitialState,
  CartItem,
  OrderItem,
  AddToCartListAtion,
} from "../type/types";
import { ThunkDispatch } from "redux-thunk";

const ProductDetail = () => {
  const productDetail = useSelector((state: InitialState) => state.product);
  const dispatch =
    useDispatch<ThunkDispatch<Product[], undefined, AddToCartListAtion>>();

  const handleProductDetail = (product: Product) => {
    addProductDetail([product]);
  };

  // Convert Product to UserId with the provided userId
  const convertToUserId = (product: Product, userId: string | null): UserId => {
    delete product._id;
    return { ...product, userId };
  };

  const addToCart = (product: Product) => {
    let userId: string | null = localStorage.getItem("user");

    let objUserId = convertToUserId(product, userId);
    console.log("objUserId", objUserId);
    dispatch(addToCartList(objUserId));
  };

  return (
    <div>
      <Typography variant="h1" style={{ textAlign: "center", color: "blue" }}>
        CAR DETAIL
      </Typography>
      {productDetail.map((product: Product) => (
        <Card
          className="card"
          sx={{ display: "flex" }}
          key={product._id}
          onClick={() => handleProductDetail(product)}
        >
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
            <Button
              variant="contained"
              style={{ width: "400px", margin: "40px" }}
              onClick={() => {
                addToCart(product);
              }}
            >
              Add To Cart
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProductDetail;

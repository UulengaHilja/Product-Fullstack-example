import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts, addProductDetail } from "../redux/slices/product";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";
import { Product, InitialState, FetchProductAction } from "../type/types";
import { AppDispatch } from "../redux/store";
import { ThunkDispatch } from "redux-thunk";

const ProductList = () => {
  const navigate = useNavigate();
  const dispatch =
    useDispatch<ThunkDispatch<Product[], undefined, FetchProductAction>>();
  const products = useSelector((state: InitialState) => state.products);

  const [user, setUser] = useState(false);

  useEffect(() => {
    let user = localStorage.getItem("user");
    if (!user) {
      navigate("/");
    } else {
      setUser(true);
      console.log("product list");
      dispatch(fetchProducts());
    }
  }, [dispatch]);

  const handleProductDetail = (product: Product) => {
    dispatch(addProductDetail([product]));
    navigate("/productdetail");
  };

  return (
    <div>
      <Typography variant="h1" style={{ textAlign: "center", color: "blue" }}>
        {user && "CAR LIST"}
      </Typography>
      {user &&
        products.map((product: Product) => (
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
            </CardContent>
          </Card>
        ))}
    </div>
  );
};

export default ProductList;

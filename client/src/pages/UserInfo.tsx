import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUserById } from "../redux/slices/product";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";
import { User, InitialState, Product, GetUserInfo } from "../type/types";
import { ThunkDispatch } from "redux-thunk";

const UserInfo = () => {
  const dispatch =
    useDispatch<ThunkDispatch<Product[], undefined, GetUserInfo>>();
  const userinfo = useSelector((state: InitialState) => state.userinfo);

  const navigate = useNavigate();
  const [user, setUser] = useState(false);

  useEffect(() => {
    let user = localStorage.getItem("user");
    if (!user) {
      navigate("/");
    } else {
      setUser(true);
      let userId: string | null = localStorage.getItem("user");
      dispatch(fetchUserById(userId));
    }
  }, []);

  return (
    <div>
      <Typography variant="h1" style={{ textAlign: "center", color: "blue" }}>
        {user && "USER INFO"}
      </Typography>
      {user &&
        userinfo &&
        userinfo.map((user: User) => (
          <Card className="card" sx={{ display: "flex" }} key={user._id}>
            <CardContent>
              <Typography className="price" variant="h5" component="div">
                Name: {user.name}
              </Typography>
              <Typography className="price" variant="h6" color="text.secondary">
                Email: {user.email}
              </Typography>
              <Typography
                className="price"
                variant="body2"
                color="text.secondary"
              >
                Phone: {user.phone}
              </Typography>
              <Typography
                className="price"
                variant="body2"
                color="text.secondary"
              >
                Address: {user.address}
              </Typography>
            </CardContent>
          </Card>
        ))}
    </div>
  );
};

export default UserInfo;

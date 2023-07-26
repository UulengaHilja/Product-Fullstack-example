import React, { useState, FormEvent } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";
import { Typography } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const API_URL = "http://localhost:8000"; // Update with your API endpoint
  const API_URL = "https://backend-szom.onrender.com";
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoginError("");
    const user = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(`${API_URL}/login`, user);
      let userData = response.data.userData;
      localStorage.setItem("user", userData._id);
      localStorage.setItem("token", response.data.token);
      if ((response.status = 200)) {
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
      setLoginError("Enter valid username and password");
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center", color: "blue" }}>LOGIN</h1>
      <form className="loginform" onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
        <TextField
          label="Password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        />
        <Typography style={{ color: "red" }}>
          {loginError ? loginError : ""}
        </Typography>
        <div style={{ display: "flex" }}>
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
          <Link to="/signup" style={{ paddingTop: "20px", marginLeft: "10px" }}>
            Signup
          </Link>
        </div>
      </form>
    </>
  );
};

export default Login;

import { useState, FormEvent } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  //const API_URL = "http://localhost:8000"; // Update with your API endpoint
  const API_URL = "https://backend-szom.onrender.com";
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = {
      name: name,
      email: email,
      password: password,
      phone: phone,
      address: address,
    };
    const response = await axios.post(`${API_URL}/users`, user);
    console.log("response", response);
    try {
      if ((response.status = 200)) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center", color: "blue" }}>SIGNUP</h1>
      <form className="signupform" onSubmit={handleSubmit}>
        <TextField
          label="Name"
          type="text"
          className="signupinput"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />
        <TextField
          label="Email"
          type="email"
          className="signupinput"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
        <TextField
          label="Password"
          type="password"
          className="signupinput"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        />
        <TextField
          label="Phone"
          type="number"
          className="signupinput"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          fullWidth
        />
        <TextField
          label="Address"
          type="text"
          className="signupinput"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          fullWidth
        />
        <div style={{ display: "flex" }}>
          <Button
            type="submit"
            className="signupbutton"
            variant="contained"
            color="primary"
          >
            Sign up
          </Button>
          <Link to="/" style={{ paddingTop: "20px", marginLeft: "10px" }}>
            Login
          </Link>
        </div>
      </form>
    </>
  );
};

export default Signup;


import {
  Button,
} from "@mui/material";
import { useNavigate } from "react-router";

const CarSearch = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/productlist");
  };
  return (
    <>
      <div style={{ width: "400px", margin: "0 auto" }}>
        <Button
          variant="contained"
          style={{
            width: "400px",
            marginTop: "40px",
            backgroundColor: "#ab9a9a",
          }}
          onClick={handleClick}
        >
          Our SUV
        </Button>
      </div>
    </>
  );
};

export default CarSearch;

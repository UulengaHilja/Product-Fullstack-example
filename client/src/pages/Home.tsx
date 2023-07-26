import { useEffect, useState } from "react";

import Carousel from "../components/Carousel";
import CarSearch from "../components/CarSearch";
import CarIcons from "../components/CarIcons";

import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(false);

  useEffect(() => {
    let user = localStorage.getItem("user");
    if (!user) {
      navigate("/");
    } else {
      setUser(true);
    }
  });

  return (
    <div>
      {" "}
      {user && (
        <>
          <Carousel />
          <CarSearch />
          <CarIcons />
        </>
      )}
    </div>
  );
};

export default Home;

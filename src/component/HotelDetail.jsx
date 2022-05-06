import React, { useEffect, useState } from "react";
import { MenuItems, Hotel } from "../component/Data";
import MenuCard from "../component/MenuCard";
import HotelCard from "./HotelCard";
import Banner from "./Banner";
import { Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import BottomMenu from "./Header/BottomMenu";

const Main = () => {
  const navigate = useNavigate();
  const [isMainData, setMainData] = useState(
    Hotel.filter((element) => element.itemId == "buger01")
  );

  useEffect(() => {
    // menu Card active class changer
    const menuCard = document
      .querySelector(".rowContainer")
      .querySelectorAll(".rowMenuCard");

    function setMenuCardActive() {
      menuCard.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuCard.forEach((n) => n.addEventListener("click", setMenuCardActive));
  }, [isMainData]);

  const setData = (itemId) => {
    setMainData(Hotel.filter((element) => element.itemId == itemId));
  };

  return (
    <>
      {/* Header section */}
      {/* <Header /> */}

      <div className="maincontainer position-relative ">
        <Banner />

        <Container>
          {/* menu card */}
          <div className="rowContainer d-flex align-items-center my-2 p-2">
            {MenuItems &&
              MenuItems.map((data) => (
                <div key={data.id} onClick={() => setData(data.itemId)}>
                  <MenuCard
                    imgSrc={data.imgSrc}
                    name={data.name}
                    isActive={data.id == "1" ? true : false}
                  />
                </div>
              ))}
          </div>

          <Link to="/hotelfood" className="linkclass">
            <div className="dishItemContainer d-flex justify-content-start align-items-center flex-wrap">
              {isMainData &&
                isMainData.map((data) => (
                  <HotelCard
                    key={data.id}
                    itemId={data.id}
                    imgSrc={data.imgSrc}
                    name={data.name}
                    subname={data.subname}
                    botname={data.botname}
                    ratings={data.ratings}
                    distance={data.distance}
                  />
                ))}
            </div>
          </Link>

          <div className="map_btn_div">
            <Button
              variant="primary"
              type="submit"
              className="map_btn"
              onClick={() => navigate("/hotel-location")}
            >
              Map
            </Button>
          </div>

          <BottomMenu />
        </Container>
      </div>
    </>
  );
};

export default Main;

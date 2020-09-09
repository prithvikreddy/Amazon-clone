import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="1"
          title="Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!llo"
          price={10.39}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51wOOMQ+F3L._SX312_BO1,204,203,200_.jpg"
        />

        <Product
          id="2"
          title="BLACK+DECKER 20V MAX Cordless Drill / Driver with 30-Piece Accessories (LD120VA)"
          price={89.99}
          rating={3}
          image="https://m.media-amazon.com/images/I/61zZnjWQybL._AC_UL320_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="3"
          title="AmazonBasics 3-Piece Non-Stick Fry Pan Set, 8 Inch, 10 Inch, and 12 Inch"
          price={23.66}
          rating={2}
          image="https://images-na.ssl-images-amazon.com/images/I/718zaCMCcRL._AC_SX522_.jpg"
        />
        <Product
          id="4"
          title="Echo (3rd Gen)- Smart speaker with Alexa- Charcoal"
          price={5.39}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/41G9E6j+AkL._AC_SX184_.jpg"
        />
        <Product
          id="5"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi + Cellular, 256GB) - Space Gray (4th Generation)"
          price={1249.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81Pi4nhjlwL._AC_SX569_.jpg"
        />
      </div>
      <div className="home__row">
        {/* product */}
        <Product
          id="6"
          title="Samsung 34-Inch SJ55W Ultrawide Gaming Monitor (LS34J550WQNXZA) – 75Hz Refresh, WQHD Computer Monitor, 3440 x 1440p Resolution, 4ms Response, FreeSync, Split Screen, HDMI, Black"
          price={499.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/91g-Y1B09EL._AC_SX679_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import Products from "./Products";
import Icons from "./Icons/Icons";
import Product2 from "../Products2/Products2";
import "./Home.css"
import Rating from "./Rating/Rating";
// import Banner from "./Banner/Banner";
export default function Home() {
  return (
    <>
      <div className="info">
        <div className="content">
          <div className="head">
            <h1>Welcome to our Store</h1>
            <p>Get extra discount on products</p>

            {/* <Link to="/products"> */}
              <button>Get Started</button>
            {/* </Link> */}
          </div>
        </div>
        <div className="pic"></div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Icons />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
     
     
      <Products />
   
      <div id="carouselExampleIndicators" className="carousel slide border-0">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./assets/perellex.jpg" className="d-block w-100" alt="banner 1" />
          </div>
          <div className="carousel-item">
            <img src="./assets/background.png" className="d-block w-100" alt="banner 2" />
          </div>
          <div className="carousel-item">
            <img src="./assets/backgroundimage.png" className="d-block w-100" alt="banner 3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Rating />
      {/* <Banner /> */}
    </>
  );
}

import React from "react";
import "./body.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

const Body = () => {
  return (
    <div className="body-container">
      <div className="slider-container">
        <Carousel className="carousle">
          <Carousel.Item className="slideritems">
            <div>
              {" "}
              <img
                className="d-block w-80"
                src="https://www.lalpathlabs.com/blog/wp-content/uploads/2019/01/Fruits-and-Vegetables-768x512.jpg"
                alt="First slide"
              />
            </div>
            <div id="caption-container">
              <Carousel.Caption>
                <div></div>
                <h3>First slide label</h3>
                <p
                  style={{
                    color: "black",
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>

          <Carousel.Item className="slideritems">
            <div>
              <img
                className="d-block w-80"
                src="https://st.depositphotos.com/1177973/3612/i/950/depositphotos_36122373-stock-photo-tasty-fruits-isolated-on-white.jpg"
                alt="Third slide"
              />
            </div>
            <div id="caption-container">
              <Carousel.Caption>
                <h3>second slide label</h3>
                <p
                  style={{
                    color: "black",
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="fv-container">
        <div className="fruits">
          <img
            src="https://www.eatthis.com/wp-content/uploads/sites/4/2021/06/fruit.jpg?quality=82&strip=all&w=1200"
            alt="fruits"
          />
          <h2> Fruits</h2>
        </div>
        <div className="vegetables">
          <img
            src="https://scontent.fhyd14-1.fna.fbcdn.net/v/t1.18169-9/22309098_179723512592672_4628183742042213801_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=6e5ad9&_nc_ohc=Mg23txfTkd8AX8Q_ueO&_nc_ht=scontent.fhyd14-1.fna&oh=00_AT_84FwlQXE7-BzVd8iSzV6-BVHESULFvNAa_oFkft6jnA&oe=61E0922F"
            alt="vegitables"
          />

          <h2> Vegitables</h2>
        </div>
      </div>
    </div>
  );
};

export default Body;

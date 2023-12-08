import React from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

function Photos() {
  return (
    <div className="photos-container">
      <h2 className="photos-heading">Photo Gallery</h2>
      <p className="photos-description">
        Explore the beauty of Tarifa through our photo gallery. Scroll through
        the images to get a glimpse of the stunning landscapes, vibrant culture,
        and memorable moments that Tarifa has to offer.
      </p>

      <Carousel
        className="photos-carousel"
        showThumbs={false}
        showStatus={false}
        infiniteLoop
      >
        <div className="carousel-item">
          <img src="https://lp-cms-production.imgix.net/2023-07/shutterstock2251412043.jpg?auto=format&w=1440&h=810&fit=crop&q=75" alt="Tarifa Image 1" />
        </div>
        <div className="carousel-item">
          <img src="https://simplytarifa.com/wp-content/uploads/2022/01/about-photo-2.jpg" alt="Tarifa Image 2" />
        </div>
        <div className="carousel-item">
          <img src="https://aframesurfcamp.com/fileadmin/_processed_/0/c/csm_tarifa-kitesurfen_42aa6e2e63.jpg" alt="Tarifa Image 3" />
        </div>
        <div className="carousel-item">
          <img src="https://media.istockphoto.com/id/960367050/photo/sand-dune-of-bolonia-beach-province-cadiz-andalucia-spain.jpg?s=612x612&w=0&k=20&c=W7V9ZhBK4dKsA56d9Yqt4G8AILoJEWargiwk51yCmc8=" alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Photos;

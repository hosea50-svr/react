import React from "react";

const WelcomeCarousel = () => {
  return (
    <div id="welcomeCarousel" className="carousel slide" data-bs-ride="carousel"  data-bs-interval="3000">

      {/* Indicators */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#welcomeCarousel" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#welcomeCarousel" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#welcomeCarousel" data-bs-slide-to="2"></button>
      </div>

      {/* Slides */}
      <div className="carousel-inner">

        {/* Slide 1 */}
        <div className="carousel-item active">
          <img
            src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66"
            className="d-block w-100"
            alt="African student reading"
            style={{ height: "400px", objectFit: "cover" }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h2>Welcome to My Blog</h2>
            <p>Learn, share and grow together</p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
            className="d-block w-100"
            alt="African students studying"
            style={{ height: "400px", objectFit: "cover" }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h2>Study & Improve</h2>
            <p>Education builds your future</p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1513258496099-48168024aec0"
            className="d-block w-100"
            alt="African girl reading book"
            style={{ height: "400px", objectFit: "cover" }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h2>Read More Books</h2>
            <p>Knowledge is power</p>
          </div>
        </div>

      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#welcomeCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#welcomeCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>

    </div>
  );
};

export default WelcomeCarousel;
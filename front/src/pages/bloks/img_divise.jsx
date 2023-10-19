import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const imageUrls = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmSqoGSssvLfvDqhyKQgajYY-ljVXQAIjOc8xOGBM2KA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn395-6UbNPEJFOAO21e8Gkijpl_wqbICkjntAQvQboA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOZQR-AqexH0oqZFCk6o1MvPvGvEOlB008DO4cftEDdQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOZQR-AqexH0oqZFCk6o1MvPvGvEOlB008DO4cftEDdQ&s',
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
  };

  useEffect(() => {
    // Automatically change the slide every 3 seconds
    const interval = setInterval(nextSlide, 3000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='Imgs'>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
        <div className="carousel-indicators">
          {imageUrls.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === activeIndex ? 'active' : ''}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {imageUrls.map((url, index) => (
            <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
              <img src={url} className="d-block w-100" alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" onClick={prevSlide}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" onClick={nextSlide}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;

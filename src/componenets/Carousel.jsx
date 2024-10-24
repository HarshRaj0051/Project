import React, { useState, useEffect } from 'react';
import './Home.css';

const images = [
  { src: '/images/Caros1.png', text: <h1>Committed to excellence, driving business forward through innovative solutions..</h1>, link: '/service' },
  { src: '/images/Caros2.jpg', text: <h1>We match clients with tailored talent solutions for optimal organizational success.</h1>, link: '/about' },
  { src: '/images/Caros3.jpg', text: <h1>Contact us for inquiries</h1>, link: '/carrier' },
  // Add more image URLs and corresponding text as needed
];

function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(goToNextImage, 8000); // Change image every 8 seconds

    return () => clearInterval(intervalId);
  }, [currentImage]);

  const goToPrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    resetInterval();
  };

  const goToNextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    resetInterval();
  };

  const resetInterval = () => {
    clearInterval(intervalId); // Clear the previous interval
    const newIntervalId = setInterval(goToNextImage, 8000); // Start a new interval
    setIntervalId(newIntervalId); // Store the new interval ID
  };

  const handleReadMoreClick = () => {
    window.location.href = images[currentImage].link;
  };

  const handleContactClick = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="carousel">
      <div className="carousel-image-container">
        <img src={images[currentImage].src} alt={`Slide ${currentImage}`} />
        <div className="carousel-text">{images[currentImage].text}</div>
      </div>
      <div className="carousel-buttons">
        <button className="prev" onClick={goToPrevImage}>&#10094;</button>
        <button className="next" onClick={goToNextImage}>&#10095;</button>
      </div>
      <div className="carousel-links">
        <button onClick={handleReadMoreClick}>Read More</button>
        <button onClick={handleContactClick}>Contact Us</button>
      </div>
    </div>
  );
}

export default Carousel;

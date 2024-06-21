import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: auto;
  overflow: hidden;
`;

const SlideContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: ${(props) => props.width}%;
`;

const Slide = styled.div`
  min-width: 100%;
  transition: opacity 0.5s ease-in-out;
`;

const Image = styled.img`
  width: 100%;
  height: 400px; /* Adjust height as needed */
  object-fit: cover;
`;

const Caption = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 5px;
`;

const Description = styled.div`
  position: absolute;
  bottom: 60px;
  left: 20px;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 5px;
`;

const ImageCarousel = ({ carouselData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [carouselData]);

  return (
    <CarouselContainer>
      <SlideContainer width={carouselData.length * 100} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {carouselData.map((slide, index) => (
          <Slide key={index}>
            <Image src={`l${slide.image}`} alt={slide.caption} />
            <Caption>{slide.caption}</Caption>
            <Description>{slide.description}</Description>
          </Slide>
        ))}
      </SlideContainer>
    </CarouselContainer>
  );
};

export default ImageCarousel;





































// src/components/ImageCarousel.js

// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
// import './ImageCarousel.css'; // Create and import CSS for custom styling

// const images = [
//   'burger1.jpg', 
//   'burger2.jpg', 
//   'burger3.jpg', 
//   'burger4.jpg', 
//   'burger5.jpg'
// ];

// const ImageCarousel = () => (
//   <div className="carousel-container">
//     <Carousel 
//       showThumbs={false} 
//       autoPlay 
//       infiniteLoop 
//       showStatus={false}
//       interval={3000} // Change image every 3 seconds
//     >
//       {images.map((image, index) => (
//         <div key={index}>
//           <img src={require(`../assets/images/burger/${image}`)} alt={`Burger ${index + 1}`} />
//         </div>
//       ))}
//     </Carousel>
//   </div>
// );

// export default ImageCarousel;

// import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './ImageCarousel.css';

// const ImageCarousel = ({ images }) => {
//   return (
//     <Carousel>
//       {images.map((image, index) => (
//         <Carousel.Item key={index}>
//           <img
//             className="d-block w-100"
//             src={image}
//             alt={`Slide ${index}`}
//           />
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// };

// export default ImageCarousel;

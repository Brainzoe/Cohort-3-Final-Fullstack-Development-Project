import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import carouselData from '../components/Data/carouselData.json';

const Home = () => {
  const getImagePath = (image) => {
    return `${image}`;
  };

  return (
    <div className="home">
      <Carousel>
        {carouselData.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 carousel-image"
              src={getImagePath(item.image)}
              alt={item.caption}
            />
            <Carousel.Caption>
              <h3>{item.caption}</h3>
              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;



























// src/Home.jsx
// import React from 'react';
// import ImageCarousel from '../components/ImageCarousel';
// import carouselData from '../components/Data/carouselData.json';

// const Home = () => {
//   return (
//     <div className="home">
//       <h1>Welcome to Our Store</h1>
//       <ImageCarousel carouselData={carouselData} />
//     </div>
//   );
// };

// export default Home;



























































// import React from 'react';
// import CarouselComponent from './CarouselCOmponent'; // Adjust the path as per your project structure
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Home.css'; // Adjust the path as per your project structure
// import carouselData from '@/assets/images/carouselData.json'; // Adjust the path as per your project structure
// import CarouselComponent from './CarouselCOmponent'; 
// const Home = () => {
//   return (
//     <div className="home">
//       <CarouselCOmponent data={carouselData} />
//     </div>
//   );
// };

// export default Home;






























// import React from 'react';
// import Services from './Services';

// const Home = ({ searchResults }) => {
//   return (
//     <div>
//       <h1>Welcome to Epicurean Delight</h1>
//       <Services searchResults={searchResults} />
//     </div>
//   );
// };

// // export default Home;
// import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Home.css';
// import carouselData from '../components/Data/carouselData.json';

// const Home = () => {
//   const getImagePath = (image) => {
//     return `${image}`;
//   };

//   return (
//     <div className="home">
//       <Carousel>
//         {carouselData.map((item, index) => (
//           <Carousel.Item key={index}>
//             <img
//               className="d-block w-100"
//               src={getImagePath(item.image)}
//               alt={item.caption}
//             />
//             <Carousel.Caption>
//               <h3>{item.caption}</h3>
//               <p>{item.description}</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default Home;










































// import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Home.css';
// import carouselData from '../assets/images/carouselData.json';

// const Home = () => {
//   const getImagePath = (image) => {
//     return require(`../assets/images${image}`);
//   };

//   return (
//     <div className="home">
//       <Carousel>
//         {carouselData.map((item, index) => (
//           <Carousel.Item key={index}>
//             <img
//               className="d-block w-100"
//               src={getImagePath(item.image)}
//               alt={item.caption}
//             />
//             <Carousel.Caption>
//               <h3>{item.caption}</h3>
//               <p>{item.description}</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Services.css'; // Import the CSS for styling
import foodData from '../components/Data/foodData.json';

const Services = () => {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    setFoodItems(foodData);
  }, []);

  const getImagePath = (image) => {
    return `${image}`;
  };

  return (
    <div className="services">
      <h2>Our Menu</h2>
      <div className="food-catalogue">
        {foodItems.map(item => (
          <div key={item.Id} className="food-item-wrapper">
            <Card className="food-item">
              <div className="image-container">
                <Card.Img variant="top" src={getImagePath(item.image)} className="card-img"/>
              </div>
              <Card.Body>
                <Card.Title>{item.descript}</Card.Title>
                <Card.Text className="food-price">${item.price.toFixed(2)}</Card.Text>
                <button className="order-button">Order Now</button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

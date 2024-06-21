import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchResults.css';
import foodData from '../components/Data/foodData.json';

const SearchResults = ({ query }) => {
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    if (query) {
      const results = foodData.filter(item =>
        item.descript.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredItems(results);
    } else {
      setFilteredItems([]);
    }
  }, [query]);

  const getImagePath = (image) => {
    return require(`../assets/images${image}`);
  };

  return (
    <div className="search-results">
      <h2>Search Results for "{query}"</h2>
      <CardGroup className="food-catalogue">
        {filteredItems.map(item => (
          <Card key={item.Id} className="food-item" style={{ margin: '10px' }}>
            <Card.Img variant="top" src={getImagePath(item.image)} />
            <Card.Body>
              <Card.Title>{item.descript}</Card.Title>
              <Card.Text className="food-price">${item.price.toFixed(2)}</Card.Text>
              <button className="order-button">Order Now</button>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
};

export default SearchResults;

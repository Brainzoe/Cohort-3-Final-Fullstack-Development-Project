// src/components/Order/OrderPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import styled from '@emotion/styled';

const Form = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const StyledButton = styled(Button)`
  margin-top: 10px;
  margin-right: 10px;
`;

const OrderPage = () => {
  const [orderData, setOrderData] = useState({
    name: '',
    email: '',
    address: '',
    foodItem: '',
    quantity: 1
  });

  const handleChange = (e) => {
    setOrderData({
      ...orderData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/orders', orderData);
      if (response.status === 201) {
        alert('Order placed successfully! Check your email for confirmation.');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Error placing order. Please try again.');
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Place Your Order
      </Typography>
      <Form component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          value={orderData.name}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          value={orderData.email}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="address"
          label="Address"
          name="address"
          value={orderData.address}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="foodItem"
          label="Food Item"
          name="foodItem"
          value={orderData.foodItem}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="quantity"
          label="Quantity"
          name="quantity"
          type="number"
          value={orderData.quantity}
          onChange={handleChange}
        />
        <StyledButton
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Place Order
        </StyledButton>
      </Form>
    </Container>
  );
};

export default OrderPage;

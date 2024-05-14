import React from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import FoodList from './components/Food/FoodList';
import OrderForm from './components/Order/OrderForm';
import OrderHistory from './components/Order/OrderHistory';
import LoginForm from './components/Auth/LoginForm';
import RegisterForm from './components/Auth/RegisterForm';

function App() {
  return (
    <div className="App">
      <Header />
      {/* Add routes or components here based on navigation */}
      <FoodList />
      <OrderForm />
      <OrderHistory />
      <LoginForm />
      <RegisterForm />
      <Footer />
    </div>
  );
}

export default App;

//App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/contact';
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';
import foodData from '/src/components/Data/foodData.json';
import Footer from './components/Footer';
import SearchResults from './pages/SearchResults';
import AdminRegister from './components/Admin/AdminRegister';
import AdminLogin from './components/Admin/AdminLogin';
import AdminDashboard from './components/Admin/AdminDashboard';
import UserDashboard from './components/User/UserDashboard';
import UserProfile from './components/User/UserProfile';
import UsersPage from './components/User/UsersPage';
import UserSignup from './components/User/UserSignup';
import UserLogin from './components/User/UserLogin';
import ErrorBoundary from './ErrorBoundary';
import ManageUsers from './components/Admin/ManageUsers';
import Order from './components/Order/Order'

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (query, navigate) => {
    setQuery(query);
    navigate('/search-results');
  };

  return (
    <Router>
      <ErrorBoundary>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <SearchBar onSearch={handleSearch} />
      <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="/admin/register" element={<AdminRegister />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/user/profile" element={<UserProfile />} />
          <Route path="/admin/users" element={<UsersPage />} />
          <Route path="/signup" element={<UserSignup />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/admin-users" element={<ManageUsers />} />
      
        </Routes>
        <Footer />
      </div>
      </ErrorBoundary>
    </Router>
  );
};

export default App;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Paper,
  Box
} from '@mui/material';
import { Add, Edit, Delete, ArrowBack } from '@mui/icons-material';
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

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetchUsersData();
  }, []);

  const fetchUsersData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/users', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/api/users', formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      fetchUsersData();
      setFormData({ username: '', email: '', password: '' });
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const handleUpdateUser = async (id) => {
    try {
      await axios.put(`http://localhost:4000/api/users/${id}`, formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      fetchUsersData();
      setFormData({ username: '', email: '', password: '' });
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/users/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      fetchUsersData();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Manage Users
      </Typography>
      <StyledButton
        variant="contained"
        color="primary"
        startIcon={<ArrowBack />}
        onClick={() => navigate('/admin-dashboard')}
      >
        Back to Dashboard
      </StyledButton>
      <Form component="form" onSubmit={handleCreateUser} noValidate>
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
        />
        <StyledButton
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          startIcon={<Add />}
        >
          Create User
        </StyledButton>
      </Form>

      <Typography variant="h5" gutterBottom>
        User List
      </Typography>
      <Paper>
        <List>
          {users.map((user) => (
            <ListItem key={user._id} divider>
              <ListItemText
                primary={user.username}
                secondary={user.email}
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="edit"
                  onClick={() => handleUpdateUser(user._id)}
                >
                  <Edit />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDeleteUser(user._id)}
                >
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default ManageUsers;





// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import styled from 'styled-components';
// import { fetchUsers, createUser, updateUser, deleteUser } from '../../redux/actions/userAuthActions';

// const ManageUsersContainer = styled.div`
//   padding: 20px;
// `;

// const ManageUsers = () => {
//   const dispatch = useDispatch();
//   const { users, loading, error } = useSelector(state => state.users);
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: ''
//   });

//   useEffect(() => {
//     dispatch(fetchUsers());
//   }, [dispatch]);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleCreateUser = (e) => {
//     e.preventDefault();
//     dispatch(createUser(formData));
//     setFormData({ username: '', email: '', password: '' });
//   };

//   const handleUpdateUser = (id) => {
//     dispatch(updateUser(id, formData));
//     setFormData({ username: '', email: '', password: '' });
//   };

//   const handleDeleteUser = (id) => {
//     dispatch(deleteUser(id));
//   };

//   return (
//     <ManageUsersContainer>
//       <h2>Manage Users</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <form onSubmit={handleCreateUser}>
//         <div>
//           <label htmlFor="username">Username</label>
//           <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
//         </div>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
//         </div>
//         <button type="submit" disabled={loading}>Create User</button>
//       </form>

//       <h3>User List</h3>
//       {loading ? <p>Loading...</p> : (
//         <ul>
//           {users.map((user) => (
//             <li key={user._id}>
//               <p>{user.username} - {user.email}</p>
//               <button onClick={() => handleUpdateUser(user._id)}>Update</button>
//               <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </ManageUsersContainer>
//   );
// };

// export default ManageUsers;

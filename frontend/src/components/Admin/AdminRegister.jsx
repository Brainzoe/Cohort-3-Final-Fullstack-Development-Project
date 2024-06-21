
// // src/components/Admin/AdminRegister.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const AdminRegister = () => {
//     const navigate = useNavigate();
//     const [adminData, setAdminData] = useState({
//         username: '',
//         email: '',
//         password: '',
//         role: 'admin'  // assuming a default role for admin registration
//     });

//     const handleChange = (e) => {
//         setAdminData({
//             ...adminData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post('http://localhost:4000/api/admins', adminData);
//             navigate('/admin/login');  // Navigate to admin login page upon successful registration
//         } catch (error) {
//             console.error('Registration failed:', error);
//             // Handle registration failure
//         }
//     };

//     return (
//         <div>
//             <h2>Admin Registration</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="username">Username</label>
//                     <input type="text" id="username" name="username" value={adminData.username} onChange={handleChange} />
//                 </div>
//                 <div>
//                     <label htmlFor="email">Email</label>
//                     <input type="email" id="email" name="email" value={adminData.email} onChange={handleChange} />
//                 </div>
//                 <div>
//                     <label htmlFor="password">Password</label>
//                     <input type="password" id="password" name="password" value={adminData.password} onChange={handleChange} />
//                 </div>
//                 <button type="submit">Register</button>
//             </form>
//         </div>
//     );
// };

// export default AdminRegister;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminRegister = () => {
    const navigate = useNavigate();
    const [adminData, setAdminData] = useState({
        username: '',
        email: '',
        password: '',
        role: 'admin'  // assuming a default role for admin registration
    });

    const handleChange = (e) => {
        setAdminData({
            ...adminData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:4000/api/admins', adminData);
            navigate('/admin/login');  // Navigate to admin login page upon successful registration
        } catch (error) {
            console.error('Registration failed:', error);
            // Handle registration failure
        }
    };

    return (
        <div>
            <h2>Admin Registration</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" value={adminData.username} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={adminData.email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={adminData.password} onChange={handleChange} />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default AdminRegister;

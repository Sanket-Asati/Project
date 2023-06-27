import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:9191/user/admin'); // Replace with your backend API endpoint for fetching users
      setUsers(response.data);
      console.log(users);
    } catch (error) {
      console.error(error);
    }
  };

  const handleValidation = async (userId) => {
    try {
      await axios.put(`http://localhost:9191/user/admin/${userId}/validate`); // Replace with your backend API endpoint for validating a user
      fetchUsers(); // Refresh the user list after validation
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Registered Users</h1>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Validated</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.fname} {user.lname}</td>
              <td>{user.userName}</td>
              <td>********</td>
              <td>{user.mobileNumber.replace(/(\d{2})(\d+)(\d{2})/, '$1********$3')}</td>
              <td>{`${user.address}, ${user.address.substring(0, 2)}...`}</td>
              <td>
                {user.validated ? (
                  <span>Validated</span>
                ) : (
                  <button onClick={() => handleValidation(user.id)}>Validate</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;

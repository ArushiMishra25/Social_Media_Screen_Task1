import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {users.map((user, idx) => (
        <div key={idx}>
          <h2>{user.name}</h2>
          <p>{user.socialMedia}</p>
          <div>
            {user.images.map((img, i) => (
              <img
                key={i}
                src={`http://localhost:5000/${img}`}
                alt="user-upload"
                width="100"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;

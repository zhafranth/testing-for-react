import React, { useState } from "react";
import axios from "axios";

const CompAxiosCall = () => {
  const [users, setUsers] = useState([]);
  const handleGetUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <p>List member : </p>
      <button onClick={handleGetUsers} data-testid="get-users">
        Get User
      </button>
      {users.map((item, i) => (
        <p key={`user-${i}`} data-testid="username">
          {item.name}
        </p>
      ))}
    </div>
  );
};

export default CompAxiosCall;

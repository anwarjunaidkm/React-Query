import axios from "axios";
import React, { useEffect, useState } from "react";

function Users() {
  const [data, setData] = useState([]);
  const fetch = async () => {
    const response = await axios.get(
      "  https://jsonplaceholder.typicode.com/users"
    );
    setData(response.data);
    return response.data;
  };
  console.log(data, "users");

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {data.map((user, index) => (
        <p key={index}>{user.name}</p>
      ))}
    </div>
  );
}

export default Users;

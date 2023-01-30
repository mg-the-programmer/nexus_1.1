import React, { useEffect, useState } from "react";
import axios from "axios";

function Test() {
  const [localUsers, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get("/users");
        setUsers(response.data);
        console.log(response.data);
        console.log(localUsers);
      } catch (err) {
        console.log(err);
      }
    }
    fetchUsers();
    // axios
    //   .get("/users")
    //   .then((response) => {
    //     setUsers(response.data);
    //     console.log(response.data);
    //     console.log(localUsers);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {localUsers.usersName.map((item) => {
        return (
          <div>
            <h1 key={item._id}>{item.name}</h1>
          </div>
        );
      })}

      {/* {localUsers.usersName.map((user) =>
      return(
        <h2>{user}</h2>
      ))} */}
      {/* <p>{localUsers.usersName}</p>  */}
      {/* {typeof localUsers === "undefined" ? (
        <p> "Loading..." </p>
      ) : (
        localUsers.usersName.map((user, i) => <h2 key={i}>{user.name}</h2>)
      )} */}
    </div>
  );
}

export default Test;

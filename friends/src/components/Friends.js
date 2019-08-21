import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Friends = () => {
  const [friends, setFriends] = useState([]);

  const getData = () => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        console.log("friend get data", res);
        setFriends(res.data);
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);

  console.log("friends", friends);

  return (
    <div>
      <h1>Friends</h1>
      {friends.map(friend => {
        return (
          <div>
            <p>{friend.name}</p>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Friends;

import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendForm from "./FriendForm";
import FriendCard from "./FriendCard";

const Friends = () => {
  const [friends, setFriends] = useState([]);

  const getData = () => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends", {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(res => {
        console.log("friend get data", res);
        setFriends(res.data);
      })
      .catch(err => console.log(err.response));
  };
  useEffect(() => {
    getData();
  }, []);

  // console.log("friends", friends);
  const addFriend = friend => {
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", friend)
      .then(res => {
        console.log("friend post request", res);
        getData();
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  const deleteFriend = id => {
    console.log("delete id", id);
    axiosWithAuth()
      .delete(`http://localhost:5000/api/friends/${id}`)
      .then(res => {
        console.log(res);
        getData();
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h1>Friends</h1>
      <FriendForm submitFriend={addFriend} />
      {friends.map(friend => {
        return (
          <FriendCard
            key={friend.id}
            friend={friend}
            deleteFriend={deleteFriend}
          />
        );
      })}
    </div>
  );
};

export default Friends;

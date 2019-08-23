import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendForm from "./FriendForm";
import FriendCard from "./FriendCard";
import { Route, Redirect } from "react-router-dom";

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

  const editFriend = friend => {
    axiosWithAuth()
      .put(`http://localhost:5000/api/friends/${friend.id}`, friend)
      .then(res => {
        console.log("friend post request", res);
        getData();
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  return (
    <div>
      <h1>Friends</h1>
      <Route
        exact
        path="/friends"
        render={props => (
          <FriendForm
            {...props}
            submitFriend={addFriend}
            buttonText="Add Friend"
          />
        )}
      />
      {friends.map(friend => {
        return (
          <FriendCard
            key={friend.id}
            friend={friend}
            deleteFriend={deleteFriend}
          />
        );
      })}
      <Route
        path="/friends/edit/:id"
        render={props => {
          console.log("props", props);
          const currentFriend = friends.find(
            friend => `${friend.id}` === props.match.params.id
          );
          if (!currentFriend) {
            return <Redirect to="/friends" />;
          }
          return (
            <FriendForm
              {...props}
              submitFriend={editFriend}
              buttonText="Edit Friend"
              toEdit={currentFriend}
            />
          );
        }}
      />
    </div>
  );
};

export default Friends;

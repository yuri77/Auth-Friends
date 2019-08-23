import React, { useState } from "react";

const FriendForm = ({ submitFriend, toEdit, buttonText }) => {
  const [friend, setFriend] = useState(
    toEdit || { name: "", email: "", age: "" }
  );
  console.log("toEdit", toEdit);
  const handleChange = e => {
    setFriend({ ...friend, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    submitFriend(friend);
    setFriend({ name: "", email: "", age: "" });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="name"
        value={friend.name}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="email"
        value={friend.email}
        onChange={handleChange}
      />
      <input
        name="age"
        placeholder="age"
        value={friend.age}
        onChange={handleChange}
      />
      <button>{buttonText}</button>
    </form>
  );
};

export default FriendForm;

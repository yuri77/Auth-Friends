import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [auth, setAuth] = useState({ username: "", password: "" });

  const handleChange = e => {
    setAuth({ ...auth, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", auth)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
      })
      .catch(err => console.log(err.response));
    setAuth({ username: "", password: "" });
  };
  return (
    <div className="login">
      <h1>User Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={auth.username}
          placeholder={"name"}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={auth.password}
          placeholder={"password"}
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;

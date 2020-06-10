import React, { useState } from "react";
import { urls } from "@krab/config";

export default () => {
  const [data, setData] = useState({
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const onClickhandler = (e) => {
    e.preventDefault();
    fetch(urls.REGISTER, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((d) => console.log(d))
      .catch((e) => console.error(e));
  };

  const setInputData = (name, value) => setData({ ...data, [name]: value });

  return (
    <div>
      <form onSubmit={onClickhandler}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            value={data.email}
            onChange={(e) => setInputData("email", e.target.value)}
            id="email"
            required
            type="text"
          />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            value={data.userName}
            onChange={(e) => setInputData("userName", e.target.value)}
            id="username"
            required
            type="text"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            value={data.password}
            onChange={(e) => setInputData("password", e.target.value)}
            id="password"
            required
            type="password"
          />
        </div>
        <div>
          <label htmlFor="passwordConfirm">Confirm Password</label>
          <input
            value={data.confirmPassword}
            onChange={(e) => setInputData("confirmPassword", e.target.value)}
            id="passwordConfirm"
            required
            type="password"
          />
        </div>

        <button type="submit">register</button>
      </form>
    </div>
  );
};

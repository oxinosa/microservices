import React from "react";
import { urls } from "@krab/config";

export default () => {
  const testApi = () => {
    const accessToken = localStorage.getItem("access_token");
    fetch(urls.TEST_API, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },
    });
  };

  return (
    <div>
      <p>A</p>
      <button onClick={testApi}>Test Api</button>
    </div>
  );
};

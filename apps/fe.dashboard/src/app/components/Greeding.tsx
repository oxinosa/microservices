import React, { useEffect, useState } from "react";
import { config } from "@krab/config";

const Greeding = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [body, setBody] = useState<any>({ body: {} });

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      return;
    }
    fetch(`http://localhost:${config.serverPort}/user`, {
      credentials: "include",
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setBody(data);
      })
      .catch((e) => console.error(e));
  }, [props.loggedIn]);

  const message = body.token
    ? `Hi, ${body?.token?.email}!`
    : "You're not logged in.";

  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default Greeding;

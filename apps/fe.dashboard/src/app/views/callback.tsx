/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import qs from "qs";

export default () => {
  const [redirect, setRedirect] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const accessToken = qs.parse(history.location.search).access_token;
    const refreshToken = qs.parse(history.location.search).refresh_token;
    localStorage.setItem("access_token", accessToken.toString());
    localStorage.setItem("refresh_token", refreshToken.toString());
    setRedirect(true);
  }, []);
  return (
    <div>{redirect !== null ? <Redirect to="/" /> : <span>Loading</span>}</div>
  );
};

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FastRecord from "../pages/FastRecord";
import Home from "../pages/Home";
import InitialPage from "../pages/InitialPage";
import Record from "../pages/Record";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const AppRouter = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<InitialPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
          ></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route
            path="/fastrecord"
            element={<FastRecord isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
          ></Route>
          <Route
            path="/home"
            element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
          ></Route>
          <Route
            path="/record"
            element={<Record isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;

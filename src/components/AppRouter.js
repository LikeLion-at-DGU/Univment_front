import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";

const AppRouter = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Home /> : <SignIn />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;

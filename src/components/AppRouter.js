import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import InitialPage from "../pages/InitialPage";
import SignIn from "../pages/SignIn";

const AppRouter = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <Home /> : <InitialPage />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;

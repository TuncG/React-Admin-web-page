import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminPage from "./components/AdminPage/AdminPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loginInfo = localStorage.getItem("isLoggedIn");
    if (loginInfo === "1") {
      setIsLoggedIn(true); // checks for token
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <Router>
        <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
        <main>
          <Routes>
            <Route path="/AdminP" element={<AdminPage />}>
              {" "}
            </Route>
            <Route path="/Home" element={<Home />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </Router>
    </React.Fragment>
  );
}

export default App;

import { useEffect, useState } from "react";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context/AuthContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("auth")) === true) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <AppRouter />
    </AuthContext.Provider>
  );
}

export default App;

import { useState } from "react";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context/AuthContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <AppRouter />
    </AuthContext.Provider>
  );
}

export default App;

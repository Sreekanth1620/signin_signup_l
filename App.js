import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {isLogin ? (
        <Login switchToSignup={() => setIsLogin(false)} />
      ) : (
        <Register switchToLogin={() => setIsLogin(true)} />
      )}
    </>
  );
}

export default App;

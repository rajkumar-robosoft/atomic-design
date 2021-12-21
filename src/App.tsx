import React from "react";
import "./App.css";
import Header from "./components/Header";
import { LoginForm } from "./components/organisms/login-form/LoginForm";

function App() {
  return (
    <div className="App">
      <Header title="Login Form" />
      <div className="main-container">
        <LoginForm />
      </div>
    </div>
  );
}

export default App;

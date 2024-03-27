import { Component } from "react";
import "./App.css";
import Header from "./component/Navbar/Navbar.js";
import Main from "./component/Main/Main.js";
import Footer from "./component/Footer/Footer.js";

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer nama="Muhammad Yusuf" />
    </div>
  );
}

export default App;

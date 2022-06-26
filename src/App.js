
import './App.css';
import Head from "./components/Head";
import Main from "./components/Main";
import Tail from "./components/Tail";
import React from "react";

function App() {
  return (
    <div className="app">
        <Head />
        <Main />
        <Tail />
    </div>
  );
}

export default App;

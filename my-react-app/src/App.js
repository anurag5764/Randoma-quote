import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [data, setData] = useState(0);
  function getQuotes() {
    try {
      fetch("https://api.quotable.io/random")
        .then((response) => response.json())
        .then((quotes) => {
          setData(quotes);
        });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Title">Random Quote Generator</h1>
        <h3 className="Quote">Quotes: {data.content}</h3>
        <h5 className="Author">Author: {data.author}</h5>
        <button className="generator" onClick={getQuotes}>
          Get Quotes
        </button>
      </header>
    </div>
  );
}

export default App;
// cd my-react-app
// npm start

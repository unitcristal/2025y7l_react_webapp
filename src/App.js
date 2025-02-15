import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <>
      <HashRouter>
        <Navigation />
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/movie:id" component={Detail} />
      </HashRouter>
      {/* <HashRouter>
        <Route path="/home">
          <h1>Home</h1>
        </Route>
        <Route path="/home/introduction">
          <h1>Home/introduction</h1>
        </Route>
        <Route path="/about">
          <h1>About</h1>
        </Route>
      </HashRouter> */}
      <footer></footer>
    </>
  );
}

export default App;

import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./routes/Home/Home";
import "./App.scss";
import About from "./routes/About/About";
import Work from "./routes/Work/Work";
import Sleepiest from "./routes/Work/Sleepiest";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/work" exact component={Work} />
        <Route path="/work/sleepiest" exact component={Sleepiest} />
      </Switch>
    </>
  );
}

export default App;

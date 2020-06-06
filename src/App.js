import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";

//pages
import Home from "./pages/Home/Home";
import Tutors from "./pages/AllTurtor/Tutors";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/tutors" component={Tutors} />
      </Switch>
    </div>
  );
}

export default App;

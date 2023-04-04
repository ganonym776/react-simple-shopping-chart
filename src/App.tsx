import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Switch } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">

      {/* BrowserRouter used to initialize route inside */}
      <Router>
        <Header />
        <Switch>
          {/* <Route path="/" exact></Route> */}
        </Switch>
      </Router>
    </div>
  );
};

export default App;

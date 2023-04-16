import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pages from "./pages/Pages";

const App: React.FC = () => {
  return (
    <div className="App">

      {/* BrowserRouter used to initialize route inside */}
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Pages />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

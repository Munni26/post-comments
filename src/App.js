import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Home from "./Components/Home/Home";
import PostDetails from "./Components/PostDetails/PostDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/post/:ID">
          <PostDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

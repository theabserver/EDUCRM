import React from "react";
import Home from "./view/Home"
import NotFound from "./view/NotFound"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
const routes = {
  "http://localhost:9500/": () => <Home />,
}
function App () {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
} 

export default App;

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Directory from "./pages/Directory";
import Search from "./pages/Search";
import NavTabs from "./components/utils/NavTabs";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Directory} />
        <Route path="/search" component={Search} />
      </div>
    </Router>
  );
}

export default App;
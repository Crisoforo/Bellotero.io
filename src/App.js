import React from "react";
import { Route, Switch } from "react-router-dom";
import Testimonials from "./pages/testimonials/Page-1";
import Configurator from "./pages/configurator/Page-2";
import Header from "./components/common/Header";
import PageNotFound from "./PageNotFound";
import "./style/style.css";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={Testimonials} />
        <Route path="/page-2" component={Configurator} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;

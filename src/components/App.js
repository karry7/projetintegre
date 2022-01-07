import React, { Component } from "react";
import Header from "./Header";
import WeatherMain from "./Weather/WeatherMain";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import Forecast from "./Weather/Forecast";
import MainPage from "./MainPage/MainPage";

class App extends Component {
  render = () => {
    return (
      <>
        <Header />
        <Router>
          <div>
            <Switch>
              <Route path="/forecast/:city" component={Forecast} />
              <Route exact path="/weather" component={WeatherMain} />
              <Route exact path="/" component={MainPage} />
              
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
        <div className="mt-4"></div>
      </>
    );
  };
}

export default App;

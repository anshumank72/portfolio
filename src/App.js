import React, { Component } from "react";
import Header from "./Component/Header";
import theme from "./Component/Theme";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Container/Home";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={() => <div>about</div>} />
            <Route
              path="/portfolio"
              exact
              component={() => <div>portfolio</div>}
            />
            <Route path="/contact" exact component={() => <div>contact</div>} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;

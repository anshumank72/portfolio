import React, { Component } from "react";
import Header from "./Component/Header";
import theme from "./Component/Theme";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Container/Home";
import Contact from "./Component/Contact";
import About from "./Component/About";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route
              path="/portfolio"
              exact
              component={() => <div>portfolio</div>}
            />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;

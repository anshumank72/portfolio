import React, { Component } from "react";
import Home from "./Container/Home";
import theme from "./Component/Theme";
import { ThemeProvider } from "@material-ui/styles";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    );
  }
}

export default App;
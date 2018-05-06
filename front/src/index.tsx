import * as React from "react";
import * as ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { AppComponent } from "./AppComponent";

ReactDOM.render(
  <MuiThemeProvider>
    <AppComponent />
  </MuiThemeProvider>,
  document.getElementById("app")
);

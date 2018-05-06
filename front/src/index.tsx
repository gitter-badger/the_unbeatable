import * as React from "react";
import * as ReactDOM from "react-dom";

import { MyComponent } from "./components/my_component";

ReactDOM.render(
  <MyComponent param1="TypeScript" param2="React" />,
  document.getElementById("app")
);

import * as React from "react";
import { FirstComponent } from "./components/FirstComponent";

import { MaterialComponent } from "./components/MaterialComponent";

export const AppComponent = () => (
  <div>
    <FirstComponent param1="player1" param2="player2" />
    <MaterialComponent />
  </div>
);

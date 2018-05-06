import * as React from "react";

export interface FirstComponent { param1: string; param2: string }

export const FirstComponent = (props: FirstComponent) => (
  <h1>
    My component with param {props.param1} and {props.param2}
  </h1>
);

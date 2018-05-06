import * as React from "react";

export interface MyComponentProps { param1: string; param2: string }

export const MyComponent = (props: MyComponentProps) => (
  <h1>
    My component with param {props.param1} and {props.param2}
  </h1>
);

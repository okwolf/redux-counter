import { app } from "hyperapp";
import { h, withReducer } from "cra-hyperapp";
import reducer from "./reducer";
import App from "./App";
import "./index.css";

withReducer(reducer)(app)(
  {},
  {},
  () => <App />,
  document.getElementById("root")
);

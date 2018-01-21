import { h, app } from "hyperapp";
import App from "./App";
import actions from "./actions";
import "./index.css";

const state = { count: 0 };

const view = (state, actions) => <App {...state} {...actions} />;

app(state, actions, view, document.getElementById("root"));

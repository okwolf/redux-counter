import React from "react";
import { connect } from "react-redux";
import * as actions from "./actions";

const App = ({ count, decrement, increment }) => (
  <main>
    <h1>{count}</h1>
    <button onClick={decrement} disabled={count <= 0}>
      ‒
    </button>
    <button onClick={increment}>+</button>
  </main>
);

const mapStateToProps = state => ({
  count: state.count
});

const mapDispatchToProps = {
  ...actions
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

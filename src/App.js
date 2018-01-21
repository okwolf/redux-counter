import { h } from "hyperapp";

const App = ({ count, decrement, increment }) => (
  <main>
    <h1>{count}</h1>
    <button onclick={decrement} disabled={count <= 0}>
      ‒
    </button>
    <button onclick={increment}>+</button>
  </main>
);

export default App;

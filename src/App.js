import React from "react";
import { hot } from "react-hot-loader";
import styles from "./App.css";

const App = () => {
  return (
    <div className={styles.App}>
      <h1>Hello, World!</h1>
    </div>
  );
};

export default hot(module)(App);

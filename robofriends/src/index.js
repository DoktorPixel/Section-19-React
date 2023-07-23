import React from "react";
// import ReactDOM from 'react-dom'; The new way to import createRoot:
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./containers/App";
import AppHook from "./containers/App_Hook";
import "tachyons";
// import registerServiceWorker from './registerServiceWorker';

const root = createRoot(document.getElementById("root"));
root.render(
  //  <App />,
  <AppHook />
);

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// overrriding css from bottom to top
import "bootstrap/dist/css/bootstrap.min.css";
import "tachyons";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

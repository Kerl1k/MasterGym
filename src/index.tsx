import React from "react";
import ReactDOM from "react-dom/client";
import "./CSS/index.css";
import AppRouter from "./Routers/Router";
import { store } from "./store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

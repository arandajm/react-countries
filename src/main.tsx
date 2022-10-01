import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./global.css";
import "./font.css";

import App from "./App";
import Theme from "./components/Theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Theme>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </Theme>
  </React.StrictMode>
);

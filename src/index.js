import React from "react";
import ReactDOM from "react-dom";
import AppShell from "./AppShell";
import { HashRouter } from "react-router-dom";
import "antd/dist/antd.css";
import "react-image-gallery/styles/css/image-gallery.css";
import 'react-awesome-slider/dist/styles.css';

ReactDOM.render(
  <HashRouter>
    <AppShell />
  </HashRouter>,
  document.getElementById("root")
);

import React from "react";

import { AnimatePresence } from "framer-motion";

import { Routes } from "./core/routes";
import { GlobalStyle } from "./core/styles/global-styles";
import { Nav } from "./core/components/nav";

export const App = () => (
  <div className="App">
    <GlobalStyle />

    <Nav />

    <AnimatePresence exitBeforeEnter>
      <Routes />
    </AnimatePresence>
  </div>
);

import React from "react";
import { Routes } from "@Src/Routes";
import { AppContent } from "@Src/Components/AppContent";
import { ThemeProvider } from "styled-components";
import Theme from "@Global/Theme";


export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <AppContent>
        <Routes />
      </AppContent>
    </ThemeProvider>
  );
}

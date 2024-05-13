import React, { useEffect, useState } from "react";
import { Routes } from "@Src/Routes";
import { AppContent } from "@Src/Components/AppContent";
import { ThemeProvider } from "styled-components";
import Theme from "@Global/Theme";
import { SplashScreen } from "@Pages/SplashScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <AppContent>
        <Routes />
      </AppContent>
    </ThemeProvider>
  );
}

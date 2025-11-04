import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppRoutes from "./components/routes/AppRoutes";
import theme from "./Theme.jsx";
import themeModernSlate from "./Theme.jsx";
import themeModernSlateMono from "./theme3.jsx";
import themeNeutral from "./themeNeutral.jsx";

function App() {
  return (
    <ThemeProvider theme={themeNeutral}>
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;

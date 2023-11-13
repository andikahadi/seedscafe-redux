import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

function App() {
  const theme = createTheme(themeSettings());

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AppProvider } from "./context/AppContext";
import { GlobalStyles } from "./styles/GlobalStyles";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import Saved from "./pages/Saved/Saved";

const theme = {
  colors: {
    bg: "#0a0a0f",
    surface: "#111118",
    surface2: "#1a1a24",
    border: "#2a2a3a",
    accent: "#6c63ff",
    accent2: "#ff6584",
    accent3: "#43e97b",
    text: "#f0eff8",
    textMuted: "#7c7c9a",
  },
  fonts: {
    display: "'Syne', sans-serif",
    body: "'DM Sans', sans-serif",
  },
  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    laptop: "1024px",
    desktop: "1200px",
  },
};

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
            <Route path="/saved" element={<Saved />} />
          </Routes>
        </ThemeProvider>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;

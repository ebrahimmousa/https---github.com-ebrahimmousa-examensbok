import Header from "./components/header/header";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import NavBar from "./components/header/NavBar";
import Hero from "./components/hero/Hero";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Icons from "./components/hero/Icons";
import Footer from "./components/footer/Footer";
import Main from "./components/main/main";
import ScrollToTop from "./components/scroll/ScrollToTop";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <NavBar />
        <Hero />
        <Main />
        <Icons />
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

// App.jsx

import { useState } from "react";
import Router from "./Router";
import Header from "./components/Header/Header";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./Theme";
import { GlobalStyle } from "./GlobalStyle";
import { Container } from "./components/HomeStyle";

function App() {
  // User Theme----------------------------------------
  const [themeMode, setThemeMode] = useState("black");

  const theme = themeMode === "black" ? dark : light;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        {/* container로 감쌀 수 있고 안해도 됨 걍 이렇게 할 수 있다는걸 보여줌 */}
        <Header />
        <Router />
      </Container>
    </ThemeProvider>
  );
}

export default App;

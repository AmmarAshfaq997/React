import React from "react";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import "antd/dist/antd.min.css";
import { BrowserRouter } from "react-router-dom";
import Main from "./routes/index";

const theme = {
  colors: {
    title: "#37383a",
    subTitle: "#bfbfbf",
    highlight: "#4780da",
  },
  font: {
    size: {
      title: "16px",
      subTitle: "14px",
    },
    weight: {
      title: 600,
      subTitle: 400,
    },
  },
};
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Main />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

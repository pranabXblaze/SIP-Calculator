import React  from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ThemeProvider from "./components/ThemeProvider/theme-provider";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme"> 
        <App/>
      </ThemeProvider>
  </React.StrictMode>
);

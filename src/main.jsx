import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store, persistor } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import ThemeProvider from "./components/ThemeProvider.jsx";

// Suppress specific warning for findDOMNode
const originalWarn = console.warn;
console.warn = (message, ...args) => {
  if (message.includes('findDOMNode')) return;
  originalWarn(message, ...args);
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </PersistGate>
  </React.StrictMode>
);

// Restore the original console.warn function
console.warn = originalWarn;

import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import Alerts from "./components/alerts/alert.component.jsx";
import { Provider } from "react-redux";
import store from "./store";

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: "top center",
};

function App() {
  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <BrowserRouter>
          <Alerts />
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </BrowserRouter>
      </AlertProvider>
    </Provider>
  );
}

export default App;

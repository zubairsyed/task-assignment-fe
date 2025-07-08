import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext } from "react";
import HomeScreen from "./Screens/OAuth/OAuth";
import "./App.css";
import useLoader from "./Components/Loader/useLoader";
import WelcomeScreen from "./Screens/Welcome/Welcome";

export const AppContext = createContext({
  showLoader: (id) => {},
  hideLoader: (id) => {},
});

export const RouterPaths = {
  root: "/",
  login: "login",
  signup: "signup",
  welcome: "welcome",
};

function App() {
  const [loader, showLoader, hideLoader] = useLoader();

  return (
    <>
      <AppContext.Provider value={{ showLoader, hideLoader }}>
        <Router>
          <Routes>
            <Route path={RouterPaths.root} index element={<HomeScreen />} />
            <Route
              path={RouterPaths.welcome}
              index
              element={<WelcomeScreen />}
            />
          </Routes>
        </Router>
        {loader}
      </AppContext.Provider>
    </>
  );
}

export default App;

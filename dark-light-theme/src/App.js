import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./app/navigation/NavBar";
import React from "react";
import Routes from "./app/routes";
import { ThemeProvider } from "./theme-context";
import Modal from "./app/components/Modal";
import DialogBox from "./app/components/DialogBox";
import ClassComponent from "./app/components/classComponent/ClassComponent";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <NavBar />
        <Routes />
      </Router>
      {/* <Modal /> */}
      <DialogBox />
      <ClassComponent />
    </ThemeProvider>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Home_page";
import SignIn from "./pages/SignIn";
import Featured from "./pages/Featured";
import Market from "./pages/Market";
import TestPage from "./pages/TestPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TestPage />} />
      </Routes>
    </Router>
  );
};

export default App;

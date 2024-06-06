import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Launch1 from "./components/Launch1";
import Launch2 from "./components/Launch2";
import Success from "./components/Success";
import Scanner from "./components/Qrscanner";
import Fail from "./components/Fail";
import Help from "./components/Howtoscreen"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Launch1 />} />
        <Route path="/launch2" element={<Launch2 />} />
        <Route path="/success" element={<Success />} />
        <Route path="/scanner" element={<Scanner />} />
        <Route path="/fail" element={<Fail />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </Router>
  );
}

export default App;

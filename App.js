import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./main"; // 메인 컴포넌트 불러옴
import Sub from "./sub";   // 서브 컴포넌트 불러옴

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Main</Link>
        <Link to="/sub">Sub</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sub" element={<Sub />} />
      </Routes>
    </Router>
  );
}

export default App;

import "./App.css";
import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Counter from "./learn-useState/counter";
import Effect from "./learn-useEffect";
import Context from "./learn-useContext";
import { ProfileProvider } from "./learn-useContext/profileContext";
import Ref from "./learn-useRef";
function App() {
  return (
    <ProfileProvider>
      <Router>
        <div className="App-header">
          <nav className="NavBar">
            <ul className="ul">
              <li className="li">
                <Link to="/">Use State</Link>
              </li>
              <li className="li">
                <Link to="/effect">Use Effect</Link>
              </li>
              <li className="li">
                <Link to="/context">Use Context</Link>
              </li>
              <li className="li">
                <Link to="/ref">Use Ref</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" exact element={<Counter />} />
            <Route path="/effect" element={<Effect />} />
            <Route path="/context" element={<Context />} />
            <Route path="/ref" element={<Ref />} />
          </Routes>
        </div>
      </Router>
    </ProfileProvider>
  );
}
export default App;

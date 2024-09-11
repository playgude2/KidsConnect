import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Admin from "./Pages/Admin/Admin";
import Loading from "./Pages/Loading/Loading";
import Avatar from "./Pages/Avatar/Avatar";
import About from "./Pages/About/About";
import Configuration from "./Pages/Configuration/Configuration";
import Setup from "./Pages/Setup/Setup";
import Wish from "./Pages/MakeWish/Wish";
import Letter from "./Pages/LetterToJudge/Letter";
import Summary from "./Pages/Summary/Summary";

import { useMemo } from "react";
export function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Loading />} />
          <Route path="/home" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/avatar-creation" element={<Avatar />} />
          <Route path="/about" element={<About />} />
          <Route path="/configuration" element={<Configuration />} />
          <Route path="/setup" element={<Setup />} />
          <Route path="/make-a-wish" element={<Wish />} />
          <Route path="/letter-to-judge" element={<Letter />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

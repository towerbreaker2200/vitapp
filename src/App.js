import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/nav/navbar";
import Home from "./Routes/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

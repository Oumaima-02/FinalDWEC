import "../styles.css";
import HorasSemanales from "../components/HorasSemanales";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetList from "../components/getallobjectives";
import GetDetails from "../components/getdetails";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetList />} />
        <Route path="/new-objective" element={<HorasSemanales />} />
        <Route path="/show-objective /:id" element={<GetDetails />} />
      </Routes>
    </Router>
  );
}

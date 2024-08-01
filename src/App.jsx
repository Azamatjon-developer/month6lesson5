import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Agents,
  Articles,
  Contacts,
  Ideas,
  Overview,
  Settings,
  Tickets,
  Subsricption,
} from "./pages";
import "./App.css";
import Navbar from "./components/Navbar";
import CustomRoutes from "./routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-between">
      <Navbar />

      <CustomRoutes />
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeView from "./Views/HomeView";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
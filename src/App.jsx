import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeView from "./Views/HomeView";
import RegisterView from "./Views/RegisterView";
import MoviesView from "./Views/MoviesView";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        {/* <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={} />
        <Route path="/movies" element ={<MoviesView />} /> need to complete */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
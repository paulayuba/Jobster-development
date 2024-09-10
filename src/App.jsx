import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from './Component/LandingPage';
import Login from './Component/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

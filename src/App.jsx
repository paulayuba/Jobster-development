import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from './Pages/LandingPage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/dashboard';
import Stats from "./Component/Stats";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
        <Route path='/dashboard/*' element={<Dashboard/>}/>
        <Route path="/stats" element={<Stats/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import Navbar from './components/Navbar';
import { Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import ListViewPage from "./pages/list-view-page"
import LandingPage from "./pages/landing-page"
function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element = {<Navigate to = "landing" />} />
        <Route path = "/landing" element ={<LandingPage />} />
        <Route path = "/properties" element ={<ListViewPage />} />
        <Route path = "/properties/:id" element ={<ListViewPage />} />
      </Routes>
    </div>
  );
}

export default App;

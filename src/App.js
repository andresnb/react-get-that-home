import Navbar from "./components/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import ListViewPage from "./pages/list-view-page";
import LandingPage from "./pages/landing-page";
import PropertyDetailPage from "./pages/property-detail-page";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Navigate to="landing" />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/properties" element={<ListViewPage />} />
        <Route path="/properties/:id" element={<PropertyDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;

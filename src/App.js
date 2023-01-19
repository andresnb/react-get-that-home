// import Navbar from './components/Navbar';
import {UnauthenticatedNavbar, LandlordNavbar, HomeSeekerNavbar} from "./components/Navbar/navbar.js"
import { Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import ListViewPage from "./pages/list-view-page";
import LandingPage from "./pages/landing-page";
import PropertyDetailPage from './pages/property-detail-page';
import MyProperties from "./pages/my-properties-page.js";
import SavedProperties from "./pages/saved-properties-page.js";
import EditPropertyDetail from "./pages/edit-property-detail-page.js";
import { useAuth } from "./context/auth-context";

function App() {
  const { user, userType} = useAuth();

  return (
    <div>
      {user && userType === "home-seeker" ? <HomeSeekerNavbar /> :
       user && userType === "landlord" ? <LandlordNavbar /> :<UnauthenticatedNavbar />}
      <Routes>
        <Route index element = {<Navigate to = "landing" />} />
        <Route path = "/landing" element ={<LandingPage />} />
        <Route path = "/properties" element ={<ListViewPage />} />
        <Route path="/properties/:id" element={<PropertyDetailPage />} />
        <Route path="/my-properties" element={<MyProperties />} />
        <Route path="/saved-properties" element={<SavedProperties />} />
        <Route path = "/edit-property-detail" element ={<EditPropertyDetail />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;

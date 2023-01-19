import {UnauthenticatedNavbar, LandlordNavbar, HomeSeekerNavbar} from "./components/Navbar/navbar.js"
import { Navigate, Route, Routes } from "react-router-dom";
import ListViewPage from "./pages/list-view-page";
import LandingPage from "./pages/landing-page";
import PropertyDetailPage from './pages/property-detail-page';
import MyProperties from "./pages/my-properties-page.js";
import SavedProperties from "./pages/saved-properties-page.js";
import Navbar from './components/Navbar';
import LoginForm from "./components/LoginForm/login-form";
import SignUp from "./components/SignupForm/signup-form";
import { useAuth } from "./context/auth-context";
import './App.css';


function App() {
  const { user, userType} = useAuth();

  return (
    <div>
      {user && userType === "home-seeker" ? <HomeSeekerNavbar /> :
       user && userType === "landlord" ? <LandlordNavbar /> :<UnauthenticatedNavbar />}
      <Routes>
        <Route index element = {<Navigate to = "landing" />} />
        <Route path = "/landing" element ={<LandingPage />} />
        <Route path = "/signup" element ={<SignUp />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path = "/properties" element ={<ListViewPage />} />
        <Route path="/properties/:id" element={<PropertyDetailPage />} />
        <Route path="/my-properties" element={<MyProperties />} />
        <Route path = "/saved-properties" element ={<SavedProperties />} />
      </Routes>
    </div>
  );
}

export default App;

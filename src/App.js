import { Navigate, Route, Routes } from "react-router-dom";
import ListViewPage from "./pages/list-view-page";
import LandingPage from "./pages/landing-page";
import PropertyDetailPage from './pages/property-detail-page';
import Navbar from './components/Navbar';
import LoginForm from "./components/LoginForm/login-form";
import SignUp from "./components/SignupForm/signup-form";
import { useAuth } from "./context/auth-context";
import './App.css';


function App() {
  // const { user } = useAuth();

  return (
    <div>
      <Navbar />
      {/* user ? <AuthenticatedNavbar /> : <UnauthenticatedNavbar /> */}
      <Routes>
        <Route index element = {<Navigate to = "landing" />} />
        <Route path = "/landing" element ={<LandingPage />} />
        <Route path = "/signup" element ={<SignUp />} />
        <Route path = "/properties" element ={<ListViewPage />} />
        <Route path = "/properties/:id" element ={<PropertyDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;

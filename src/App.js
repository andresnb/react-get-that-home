import Navbar from './components/Navbar';
import LandingPage from './pages/landing-page';
import PropertyCard from './components/PropertyCard';
import PropertyDetailPage from './pages/property-detail-page';
import TeamMembers from './components/TeamMembers';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      {/* <PropertyCard /> */}
      <LandingPage />
      {/* <PropertyDetailPage/> */}

    </div>
  );
}

export default App;

import Navbar from './components/Navbar';
import LandingPage from './pages/landing-page';
import PropertyCard from './components/PropertyCard';
import PropertyDetailPage from './pages/property-detail-page';
import ListViewPage from './pages/list-view-page';
import './App.css';
import { getProperties } from './services/property-service';

function App() {

  const properties = getProperties();
  
  console.log(properties)


  return (
    <div>
      <Navbar />
      {/* <PropertyCard /> */}
      {/* <LandingPage /> */}
      {/* <PropertyDetailPage/> */}
      {/* <ListViewPage/> */}
    </div>
  );
}

export default App;

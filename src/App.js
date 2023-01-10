import Navbar from './components/Navbar';
import SearchPage from './pages/search-page'
import PropertyCard from './components/PropertyCard';
import PropertyDetailPage from './pages/property-detail-page';
import './App.css';

function App() {
  return (
    <div>
      {/* <Navbar />
      <PropertyCard />
      <SearchPage /> */}
      <PropertyDetailPage/>
    </div>
  );
}

export default App;

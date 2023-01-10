import Navbar from './components/Navbar';
import SearchPage from './pages/search-page'
import PropertyCard from './components/PropertyCard';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <SearchPage />
      <PropertyCard />
    </div>
  );
}

export default App;

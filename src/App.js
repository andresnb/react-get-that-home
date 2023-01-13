import Navbar from './components/Navbar';
import LandingPage from './pages/landing-page';
import PropertyCard from './components/PropertyCard';
import PropertyDetailPage from './pages/property-detail-page';
import ListViewPage from './pages/list-view-page';
import PropertyForm from './components/PropertyForm';
import styled from 'styled-components';
import './App.css';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Wrapper>
      <Navbar />
      {/* <PropertyCard /> */}
      {/* <LandingPage /> */}
      {/* <PropertyDetailPage/> */}
      {/* <ListViewPage/> */}
      <PropertyForm/>
    </Wrapper>
  );
}

export default App;

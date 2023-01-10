import Navbar from './components/Navbar';
import SearchPage from './pages/search-page'
import PropertyCard from './components/PropertyCard';
import TeamMemberCard from './components/TeamMemberCard';
import './App.css';

function App() {
  return (
    <div>
      {/* <Navbar />
      <PropertyCard /> */}
      <SearchPage />
      {/* <TeamMemberCard name="Martha Huaman" githubUrl="https://github.com/ssmartha"
        linkedinUrl="https://www.linkedin.com/in/ssmartha/"
      img={"../src/assets/images/martha-huaman-profile.png"}/> */}
      {/* <img
      src={require("../src/assets/images/martha-huaman-profile.png")}
      alt="team member picture"
      style={{ height: "60px", width:"60px"}}
      /> */}
    </div>
  );
}

export default App;

import styled from 'styled-components';
import TeamMemberCard from '../components/TeamMemberCard/teamMemberCard';
import PropertyCard from '../components/PropertyCard/propertyCard';
import sampleProperty from "../assets/images/rental-image-example.png";
import christoffpic from "../assets/images/christoff-echevarria-profile.png";
import andrespic from "../assets/images/andres-naula-profile.png";
import anthonypic from "../assets/images/anthony-caceres-profile.png";
import marthapic from "../assets/images/martha-huaman-profile.png";
import {DiRuby, DiReact} from "react-icons/di";
import {useNavigate} from 'react-router-dom';
// import { ReactComponent as LandingBackground } from "../assets/svg/landing-background.svg";
import LandingBackground from "../assets/svg/landing-background.svg";
import { useAuth } from "../context/auth-context";





const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


// const Section1 = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;

//     width: 100%;
//     height: 600px;
//     left: 0px;
//     top: 1588px;
// `;
const SearchSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  gap: 66px;
  width: 100%;
  height: 600px;
`;

const SamplePropertiesSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 66.07px;
  margin-bottom: 66.07px;
`;

const SignupSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 312px;
  width: 1440px;
  padding-top: 64px;
  padding-bottom: 64px;
  background-color: rgba(244, 143, 177, 0.15);
`;

const LandingFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1440px;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: #F5F5F6;
`;

const LandingDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: top;
  align-items: top;
  width: 1000px;
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: #F5F5F6;
  justify-content: space-between
`;

const TeamMembersSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 64px;
  padding-bottom: 64px;
`;

const StyledForm = styled("form")`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 0px 8px 0px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
`;

const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  padding: 0px 8px 0px 16px;
  border-right: 1px solid #E1E2E1;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 16px 10px 8px;
`;

const SearchButton = styled("button")`
  width: 96px;
  height: 40px;
  border: none;
  background: #F48FB1;
  border-radius: 16px;
  padding: 0px;
`;

const SignupButton = styled("button")`
  width: 264px;
  height: 56px;
  border: none;
  background: #F48FB1;
  border-radius: 16px;
  padding: 0px;
`;

const StyledSelectTitle = styled.p`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 10px;
  line-height: 16px;
  letter-spacing: 1.5px;
  color: #616161;
`;

const ButtonText = styled.p`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 1.25px;
  color: #FFFFFF;
`;

const PropertiesContainer = styled.div`
  width: fit-content;
  display: grid;
  gap: 48px;
  grid-template-columns: repeat(3, 300px);
  justify-content:center;
  align-items: center;
`;

const TeamMembersContainer = styled.div`
  width: fit-content;
  display: grid;
  gap: 62px;
  grid-template-columns: repeat(4, 240px);
  justify-content:center;
  align-items: center;
`;

function LandingPage() {
  const { setDisplayedPropertiesType } = useAuth();
  const navigate = useNavigate();

  setDisplayedPropertiesType("test");

  function handleSubmit(event) {

    event.preventDefault();



    const params = {
      property_type: event.target.elements[0].value,
      operation_type: event.target.elements[1].value,
      district: event.target.elements[2].value
    }

    localStorage.setItem("params", JSON.stringify(params));

    navigate(`/properties?property_type${event.target.elements[0].value}=&operation_type=${event.target.elements[1].value}&district=${event.target.elements[2].value}`);

  }

  return (
    <Wrapper>
      {/* <LandingBackground/> */}
      <SearchSection style={{ backgroundImage: `url(${LandingBackground})`, backgroundPosition: 'center' }} >
        <Wrapper>
          <p style={{ fontFamily: "Montserrat", fontWeight: "300", fontSize: "64px",
            lineHeight: "88px", letterSpacing: "-0.5px", color: "#373737", marginTop: "60px"}}>Meet your new Home</p>
          <p style={{ fontFamily: "Montserrat", fontWeight: "400", fontSize: "24px",
            lineHeight: "32px", color: "#616161"}}>The easiest way to find where you belong</p>
        </Wrapper>

        <StyledForm onSubmit={handleSubmit} >
          <SelectBox>
            <StyledSelectTitle>I'M LOOKING FOR</StyledSelectTitle>
            <select required name="property_type"  style={{ border: "none", height: "24px", width: "160px", fontFamily: "Inter", fontSize: "16px",
                lineHeight: "24px", letterSpacing: "0.5px", color: "#373737"}}>
              <option value="Apartment">An apartment</option>
              <option value="House">A house</option>
            </select>
          </SelectBox>

          <SelectBox>
            <StyledSelectTitle>I WANT TO</StyledSelectTitle>
            <select required defaultValue="Rent" name="operation_type"  style={{ border: "none", height: "24px", width: "160px", fontFamily: "Inter", fontSize: "16px",
                lineHeight: "24px", letterSpacing: "0.5px", color: "#373737"}}>
              <option value="Rent">Rent</option>
              <option value="Sale">Sale</option>
            </select>
          </SelectBox>

          <SelectBox>
            <StyledSelectTitle>WHERE</StyledSelectTitle>
            <select required defaultValue="Favorite district" name="district"  style={{ border: "none", height: "24px", width: "304px", fontFamily: "Inter", fontSize: "16px",
                lineHeight: "24px", letterSpacing: "0.5px", color: "#373737"}}>
              <option disabled hidden>Favorite district</option>
              <option value="Anc??n">Anc??n</option>
              <option value="Ate">Ate</option>
              <option value="Barranco">Barranco</option>
              <option value="Bre??a">Bre??a</option>
              <option value="Carabayllo">Carabayllo</option>
              <option value="Cercado de Lima">Cercado de Lima</option>
              <option value="Chorrillos">Chorrillos</option>
              <option value="Cieneguilla">Cieneguilla</option>
              <option value="Comas">Comas</option>
              <option value="El agustino">El agustino</option>
              <option value="Independencia">Independencia</option>
              <option value="La molina">La molina</option>
              <option value="La victoria">La victoria</option>
              <option value="Lince">Lince</option>
              <option value="Los olivos">Los olivos</option>
              <option value="Lurigancho">Lurigancho</option>
              <option value="Lur??n">Lur??n</option>
              <option value="Magdalena del mar">Magdalena del mar</option>
              <option value="Miraflores">Miraflores</option>
              <option value="Pachac??mac">Pachac??mac</option>
              <option value="Pucusana">Pucusana</option>
              <option value="Pueblo libre">Pueblo libre</option>
              <option value="Puente piedra">Puente piedra</option>
              <option value="Punta hermosa">Punta hermosa</option>
              <option value="Punta negra">Punta negra</option>
              <option value="R??mac">R??mac</option>
              <option value="San bartolo">San bartolo</option>
              <option value="San borja">San borja</option>
              <option value="San isidro">San isidro</option>
              <option value="San Juan de Lurigancho">San Juan de Lurigancho</option>
              <option value="San Juan de Miraflores">San Juan de Miraflores</option>
              <option value="San Luis">San Luis</option>
              <option value="San Martin de Porres">San Martin de Porres</option>
              <option value="San Miguel">San Miguel</option>
              <option value="Santa Anita">Santa Anita</option>
              <option value="Santa Mar??a del Mar">Santa Mar??a del Mar</option>
              <option value="Santa Rosa">Santa Rosa</option>
              <option value="Santiago de Surco">Santiago de Surco</option>
              <option value="Surquillo">Surquillo</option>
              <option value="Villa el Salvador">Villa el Salvador</option>
              <option value="Villa Maria del Triunfo">Villa Maria del Triunfo</option>
            </select>
          </SelectBox>

          <ButtonBox>
            <SearchButton type="submit">
              <ButtonText> Search </ButtonText>
            </SearchButton>
          </ButtonBox>
        </StyledForm>
      </SearchSection>

      <SamplePropertiesSection>
        <Wrapper>
          <p style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "14px",
            lineHeight: "20px", letterSpacing: "0.1px", color: "#373737"}}>Find an Apartment you Love</p>
          <p style={{ fontFamily: "Montserrat", fontWeight: "400", fontSize: "36px",
            lineHeight: "48px", color: "#BF5F82", marginTop: "16.07px", marginBottom: "32px"}}>Homes for rent at the best prices</p>
        </Wrapper>
        <PropertiesContainer>
          <PropertyCard image={sampleProperty} />
          <PropertyCard image={sampleProperty} />
          <PropertyCard image={sampleProperty} />
        </PropertiesContainer>
      </SamplePropertiesSection>

      <SignupSection>
        <p style={{ fontFamily: "Montserrat", fontWeight: "400", fontSize: "36px",
          lineHeight: "48px", letterSpacing: "0.25px", color: "#373737",
          marginBottom: "32px", width: "823px", textAlign: "center"
        }}>Getting someone to rent your apartment has never been this easy</p>
        <SignupButton>
          <p style={{ fontFamily: "Inter", fontWeight: "500", fontSize: "14px",
            lineHeight: "24px", letterSpacing: "1.25px", color: "#FFFFFF"}}>CREATE AN ACCOUNT NOW</p>
        </SignupButton>
      </SignupSection>

      <TeamMembersSection>
        <p style={{ fontSize: "48px", fontFamily: "Montserrat",
          fontWeight: "400", lineHeight: "58.51px", color: "#BF5F82",
          textAlign: "center", marginBottom: "26px"
        }}> Meet the team </p>
        <TeamMembersContainer>
          <TeamMemberCard name="Andres Naula" githubUrl="https://github.com/andresnb"
          linkedinUrl="https://www.linkedin.com/in/andresnaula/"
          image={andrespic}/>
          <TeamMemberCard name="Anthony Caceres" githubUrl="https://github.com/AnthonyKcrs"
          linkedinUrl="https://www.linkedin.com/in/anthony-c%C3%A1ceres-mart%C3%ADnez-b38280140/"
          image={anthonypic}/>
          <TeamMemberCard name="Christoff Echevarria" githubUrl="https://github.com/andresnb"
          linkedinUrl="https://www.linkedin.com/in/andresnaula/"
          image={christoffpic}/>
          <TeamMemberCard name="Martha Huaman" githubUrl="https://github.com/ssmartha"
          linkedinUrl="https://www.linkedin.com/in/ssmartha/"
          image={marthapic}/>
        </TeamMembersContainer>
      </TeamMembersSection>

      <LandingFooter>
        <LandingDetailsContainer>
          <p>?? 2023 - Find That Home</p>
          <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "2px"}}>
            <p>Source Code</p>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "5px"}}>
              <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "3.67px"}}>
                <DiRuby style={{width: "20px", height: "19px", color: "#616161"}}/>
                <p>Ruby on Rails REST API</p>
              </div>
              <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "3.67px"}}>
                <DiReact style={{width: "20px", height: "19px", color: "#616161"}}/>
                <p>React Responsive SPA</p>
              </div>
            </div>
          </div>
          <p>Codeable - Cohort 8 Final Project</p>
        </LandingDetailsContainer>
      </LandingFooter>
    </Wrapper>
  )
}

export default LandingPage

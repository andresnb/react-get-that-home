import styled from 'styled-components';
import TeamMemberCard from '../components/TeamMemberCard/teamMemberCard';
import PropertyCard from '../components/PropertyCard/propertyCard';
import sampleProperty from "../assets/images/rental-image-example.png";
import christoffpic from "../assets/images/christoff-echevarria-profile.png";
import andrespic from "../assets/images/andres-naula-profile.png";
import anthonypic from "../assets/images/anthony-caceres-profile.png";
import marthapic from "../assets/images/martha-huaman-profile.png";
import {DiRuby, DiReact} from "react-icons/di";
// import { ReactComponent as LandingBackground } from "../assets/svg/landing-background.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SearchSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 66px;
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

  return (
    <Wrapper>
      {/* <LandingBackground/> */}
      <SearchSection>
        <Wrapper>
          <p style={{ fontFamily: "Montserrat", fontWeight: "300", fontSize: "64px",
            lineHeight: "88px", letterSpacing: "-0.5px", color: "#373737"}}>Meet your new Home</p>
          <p style={{ fontFamily: "Montserrat", fontWeight: "400", fontSize: "24px",
            lineHeight: "32px", color: "#616161"}}>The easiest way to find where you belong</p>
        </Wrapper>

        <StyledForm >
          <SelectBox>
            <StyledSelectTitle>I'M LOOKING FOR</StyledSelectTitle>
            <select required name="relation"  style={{ border: "none", height: "24px", width: "160px", fontFamily: "Inter", fontSize: "16px",
                lineHeight: "24px", letterSpacing: "0.5px", color: "#373737"}}>
              <option value="Apartment">An apartment</option>
              <option value="House">A house</option>
            </select>
          </SelectBox>

          <SelectBox>
            <StyledSelectTitle>I WANT TO</StyledSelectTitle>
            <select required name="relation"  style={{ border: "none", height: "24px", width: "160px", fontFamily: "Inter", fontSize: "16px",
                lineHeight: "24px", letterSpacing: "0.5px", color: "#373737"}}>
              <option value="Rent">Rent</option>
              <option value="Sale">Sale</option>
            </select>
          </SelectBox>

          <SelectBox>
            <StyledSelectTitle>WHERE</StyledSelectTitle>
            <select required name="relation"  style={{ border: "none", height: "24px", width: "304px", fontFamily: "Inter", fontSize: "16px",
                lineHeight: "24px", letterSpacing: "0.5px", color: "#373737"}}>
              <option disabled selected hidden>Favorite district</option>
              <option value="Family">Ancón</option>
              <option value="Family">Ate</option>
              <option value="Friends">Barranco</option>
              <option value="Work">Breña</option>
              <option value="Acquaintance">Carabayllo</option>
              <option value="Acquaintance">Cercado de Lima</option>
              <option value="Acquaintance">Chorrillos</option>
              <option value="Family">Cieneguilla</option>
              <option value="Friends">Comas</option>
              <option value="Work">El agustino</option>
              <option value="Acquaintance">Independencia</option>
              <option value="Acquaintance">La molina</option>
              <option value="Acquaintance">La victoria</option>
              <option value="Family">Lince</option>
              <option value="Friends">Los olivos</option>
              <option value="Work">Lurigancho</option>
              <option value="Acquaintance">Lurín</option>
              <option value="Acquaintance">Magdalena del mar</option>
              <option value="Acquaintance">Miraflores</option>
              <option value="Family">Pachacámac</option>
              <option value="Family">Pucusana</option>
              <option value="Friends">Pueblo libre</option>
              <option value="Work">Puente piedra</option>
              <option value="Acquaintance">Punta hermosa</option>
              <option value="Acquaintance">Punta negra</option>
              <option value="Acquaintance">Rímac</option>
              <option value="Family">San bartolo</option>
              <option value="Friends">San borja</option>
              <option value="Work">San isidro</option>
              <option value="Family">San Juan de Lurigancho</option>
              <option value="Family">San Juan de Miraflores</option>
              <option value="Friends">San Luis</option>
              <option value="Work">San Martin de Porres</option>
              <option value="Acquaintance">San Miguel</option>
              <option value="Acquaintance">Santa Anita</option>
              <option value="Acquaintance">Santa María del Mar</option>
              <option value="Family">Santa Rosa</option>
              <option value="Friends">Santiago de Surco</option>
              <option value="Work">Surquillo</option>
              <option value="Acquaintance">Villa el Salvador</option>
              <option value="Acquaintance">Villa Maria del Triunfo</option>
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
        <p style={{ fontSize: "48px", fontFamily: "Montserrat", fontSize: "48px",
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
          <p>© 2023 - Find That Home</p>
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

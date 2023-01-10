import TeamMemberCard from "../components/TeamMemberCard"
import { AiOutlineGithub } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TeamMembersContainer = styled.div`
  width: fit-content;
  display: grid;
  gap: 92px;
  grid-template-columns: repeat(4, 180px);
  justify-content:center;
  align-items: center;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
`;

const MediaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 53px;
`;

function SearchPage() {

  return (
    <Wrapper>
      <div>AQUI VA EL SEARCH BAR</div>
      {/* <TeamMemberCard name="Martha Huaman" githubUrl="https://github.com/ssmartha"
        linkedinUrl="https://www.linkedin.com/in/ssmartha/"
        img={"../assets/images/martha-huaman-profile.png"}/> */}
      <TeamMembersContainer>
        <CardWrapper>
          <img
          src={require("../assets/images/andres-naula-profile.png")}
          alt="team member picture"
            style={{ height: "180px", width: "180px", borderRadius: "50%" }}
          />
          <DetailsWrapper>
            <p style={{ fontSize: "12px", fontFamily: "Montserrat", fontSize: "24px",
            fontWeight: "400", lineHeight: "29px"  }}> Andres Naula </p>
            <MediaWrapper>
              <a href="https://github.com/andresnb"> <AiOutlineGithub style={{width: "20px", height: "19.51px", color: "#616161"}}/> </a>
              <a href="https://www.linkedin.com/in/andresnaula/"> <CiLinkedin style={{width: "20px", height: "19.51px", color: "#616161"}}/> </a>
            </MediaWrapper>
          </DetailsWrapper>
        </CardWrapper>
        <CardWrapper>
          <img
          src={require("../assets/images/anthony-caceres-profile.png")}
          alt="team member picture"
            style={{ height: "180px", width: "180px", borderRadius: "50%" }}
          />
          <DetailsWrapper>
            <p style={{ fontSize: "12px", fontFamily: "Montserrat", fontSize: "24px",
            fontWeight: "400", lineHeight: "29px"  }}> Anthony Caceres </p>
            <MediaWrapper>
              <a href="https://github.com/andresnb"> <AiOutlineGithub style={{width: "20px", height: "19.51px", color: "#616161"}}/> </a>
              <a href="https://www.linkedin.com/in/andresnaula/"> <CiLinkedin style={{width: "20px", height: "19.51px", color: "#616161"}}/> </a>
            </MediaWrapper>
          </DetailsWrapper>
        </CardWrapper>
        <CardWrapper>
          <img
          src={require("../assets/images/christoff-echevarria-profile.png")}
          alt="team member picture"
            style={{ height: "180px", width: "180px", borderRadius: "50%" }}
          />
          <DetailsWrapper>
            <p style={{ fontSize: "12px", fontFamily: "Montserrat", fontSize: "24px",
            fontWeight: "400", lineHeight: "29px"  }}> Anthony Caceres </p>
            <MediaWrapper>
              <a href="https://github.com/andresnb"> <AiOutlineGithub style={{width: "20px", height: "19.51px", color: "#616161"}}/> </a>
              <a href="https://www.linkedin.com/in/andresnaula/"> <CiLinkedin style={{width: "20px", height: "19.51px", color: "#616161"}}/> </a>
            </MediaWrapper>
          </DetailsWrapper>
        </CardWrapper>
        <CardWrapper>
          <img
          src={require("../assets/images/martha-huaman-profile.png")}
          alt="team member picture"
            style={{ height: "180px", width: "180px", borderRadius: "50%" }}
          />
          <DetailsWrapper>
            <p style={{ fontSize: "12px", fontFamily: "Montserrat", fontSize: "24px",
            fontWeight: "400", lineHeight: "29px"  }}> Martha Huaman </p>
            <MediaWrapper>
              <a href="https://github.com/ssmartha"> <AiOutlineGithub style={{width: "20px", height: "19.51px", color: "#616161"}}/> </a>
              <a href="https://www.linkedin.com/in/ssmartha/"> <CiLinkedin style={{width: "20px", height: "19.51px", color: "#616161"}}/> </a>
            </MediaWrapper>
          </DetailsWrapper>
        </CardWrapper>
      </TeamMembersContainer>
    </Wrapper>
  )
}

export default SearchPage

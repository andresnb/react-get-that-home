import styled from 'styled-components';
import { AiOutlineGithub } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TeamMembersContainer = styled.div`
  width: fit-content;
  display: grid;
  gap: 82px;
  grid-template-columns: repeat(4, 200px);
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

function TeamMembers() {

  return (
    <div>
      <p style={{ fontSize: "48px", fontFamily: "Montserrat", fontSize: "48px",
            fontWeight: "400", lineHeight: "58.51px", color: "#BF5F82", textAlign: "center", marginBottom: "26px"}}> Meet the team </p>
      <TeamMembersContainer>
        <CardWrapper>
          <img
          src={require("../../assets/images/andres-naula-profile.png")}
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
          src={require("../../assets/images/anthony-caceres-profile.png")}
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
          src={require("../../assets/images/christoff-echevarria-profile.png")}
          alt="team member picture"
            style={{ height: "180px", width: "180px", borderRadius: "50%" }}
          />
          <DetailsWrapper>
            <p style={{ fontSize: "12px", fontFamily: "Montserrat", fontSize: "24px",
            fontWeight: "400", lineHeight: "29px"  }}> Chirstoff Echevarria </p>
            <MediaWrapper>
              <a href="https://github.com/andresnb"> <AiOutlineGithub style={{width: "20px", height: "19.51px", color: "#616161"}}/> </a>
              <a href="https://www.linkedin.com/in/andresnaula/"> <CiLinkedin style={{width: "20px", height: "19.51px", color: "#616161"}}/> </a>
            </MediaWrapper>
          </DetailsWrapper>
        </CardWrapper>
        <CardWrapper>
          <img
          src={require("../../assets/images/martha-huaman-profile.png")}
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
    </div>
  )
}


export default TeamMembers;

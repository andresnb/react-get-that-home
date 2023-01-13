import styled from 'styled-components';
import { AiOutlineGithub } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

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

function TeamMemberCard({ name, githubUrl, linkedinUrl, image }) {

  return (
    <CardWrapper>
      <img
      src={image}
      alt="Team member"
        style={{ height: "180px", width: "180px", borderRadius: "50%" }}
      />
      <DetailsWrapper>
        <p style={{ fontSize: "12px", fontFamily: "Montserrat",
        fontWeight: "400", lineHeight: "29px"  }}> {name} </p>
        <MediaWrapper>
          <a href={githubUrl}> <AiOutlineGithub style={{width: "20px", height: "19.51px", color: "#616161"}}/> </a>
          <a href={linkedinUrl}> <CiLinkedin style={{width: "20px", height: "19.51px", color: "#616161"}}/> </a>
        </MediaWrapper>
      </DetailsWrapper>
    </CardWrapper>
  )
}

export default TeamMemberCard;

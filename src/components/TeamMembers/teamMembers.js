import styled from 'styled-components';
import christoffpic from "../../assets/images/christoff-echevarria-profile.png";
import andrespic from "../../assets/images/andres-naula-profile.png";
import anthonypic from "../../assets/images/anthony-caceres-profile.png";
import marthapic from "../../assets/images/martha-huaman-profile.png";
import TeamMemberCard from './teamMemberCard';

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

function TeamMembers() {

  return (
    <div>
      <p style={{ fontSize: "48px", fontFamily: "Montserrat", fontSize: "48px",
            fontWeight: "400", lineHeight: "58.51px", color: "#BF5F82", textAlign: "center", marginBottom: "26px"}}> Meet the team </p>
      <TeamMembersContainer>
        <TeamMemberCard name="Andres Naula" githubUrl="https://github.com/andresnb"
        linkedinUrl="https://www.linkedin.com/in/andresnaula/"
        image={andrespic}/>
        <TeamMemberCard name="Anthony Caceres" githubUrl="https://github.com/andresnb"
        linkedinUrl="https://www.linkedin.com/in/andresnaula/"
        image={anthonypic}/>
        <TeamMemberCard name="Christoff Echevarria" githubUrl="https://github.com/andresnb"
        linkedinUrl="https://www.linkedin.com/in/andresnaula/"
        image={christoffpic}/>
        <TeamMemberCard name="Martha Huaman" githubUrl="https://github.com/ssmartha"
        linkedinUrl="https://www.linkedin.com/in/ssmartha/"
        image={marthapic}/>
      </TeamMembersContainer>
    </div>
  )
}


export default TeamMembers;

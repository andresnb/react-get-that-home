// import styled from "@emotion/react";
import styled from 'styled-components';
import { RiGithubFillRiGithubFill } from "react-icons/ri"

const TeamMemberImage = styled("img")`
  width: 180px;
  height: 180px;
  border-radius: 50%;
`;


function TeamMemberCard({ name, githubUrl, linkedinUrl, img }) {
  return (
    <>
      <img
      src={require(img)}
      style={{ height: "60px", width:"60px"}}
      />
      <div>
        <p>{ name }</p>
        <div>
          <a href={githubUrl}>  </a>
          <a href={linkedinUrl}>  </a>
        </div>
      </div>
    </>
  )
}

export default TeamMemberCard

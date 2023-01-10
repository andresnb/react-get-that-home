import styled from 'styled-components';
import TeamMembers from '../components/TeamMembers';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function SearchPage() {

  return (
    <Wrapper>
      <div>AQUI VA EL SEARCH BAR</div>
      <TeamMembers/>
    </Wrapper>
  )
}

export default SearchPage

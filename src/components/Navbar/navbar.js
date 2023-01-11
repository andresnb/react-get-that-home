import styled from 'styled-components';
import PropertyCard from '../PropertyCard';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


function Navbar(){
  return (
    <Wrapper>
      <h1>HOLA SOY EL NAVBAR</h1>
      {/* <PropertyCard/> */}
    </Wrapper>
  )
}

export default Navbar

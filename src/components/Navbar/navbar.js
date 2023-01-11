import styled from 'styled-components';

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

    </Wrapper>
  )
}

export default Navbar

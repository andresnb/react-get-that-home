import styled from 'styled-components';
import TeamMembers from '../components/TeamMembers';
// import { ReactComponent as LandingBackground } from "../assets/svg/landing-background.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const StyledButton = styled("button")`
  width: 96px;
  height: 40px;
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

function LandingPage() {

  return (
    <Wrapper>
      <div>AQUI VA EL Landing PAGE</div>
      {/* <LandingBackground/> */}
      <p>Meet your new Home</p>
      <p>The easiest way to find where you belong</p>

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
          <StyledButton type="submit">
            <ButtonText> Search </ButtonText>
          </StyledButton>
        </ButtonBox>
      </StyledForm>

      {/* <TeamMembers/> */}
    </Wrapper>
  )
}

export default LandingPage

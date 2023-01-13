import styled from 'styled-components';
import PropertyCard from '../PropertyCard';
import getThatHomeLogo from "../../assets/images/get-that-home-logo.png";
// import {AiOutlineUserAdd} from "react-icons/ai";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import { AiOutlineMinus } from "react-icons/ai";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  width: 1136px;
  padding: 32px 0px;
`;

const StyledForm = styled("form")`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  gap: 16px;
  width: 600px;
  background-color: rgba(244, 143, 177, 0.15);
`;

const Input = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  width: 604px;
  height: 22px;
  font-family: 'Inter';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #373737;
  &:active, &:focus {
    border: none;
    outline: none;
    background-color: #ffffff;
  }
`;

const Checkbox = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid pink;
  width: 20px;
  height: 20px;
  font-family: 'Inter';
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: #8E8E8E;
`;

const SubmitPinkButton = styled("button")`
  height: 56px;
  width: 274px;
  border: none;
  background: #F48FB1;
  border-radius: 16px;
  padding: 0px 24px;
`;

function PropertyForm() {

  return (
    <FormSection>
      <StyledForm>
          <p style={{ fontFamily: "Montserrat", fontWeight: "400", fontSize: "36px",
          lineHeight: "48px", letterSpacing: "0.25px", color: "#000000"}}>LOGIN</p>

          <div>
              <p style={{ fontFamily: "Inter", fontWeight: "400", fontSize: "10px",
                lineHeight: "12.1px", letterSpacing: "1.5px", color: "#373737", marginBottom: "4px"}}>ADDRESS</p>

              <div style={{
              border: "2px solid #F48FB1", height: "36px",
              background: "#FFFFFF", color: "#373737", padding: "0px 9.67px",
              borderRadius: "8px", display: "flex", flexDirection: "row",
              justifyContent: "left", alignItems: "center", gap: "8px"}}>
                <FiSearch style={{width: "16.93px", height: "16.93px", color: "#8E8E8E"}}/>
                <Input
                name="address"
                type="text"
                // value={}
                // placeholder="address..."
                // onChange={(event) =>
                //   handleAddress(event)
                // }
                />
              </div>
          </div>

          <div>
              <p style={{ fontFamily: "Inter", fontWeight: "400", fontSize: "10px",
                lineHeight: "12.1px", letterSpacing: "1.5px", color: "#373737", marginBottom: "4px"}}>PRICE</p>

              <div style={{
              border: "2px solid #F48FB1", height: "36px", width: "356px",
              background: "#FFFFFF", color: "#373737", padding: "0px 9.67px",
              borderRadius: "8px", display: "flex", flexDirection: "row",
              justifyContent: "left", alignItems: "center", gap: "8px"}}>
                <RiMoneyDollarCircleLine style={{width: "16.93px", height: "16.93px", color: "#8E8E8E"}}/>
                <Input
                name="price"
                type="number"
                // value={}
                // placeholder="address..."
                // onChange={(event) =>
                //   handlePrice(event)
                // }
                />
              </div>
          </div>

          <div>
              <p style={{ fontFamily: "Inter", fontWeight: "400", fontSize: "10px",
                lineHeight: "12.1px", letterSpacing: "1.5px", color: "#373737", marginBottom: "4px"}}>ABOUT THIS PROPERTY</p>

              <div style={{
              border: "2px solid #F48FB1", height: "72px",
              background: "#FFFFFF", color: "#373737", padding: "0px 9.67px",
              borderRadius: "8px", display: "flex", flexDirection: "row",
              justifyContent: "left", alignItems: "center", gap: "8px"}}>
                <Input
              name="description"
              type="text"
              // value={}
              placeholder="My apartment is great because..."
              // onChange={(event) =>
              //   handleDescription(event)
              // }
              style={ {height: "60px"}} />
              </div>
          </div>

          <div>
            <p style={{ fontFamily: "Inter", fontWeight: "400", fontSize: "10px",
              lineHeight: "12.1px", letterSpacing: "1.5px", color: "#616161", marginBottom: "12px"}}>PROPERTY TYPE</p>

            <div style={{display: "flex", flexDirection: "row", justifyContent: "left", alignItems: "center", gap: "16px"}}>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "left", alignItems: "center", gap: "4px"}}>
                  <Checkbox
                    type="checkbox"
                    name="check-property-type"
                    id="check-property-type"
                    />
                  <label for="check-property-type">Apartment</label>
                </div>

                <div style={{display: "flex", flexDirection: "row", justifyContent: "left", alignItems: "center", gap: "4px"}}>
                  <Checkbox
                    type="checkbox"
                    name="check-property-type"
                    id="check-property-type"
                    />
                  <label for="check-property-type">House</label>
                </div>
            </div>
          </div>

          <SubmitPinkButton type="submit">
              <p style={{ fontFamily: "Inter", fontWeight: "500", fontSize: "14px",
              lineHeight: "24px", letterSpacing: "1.25px", color: "#FFFFFF"}}>PUBLISH PROPERTY LISTING</p>
          </SubmitPinkButton>
      </StyledForm>
    </FormSection>
  )
}

export default PropertyForm;

import styled from "styled-components";
import PropertyCard from '../components/PropertyCard/propertyCard';
import { FiSearch, FiChevronDown } from "react-icons/fi";
import { AiOutlineMinus } from "react-icons/ai";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1136px;
  margin:16px 0px;
  gap: 16px;
`;

const FiltersSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1136px;
`;

const FilterButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

const PinkFilterButton = styled("button")`
  height: 40px;
  border: none;
  background: #F48FB1;
  border-radius: 16px;
  font-family: 'Inter';
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 1.25px;
  color: #FFFFFF;
`;

const WhiteButton = styled("button")`
  width: 50px;
  height: 20px;
  border: none;
  background: #FFFFFF;
  &:active {
    background: #F48FB1;
  }
  padding: 0px 12px;
`;

const PinkDoneButton = styled("button")`
  height: 32px;
  width: 60px;
  border: none;
  background: #F48FB1;
  border-radius: 8px;
  font-family: 'Inter';
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 1.25px;
  color: #FFFFFF;
  padding: 0px 8px;
`;

const PriceFilter = styled.div`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  width: 247px;
  height: 116px
  font-family: 'Inter';
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  padding: 8px;
`;

const PropertyFilter = styled.div`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  width: 211px;
  height: 116px
  font-family: 'Inter';
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  padding: 8px;
`;

const BedAndBathFilter = styled.div`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  width: 270px;
  height: 184px
  font-family: 'Inter';
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  padding: 8px;
`;


const MoreFilter = styled.div`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  width: 247px;
  height: 168px
  font-family: 'Inter';
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  padding: 8px;
`;


// border: 1px solid #F48FB1;
const ButtonFilterInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  width: 54px;
  height: 18px;
  font-family: 'Inter';
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: #8E8E8E;
`;

const ButtonFilterCheckbox = styled.input`
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

function ListViewPage() {

  return (
    <Wrapper>
      <PageContainer>
        <FiltersSection>
          <div style={{
            display: "flex", flexDirection: "row", justifyContent: "left",
            alignItems: "left", gap: "6px", border: "2px solid #F48FB1",
            borderRadius: "8px", padding: "8px", width: "240px"}}>
              <FiSearch style={{color: "#616161"}}/>
              <p style={{ fontFamily: "Inter", fontWeight: "500", fontSize: "14px",
                lineHeight: "24px", letterSpacing: "1.25px", color: "#616161"}}>Search by adress</p>
          </div>

          <FilterButtons>
            <PinkFilterButton>
                <p>PRICE</p>
            </PinkFilterButton>
            <PinkFilterButton>
                <p>PROPERTY TYPE</p>
            </PinkFilterButton>
            <PinkFilterButton>
                <p>BEDS & BATHS</p>
            </PinkFilterButton>
            <PinkFilterButton>
              <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "8px"}}>
                <p>MORE</p>
                <FiChevronDown style={{width: "17px", height: "17px", color: "#FFFFFF"}}/>
              </div>
            </PinkFilterButton>
          </FilterButtons>

          <select name="relation"  style={{ border: "2px solid #F48FB1", height: "40px", fontFamily: "Inter", fontSize: "16px",
                lineHeight: "24px", letterSpacing: "0.5px", color: "#373737", padding: "0px 8px 0px 4px", borderRadius: "8px"}}>;
              <option value="Rent">Renting</option>
              <option value="Buy">Buying</option>
              <option selected value="Both">Buying & Renting</option>
          </select>
        </FiltersSection>

        <PriceFilter>
          <p style={{ fontFamily: "Inter", fontWeight: "400", fontSize: "10px",
              lineHeight: "12.1px", letterSpacing: "1.5px", color: "#616161", marginBottom: "4px"}}>PRICE RANGE</p>

          <div style={{display: "flex", flexDirection: "row", justifyContent: "left", alignItems: "center", gap: "8px", marginBottom: "16px"}}>
              <div style={{
                border: "2px solid #F48FB1", height: "32px", width: "78px", background: "#FFFFFF",
                color: "#373737", padding: "0px 9.67px", borderRadius: "8px",
                display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "8px"}}>
                  <RiMoneyDollarCircleFill style={{width: "26.67px", height: "26.67px", color: "#8E8E8E"}}/>
                  <ButtonFilterInput
                    name="min-amount"
                    type="number"
                    // value={}
                    placeholder="min"
                    // onChange={(event) =>
                    //   handleMinAmount(event)
                    // }
                  />
              </div>
              <AiOutlineMinus />
              <div style={{
                border: "2px solid #F48FB1", height: "32px", width: "78px", background: "#FFFFFF",
                color: "#373737", padding: "0px 9.67px", borderRadius: "8px",
                display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "8px"}}>
                  <RiMoneyDollarCircleFill style={{width: "16.67px", height: "16.67px", color: "#8E8E8E"}}/>
                  <ButtonFilterInput
                    name="max-amount"
                    type="number"
                    // value={}
                    placeholder="max"
                    // onChange={(event) =>
                    //   handleMaxAmount(event)
                    // }
                  />
              </div>
          </div>

          <div style={{display: "flex", justifyContent: "right", alignItems: "right"}}>
            <PinkDoneButton>
              <p>PRICE</p>
            </PinkDoneButton>
          </div>
        </PriceFilter>

        <PropertyFilter>
          <p style={{ fontFamily: "Inter", fontWeight: "400", fontSize: "10px",
              lineHeight: "12.1px", letterSpacing: "1.5px", color: "#616161", marginBottom: "12px"}}>PROPERTY TYPE</p>

          <div style={{display: "flex", flexDirection: "row", justifyContent: "left", alignItems: "center", gap: "4px"}}>
            <ButtonFilterCheckbox
              type="checkbox"
              name="check-house"
              id="check-house"
              />
            <label for="check-house">Houses</label>
          </div>

          <div style={{display: "flex", flexDirection: "row", justifyContent: "left", alignItems: "center", gap: "4px"}}>
            <ButtonFilterCheckbox
              type="checkbox"
              name="check-apartment"
              id="check-apartment"
              />
            <label for="check-apartment">Apartments</label>
          </div>

          <div style={{display: "flex", justifyContent: "right", alignItems: "right", gap: "4px", marginTop: "4px"}}>
            <PinkDoneButton>
              <p>PRICE</p>
            </PinkDoneButton>
          </div>
        </PropertyFilter>

        <MoreFilter>
          <div style={{display: "flex", flexDirection: "row", justifyContent: "left", alignItems: "center", gap: "4px", marginBottom: "24px"}}>
            <ButtonFilterCheckbox
              type="checkbox"
              name="check-pets-allowed"
              id="check-pets-allowed"
              />
            <label for="check-pets-allowed">Pets allowed</label>
          </div>

          <p style={{ fontFamily: "Inter", fontWeight: "400", fontSize: "10px",
              lineHeight: "12.1px", letterSpacing: "1.5px", color: "#616161", marginBottom: "4px"}}>AREA IN M2</p>

          <div style={{display: "flex", flexDirection: "row", justifyContent: "left", alignItems: "center", gap: "8px", marginBottom: "16px"}}>
              <div style={{
                border: "2px solid #F48FB1", height: "32px", width: "78px", background: "#FFFFFF",
                color: "#373737", padding: "0px 9.67px", borderRadius: "8px",
                display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "8px"}}>
                  <ButtonFilterInput
                    name="min-amount"
                    type="number"
                    // value={}
                    placeholder="min"
                    // onChange={(event) =>
                    //   handleMinAmount(event)
                    // }
                  />
              </div>
              <AiOutlineMinus />
              <div style={{
                border: "2px solid #F48FB1", height: "32px", width: "78px", background: "#FFFFFF",
                color: "#373737", padding: "0px 9.67px", borderRadius: "8px",
                display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "8px"}}>
                  <ButtonFilterInput
                    name="max-amount"
                    type="number"
                    // value={}
                    placeholder="max"
                    // onChange={(event) =>
                    //   handleMaxAmount(event)
                    // }
                  />
              </div>
          </div>

          <div style={{display: "flex", justifyContent: "right", alignItems: "right"}}>
            <PinkDoneButton>
              <p>PRICE</p>
            </PinkDoneButton>
          </div>
        </MoreFilter>

        <BedAndBathFilter>
          <p style={{ fontFamily: "Inter", fontWeight: "400", fontSize: "10px",
              lineHeight: "12.1px", letterSpacing: "1.5px", color: "#616161", marginBottom: "4px"}}>BEDS</p>
          <div style={{display: "flex", flexDirection: "row", justifyContent: "left", alignItems: "center", marginBottom: "12px"}}>
            <WhiteButton>
              <p style={{ fontFamily: "Montserrat", fontWeight: "400",
              fontSize: "14px", lineHeight: "20px", color: "#616161"}}>Any</p>
            </WhiteButton>
            <WhiteButton>
              <p style={{ fontFamily: "Montserrat", fontWeight: "400",
              fontSize: "14px", lineHeight: "20px", color: "#616161"}}>1+</p>
            </WhiteButton>
            <WhiteButton>
              <p style={{ fontFamily: "Montserrat", fontWeight: "400",
              fontSize: "14px", lineHeight: "20px", color: "#616161"}}>2+</p>
            </WhiteButton>
            <WhiteButton>
              <p style={{ fontFamily: "Montserrat", fontWeight: "400",
              fontSize: "14px", lineHeight: "20px", color: "#616161"}}>3+</p>
            </WhiteButton>
            <WhiteButton>
              <p style={{ fontFamily: "Montserrat", fontWeight: "400",
              fontSize: "14px", lineHeight: "20px", color: "#616161"}}>4+</p>
            </WhiteButton>
          </div>
          <p style={{ fontFamily: "Inter", fontWeight: "400", fontSize: "10px",
              lineHeight: "12.1px", letterSpacing: "1.5px", color: "#616161", marginBottom: "4px"}}>BATHS</p>
          <div style={{display: "flex", flexDirection: "row", justifyContent: "left", alignItems: "center"}}>
            <WhiteButton>
              <p style={{ fontFamily: "Montserrat", fontWeight: "400",
              fontSize: "14px", lineHeight: "20px", color: "#616161"}}>Any</p>
            </WhiteButton>
            <WhiteButton>
              <p style={{ fontFamily: "Montserrat", fontWeight: "400",
              fontSize: "14px", lineHeight: "20px", color: "#616161"}}>1+</p>
            </WhiteButton>
            <WhiteButton>
              <p style={{ fontFamily: "Montserrat", fontWeight: "400",
              fontSize: "14px", lineHeight: "20px", color: "#616161"}}>2+</p>
            </WhiteButton>
            <WhiteButton>
              <p style={{ fontFamily: "Montserrat", fontWeight: "400",
              fontSize: "14px", lineHeight: "20px", color: "#616161"}}>3+</p>
            </WhiteButton>
            <WhiteButton>
              <p style={{ fontFamily: "Montserrat", fontWeight: "400",
              fontSize: "14px", lineHeight: "20px", color: "#616161"}}>4+</p>
            </WhiteButton>
          </div>

          <div style={{display: "flex", justifyContent: "right", alignItems: "right", marginTop: "16px"}}>
            <PinkDoneButton>
              <p>PRICE</p>
            </PinkDoneButton>
          </div>
        </BedAndBathFilter>
      </PageContainer>
    </Wrapper>
  )
}

export default ListViewPage;

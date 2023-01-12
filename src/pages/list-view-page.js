import styled from "styled-components";
import PropertyCard from '../components/PropertyCard/propertyCard';
import {FiSearch, FiChevronDown} from "react-icons/fi";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1136px;
  margin:16px 0px;
`;

const FiltersSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 96.5px;
`;

const FilterButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const PinkButton = styled("button")`
  height: 40px;
  border: none;
  background: #F48FB1;
  border-radius: 16px;
  padding: 0px 16px;
  font-family: 'Inter';
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 1.25px;
  color: #FFFFFF;
`;

function ListViewPage() {

  return (
    <Wrapper>
      <PageContainer>
        <FiltersSection>
          <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "left", gap: "6px", border: "2px solid #F48FB1", borderRadius: "8px", padding: "8px", width: "240px"}}>
              <FiSearch style={{color: "#616161"}}/>
              <p style={{ fontFamily: "Inter", fontWeight: "500", fontSize: "14px",
                lineHeight: "24px", letterSpacing: "1.25px", color: "#616161"}}>Search by adress</p>
          </div>

          <FilterButtons>
            <PinkButton>
                <p>PRICE</p>
            </PinkButton>
            <PinkButton>
                <p>PROPERTY TYPE</p>
            </PinkButton>
            <PinkButton>
                <p>BEDS & BATHS</p>
            </PinkButton>
            <PinkButton>
              <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "13.64px"}}>
                <p>MORE</p>
                <FiChevronDown style={{width: "17px", height: "17px", color: "#FFFFFF"}}/>
              </div>
            </PinkButton>
          </FilterButtons>

          <select name="relation"  style={{ border: "none", height: "40px", fontFamily: "Inter", fontSize: "16px",
                lineHeight: "24px", letterSpacing: "0.5px", color: "#373737", margin: "0px 8px"}}>;
              <option value="Rent">Renting</option>
              <option value="Buy">Buying</option>
              <option selected value="Both">Buying & Renting</option>
          </select>
        </FiltersSection>
      </PageContainer>
    </Wrapper>
  )
}

export default ListViewPage;

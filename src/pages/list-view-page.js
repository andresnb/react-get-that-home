import styled from "styled-components";
import PropertyCard from '../components/PropertyCard/propertyCard';
import { FiSearch, FiChevronDown } from "react-icons/fi";
import { AiOutlineMinus } from "react-icons/ai";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import sampleProperty from "../assets/images/rental-image-example.png";
import { useEffect, useState } from "react";
import { getProperties } from "../services/property-service";

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

const ButtonWrapper = styled.div`
  position:relative;
`
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

  display:flex;
  justify-content:center;
  align-items:center;
`;

const DivTitle = styled.p`
  font-family: Inter;
  fontWeight: 400;
  fontSize: 10px;
  lineHeight: 12.1px;
  letterSpacing: 1.5px;
  color: #616161;
  marginBottom: 4px;
`;

const WhiteGreyButton = styled("button")`
  width: 50px;
  height: 20px;
  border: none;
  background: #FFFFFF;
  &:focus {
    background: #F48FB1;
  }
  padding: 0px 12px;
  border: 1px solid #8E8E8E;
`;

const WhitePinkButton = styled("button")`
  height: 40px;
  background: #FFFFFF;
  border: 2px solid #F48FB1;
  border-radius: 8px;
  padding: 0px 8px;
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
  position:absolute;
  z-index:1;
  left:-70px;

  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;

  width: 247px;
  height: 116px
  font-family: 'Inter';
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 8px;
`;

const PropertyFilter = styled.div`
  position:absolute;
  z-index:1;
  left:-70px;

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
  position:absolute;
  z-index:1;
  left:-70px;

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
  position:absolute;
  z-index:1;
  left:-70px;

  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  width: 247px;
  height: 168px
  font-family: Inter;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  padding: 8px;
`;

const ButtonFilterInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  width: 54px;
  height: 18px;
  font-family: Inter;
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

const PropertiesContainer = styled.div`
  width: fit-content;
  display: grid;
  gap: 48px;
  grid-template-columns: repeat(3, 300px);
  justify-content:center;
  align-items: center;
`;

const ChoiceDiv= styled.div`
  left:-7px;
  width: 187px;
  height: 108px;
  position:absolute;
  margin-top:15px;
  box-sizing:border-box;
  border: 1px solid #BF5F82;
  border-radius: 0px 0px 8px 8px;
`;

const CheckDiv = styled.div`
  display: flex;
  align-items: center;
  height:36px;
  width:100%;
  gap:8px;
  &: focus-within {
    background:rgba(244, 143, 177, 0.15)
  }
`;

function ListViewPage() {

  const [properties, setProperties] = useState([]);
  const [showFilters, setShowFilters] = useState({
    price: false,
    propertyType: false,
    bedBath: false,
    more:false,
    operationType:false,
  });


  useEffect(() => {
    console.log("HOLA USE EFFECT");
    getProperties()
      .then((data) => {
        const params = localStorage.getItem("params");
        setProperties(data);
      })
      .catch((error) => {
        console.log("error", error)
      });
  }, []);

  //   <Button onClick={()=> setShowFilter({price: !showFilter.price})}>{changeText("price")}</Button>
  // {showFilter.price ?
  //   <MoreDiv style={{display:"flex", flexDirection:"column", gap:4}}>
  //     <Text>PRICE RANGE</Text>
  //     <PriceInputDiv>
  //       <StyledInput2 onChange={handleChangeInput} placeholder={"min"} name={"minprice"} id={"minPrice"} value={prices.min}/>
  //       <h1 style={{border: "2px solid #8E8E8E",width:"13px",height:"0px",borderRadius:"8px"}} ></h1>
  //       <StyledInput2 onChange={handleChangeInput} placeholder={"max"} name={"maxprice"} id={"maxPrice"} value={prices.max}/>
  //     </PriceInputDiv>
  //     <div style={{display:"flex", justifyContent:"flex-end", marginTop:4}}>
  //       <Button onClick={handleDone} style={{padding:8, width:60}} id="prices">DONE</Button>
  //     </div>
  //   </MoreDiv> :
  // null}

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
            <ButtonWrapper>
              <PinkFilterButton onClick={()=> setShowFilters({price: !showFilters.price})}>
                  <p>PRICE</p>
              </PinkFilterButton>
              {showFilters.price ?
                  // <ButtonContainer>
                <PriceFilter>
                  <DivTitle>PRICE RANGE</DivTitle>

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
                            // id={}
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
                      <p>DONE</p>
                    </PinkDoneButton>
                  </div>
                </PriceFilter>
                :
              null}
            </ButtonWrapper>
            <ButtonWrapper>
              <PinkFilterButton onClick={()=> setShowFilters({propertyType: !showFilters.propertyType})}>
                  <p>PROPERTY TYPE</p>
              </PinkFilterButton>
              {showFilters.propertyType ?
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
                    <p>DONE</p>
                  </PinkDoneButton>
                </div>
                </PropertyFilter>
                :
              null}
            </ButtonWrapper>

            <ButtonWrapper>
                <PinkFilterButton onClick={()=> setShowFilters({bedBath: !showFilters.bedBath})}>
                    <p>BEDS & BATHS</p>
                </PinkFilterButton>
                {showFilters.bedBath ?
                  <BedAndBathFilter>
                      <p style={{ fontFamily: "Inter", fontWeight: "400", fontSize: "10px",
                          lineHeight: "12.1px", letterSpacing: "1.5px", color: "#616161", marginBottom: "4px"}}>BEDS</p>
                      <div style={{display: "flex", flexDirection: "row", justifyContent: "left", alignItems: "center", marginBottom: "12px"}}>
                        <WhiteGreyButton style={{borderRadius: '8px 0px 0px 8px'}}>
                          <p style={{ fontFamily: "Montserrat", fontWeight: "400",
                          fontSize: "14px", lineHeight: "20px", color: "#616161"}}>Any</p>
                        </WhiteGreyButton>
                        <WhiteGreyButton>
                          <p style={{ fontFamily: "Montserrat", fontWeight: "400",
                          fontSize: "14px", lineHeight: "20px", color: "#616161"}}>1+</p>
                        </WhiteGreyButton>
                        <WhiteGreyButton>
                          <p style={{ fontFamily: "Montserrat", fontWeight: "400",
                          fontSize: "14px", lineHeight: "20px", color: "#616161"}}>2+</p>
                        </WhiteGreyButton>
                        <WhiteGreyButton>
                          <p style={{ fontFamily: "Montserrat", fontWeight: "400",
                          fontSize: "14px", lineHeight: "20px", color: "#616161"}}>3+</p>
                        </WhiteGreyButton>
                        <WhiteGreyButton style={{borderRadius: '0px 8px 8px 0px'}}>
                          <p style={{ fontFamily: "Montserrat", fontWeight: "400",
                          fontSize: "14px", lineHeight: "20px", color: "#616161"}}>4+</p>
                        </WhiteGreyButton>
                      </div>
                      <p style={{ fontFamily: "Inter", fontWeight: "400", fontSize: "10px",
                          lineHeight: "12.1px", letterSpacing: "1.5px", color: "#616161", marginBottom: "4px"}}>BATHS</p>
                      <div style={{display: "flex", flexDirection: "row", justifyContent: "left", alignItems: "center"}}>
                        <WhiteGreyButton style={{borderRadius: '8px 0px 0px 8px'}}>
                          <p style={{ fontFamily: "Montserrat", fontWeight: "400",
                          fontSize: "14px", lineHeight: "20px", color: "#616161"}}>Any</p>
                        </WhiteGreyButton>
                        <WhiteGreyButton>
                          <p style={{ fontFamily: "Montserrat", fontWeight: "400",
                          fontSize: "14px", lineHeight: "20px", color: "#616161"}}>1+</p>
                        </WhiteGreyButton>
                        <WhiteGreyButton>
                          <p style={{ fontFamily: "Montserrat", fontWeight: "400",
                          fontSize: "14px", lineHeight: "20px", color: "#616161"}}>2+</p>
                        </WhiteGreyButton>
                        <WhiteGreyButton>
                          <p style={{ fontFamily: "Montserrat", fontWeight: "400",
                          fontSize: "14px", lineHeight: "20px", color: "#616161"}}>3+</p>
                        </WhiteGreyButton>
                        <WhiteGreyButton style={{borderRadius: '0px 8px 8px 0px'}}>
                          <p style={{ fontFamily: "Montserrat", fontWeight: "400",
                          fontSize: "14px", lineHeight: "20px", color: "#616161"}}>4+</p>
                        </WhiteGreyButton>
                      </div>

                      <div style={{display: "flex", justifyContent: "right", alignItems: "right", marginTop: "16px"}}>
                        <PinkDoneButton>
                          <p>DONE</p>
                        </PinkDoneButton>
                      </div>
                  </BedAndBathFilter>
                  :
                null}
            </ButtonWrapper>
            <ButtonWrapper>
              <PinkFilterButton onClick={()=> setShowFilters({more: !showFilters.more})}>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "8px"}}>
                  <p>MORE</p>
                  <FiChevronDown style={{width: "17px", height: "17px", color: "#FFFFFF"}}/>
                </div>
              </PinkFilterButton>
              {showFilters.more ?
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
                      <p>DONE</p>
                    </PinkDoneButton>
                  </div>
                </MoreFilter>
                :
              null}
            </ButtonWrapper>
          </FilterButtons>
          <ButtonWrapper>
            <WhitePinkButton onClick={()=> setShowFilters({operationType: !showFilters.operationType})}>
                  <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "8px"}}>
                    <p>Buying & Renting</p>
                    <FiChevronDown style={{width: "17px", height: "17px", color: "black"}}/>
                  </div>
            </WhitePinkButton>
            {showFilters.operationType?
              <ChoiceDiv style={{zIndex:1}} >
                <CheckDiv>
                  <input
                    style={{accentColor:"pink"}}
                    // onChange={handleMode}
                    type={"checkbox"}
                    id={"both"}
                    // checked={buy && rent}
                  />
                  <label style={{fontFamily:"Inter",fontStyle:"normal",fontWeight:"400px",fontSize:"14px",lineHeight:"20px",letterSpacing:"0.25px",color:"#616161"}} >Both</label>
                </CheckDiv>
                <CheckDiv>
                  <input style={{ accentColor: "pink", }}
                    // onChange={handleMode}
                    type={"checkbox"}
                    id={"buy"}
                    // checked={buy}
                  />
                  <label style={{fontFamily:"Inter",fontStyle:"normal",fontWeight:"400px",fontSize:"14px",lineHeight:"20px",letterSpacing:"0.25px",color:"#616161"}}>Buying</label>
                </CheckDiv>
                <CheckDiv>
                  <input style={{ accentColor: "pink" }}
                    // onChange={handleMode}
                    type={"checkbox"}
                    id={"rent"}
                    // checked={rent}
                  />
                  <label style={{fontFamily:"Inter",fontStyle:"normal",fontWeight:"400px",fontSize:"14px",lineHeight:"20px",letterSpacing:"0.25px",color:"#616161"}}>Renting</label>
                </CheckDiv>
              </ChoiceDiv> :
            null}
          </ButtonWrapper>
        </FiltersSection>
        <div style={{width: '1136px'}}>
            <div>
              <p style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "20px",
              lineHeight: "28px", color: "#616161", marginBottom: "22px", textAlign: "left"}}>4 properties found
              </p>
            </div>

            <PropertiesContainer>
               {properties.map((property) => (
                <PropertyCard
                key={property.id}
                image={sampleProperty}
                // onPropertyClick={onPropertyClick}
                {...property}
                />
                ))}
            </PropertiesContainer>
        </div>
      </PageContainer>
    </Wrapper>
  )
}

export default ListViewPage;

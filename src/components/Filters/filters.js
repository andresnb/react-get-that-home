import styled from "styled-components";
import { useEffect, useState } from "react";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import { AiOutlineMinus } from "react-icons/ai";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

const FiltersSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
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
  font-weight: 400;
  font-size: 10px;
  line-height: 12.1px;
  letter-spacing: 1.5px;
  color: #616161;
  margin-bottom: 4px;
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
  background: white;
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
  background: white;
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
  background: white;
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
  background: white;
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


const ChoiceDiv= styled.div`
  left:-7px;
  width: 187px;
  height: 108px;
  position:absolute;
  margin-top:15px;
  box-sizing:border-box;
  border: 1px solid #BF5F82;
  border-radius: 0px 0px 8px 8px;
  background: white;
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

  export function Filters({
    prices,
    areas,
    petAllowed,
    house,
    apartment,
    buy,
    rent,
    query,
    showFilters,
    setShowFilters,
    setPetAllowed,
    handleOperationType,
    handlePrice,
    handleArea,
    handleDone,
    handleCheck,
    handleQuery,
    setBeds,
    setBaths
  }) {

  return (
    <>
      <FiltersSection>
        <div style={{
          border: "2px solid #F48FB1", height: "32px", width: "78px", background: "#FFFFFF",
          color: "#373737", borderRadius: "8px", width: "240px",
          display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "8px"
        }}>
          <FiSearch style={{ color: "#8E8E8E" }} />
          <ButtonFilterInput
            name="search-address"
            type="text"
            value={query}
            placeholder="Search by address"
            onChange={handleQuery}
            id={"search-address"}
            style={{width: "196px"}}
          />

        </div>

        <FilterButtons>
          <ButtonWrapper>
            <PinkFilterButton onClick={() => setShowFilters({ price: !showFilters.price })}>
              <p>PRICE</p>
            </PinkFilterButton>
            {showFilters.price ?
              // <ButtonContainer>
              <PriceFilter>
                <p style={{
                  fontFamily: "Inter", fontWeight: "400", fontSize: "10px",
                  lineHeight: "12.1px", letterSpacing: "1.5px", color: "#616161", marginBottom: "12px"
                }}>PRICE RANGE</p>

                <div style={{ display: "flex", flexDirection: "row", justifyContent: "left", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                  <div style={{
                    border: "2px solid #F48FB1", height: "32px", width: "78px", background: "#FFFFFF",
                    color: "#373737", padding: "0px 9.67px", borderRadius: "8px",
                    display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "8px"
                  }}>
                    <RiMoneyDollarCircleFill style={{ width: "26.67px", height: "26.67px", color: "#8E8E8E" }} />
                    <ButtonFilterInput
                      name="min-amount"
                      type="number"
                      value={prices.min}
                      placeholder="min"
                      onChange={handlePrice}
                      id={"min-amount"}
                    />

                  </div>
                  <AiOutlineMinus />
                  <div style={{
                    border: "2px solid #F48FB1", height: "32px", width: "78px", background: "#FFFFFF",
                    color: "#373737", padding: "0px 9.67px", borderRadius: "8px",
                    display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "8px"
                  }}>
                    <RiMoneyDollarCircleFill style={{ width: "16.67px", height: "16.67px", color: "#8E8E8E" }} />
                    <ButtonFilterInput
                      name="max-amount"
                      type="number"
                      value={prices.max}
                      placeholder="max"
                      onChange={handlePrice}
                      id={"max-amount"}
                    />
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "right", alignItems: "right" }}>
                  <PinkDoneButton onClick={handleDone} id='prices'>
                    DONE
                  </PinkDoneButton>
                </div>
              </PriceFilter>
              :
              null}
          </ButtonWrapper>
          <ButtonWrapper>
            <PinkFilterButton onClick={() => setShowFilters({ propertyType: !showFilters.propertyType })}>
              <p>PROPERTY TYPE</p>
            </PinkFilterButton>
            {showFilters.propertyType ?
              <PropertyFilter>
                <p style={{
                  fontFamily: "Inter", fontWeight: "400", fontSize: "10px",
                  lineHeight: "12.1px", letterSpacing: "1.5px", color: "#616161", marginBottom: "12px"
                }}>PROPERTY TYPE</p>

                <div style={{ display: "flex", flexDirection: "row", justifyContent: "left", alignItems: "center", gap: "4px" }}>
                  <ButtonFilterCheckbox
                    onChange={handleCheck}
                    checked={house}
                    type="checkbox"
                    name="check-house"
                    id="check-house"
                  />
                  <label for="check-house">Houses</label>
                </div>

                <div style={{ display: "flex", flexDirection: "row", justifyContent: "left", alignItems: "center", gap: "4px" }}>
                  <ButtonFilterCheckbox
                    onChange={handleCheck}
                    checked={apartment}
                    type="checkbox"
                    name="check-apartment"
                    id="check-apartment"
                  />
                  <label for="check-apartment">Apartments</label>
                </div>

                <div style={{ display: "flex", justifyContent: "right", alignItems: "right", gap: "4px", marginTop: "4px" }}>
                  <PinkDoneButton onClick={handleDone} id='propertyType'>
                    DONE
                  </PinkDoneButton>
                </div>
              </PropertyFilter>
              :
              null}
          </ButtonWrapper>

          <ButtonWrapper>
            <PinkFilterButton onClick={() => setShowFilters({ bedBath: !showFilters.bedBath })}>
              <p>BEDS & BATHS</p>
            </PinkFilterButton>
            {showFilters.bedBath ?
              <BedAndBathFilter>
                <p style={{
                  fontFamily: "Inter", fontWeight: "400", fontSize: "10px",
                  lineHeight: "12.1px", letterSpacing: "1.5px", color: "#616161", marginBottom: "4px"
                }}>BEDS</p>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "left", alignItems: "center", marginBottom: "12px" }}>
                  <WhiteGreyButton onClick={()=>setBeds(0)} style={{ borderRadius: '8px 0px 0px 8px' }}>
                    <p style={{
                      fontFamily: "Montserrat", fontWeight: "400",
                      fontSize: "14px", lineHeight: "20px", color: "#616161"
                    }}>Any</p>
                  </WhiteGreyButton>
                  <WhiteGreyButton onClick={()=>setBeds(1)} >
                    <p style={{
                      fontFamily: "Montserrat", fontWeight: "400",
                      fontSize: "14px", lineHeight: "20px", color: "#616161"
                    }}>1+</p>
                  </WhiteGreyButton>
                  <WhiteGreyButton onClick={()=>setBeds(2)} >
                    <p style={{
                      fontFamily: "Montserrat", fontWeight: "400",
                      fontSize: "14px", lineHeight: "20px", color: "#616161"
                    }}>2+</p>
                  </WhiteGreyButton>
                  <WhiteGreyButton onClick={()=>setBeds(3)} >
                    <p style={{
                      fontFamily: "Montserrat", fontWeight: "400",
                      fontSize: "14px", lineHeight: "20px", color: "#616161"
                    }}>3+</p>
                  </WhiteGreyButton>
                  <WhiteGreyButton onClick={()=>setBeds(4)}  style={{ borderRadius: '0px 8px 8px 0px' }}>
                    <p style={{
                      fontFamily: "Montserrat", fontWeight: "400",
                      fontSize: "14px", lineHeight: "20px", color: "#616161"
                    }}>4+</p>
                  </WhiteGreyButton>
                </div>
                <p style={{
                  fontFamily: "Inter", fontWeight: "400", fontSize: "10px",
                  lineHeight: "12.1px", letterSpacing: "1.5px", color: "#616161", marginBottom: "4px"
                }}>BATHS</p>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "left", alignItems: "center" }}>
                  <WhiteGreyButton onClick={()=>setBaths(0)} style={{ borderRadius: '8px 0px 0px 8px' }}>
                    <p style={{
                      fontFamily: "Montserrat", fontWeight: "400",
                      fontSize: "14px", lineHeight: "20px", color: "#616161"
                    }}>Any</p>
                  </WhiteGreyButton>
                  <WhiteGreyButton onClick={()=>setBaths(1)}>
                    <p style={{
                      fontFamily: "Montserrat", fontWeight: "400",
                      fontSize: "14px", lineHeight: "20px", color: "#616161"
                    }}>1+</p>
                  </WhiteGreyButton>
                  <WhiteGreyButton onClick={()=>setBaths(2)}>
                    <p style={{
                      fontFamily: "Montserrat", fontWeight: "400",
                      fontSize: "14px", lineHeight: "20px", color: "#616161"
                    }}>2+</p>
                  </WhiteGreyButton>
                  <WhiteGreyButton onClick={()=>setBaths(3)}>
                    <p style={{
                      fontFamily: "Montserrat", fontWeight: "400",
                      fontSize: "14px", lineHeight: "20px", color: "#616161"
                    }}>3+</p>
                  </WhiteGreyButton>
                  <WhiteGreyButton onClick={()=>setBaths(4)} style={{ borderRadius: '0px 8px 8px 0px' }}>
                    <p style={{
                      fontFamily: "Montserrat", fontWeight: "400",
                      fontSize: "14px", lineHeight: "20px", color: "#616161"
                    }}>4+</p>
                  </WhiteGreyButton>
                </div>

                <div style={{ display: "flex", justifyContent: "right", alignItems: "right", marginTop: "16px" }}>
                  <PinkDoneButton onClick={handleDone} id='bathsbeds'>
                    DONE
                  </PinkDoneButton>
                </div>
              </BedAndBathFilter>
              :
              null}
          </ButtonWrapper>
          <ButtonWrapper>
            <PinkFilterButton onClick={() => setShowFilters({ more: !showFilters.more })}>
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "8px" }}>
                <p>MORE</p>
                <FiChevronDown style={{ width: "17px", height: "17px", color: "#FFFFFF" }} />
              </div>
            </PinkFilterButton>
            {showFilters.more ?
              <MoreFilter>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "left", alignItems: "center", gap: "4px", marginBottom: "24px" }}>
                  <ButtonFilterCheckbox
                    onChange={handleCheck}
                    checked={petAllowed}
                    type="checkbox"
                    name="check-pets-allowed"
                    id="check-pets-allowed"
                  />
                  <label for="check-pets-allowed">Pets allowed</label>
                </div>

                <p style={{
                  fontFamily: "Inter", fontWeight: "400", fontSize: "10px",
                  lineHeight: "12.1px", letterSpacing: "1.5px", color: "#616161", marginBottom: "4px"
                }}>AREA IN M2</p>

                <div style={{ display: "flex", flexDirection: "row", justifyContent: "left", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                  <div style={{
                    border: "2px solid #F48FB1", height: "32px", width: "78px", background: "#FFFFFF",
                    color: "#373737", padding: "0px 9.67px", borderRadius: "8px",
                    display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "8px"
                  }}>

                    <ButtonFilterInput
                      name="min-amount"
                      type="number"
                      value={areas.min}
                      placeholder="min"
                      onChange={handleArea}
                      id={"min-amount"}
                    />
                  </div>
                  <AiOutlineMinus />
                  <div style={{
                    border: "2px solid #F48FB1", height: "32px", width: "78px", background: "#FFFFFF",
                    color: "#373737", padding: "0px 9.67px", borderRadius: "8px",
                    display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "8px"
                  }}>
                    <ButtonFilterInput
                      name="max-amount"
                      type="number"
                      value={areas.max}
                      placeholder="max"
                      onChange={handleArea}
                      id={"max-amount"}
                    />
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "right", alignItems: "right" }}>
                  <PinkDoneButton onClick={handleDone} id='more'>
                    DONE
                  </PinkDoneButton>
                </div>
              </MoreFilter>
              :
              null}
          </ButtonWrapper>
        </FilterButtons>
        <ButtonWrapper>
          <WhitePinkButton onClick={() => setShowFilters({ operationType: !showFilters.operationType })}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "8px" }}>
              <p>Buying & Renting</p>
              <FiChevronDown style={{ width: "17px", height: "17px", color: "black" }} />
            </div>
          </WhitePinkButton>
          {showFilters.operationType ?
            <ChoiceDiv style={{ zIndex: 1 }} >
              <CheckDiv>
                <input
                  style={{ accentColor: "pink" }}
                  onChange={handleOperationType}
                  type={"checkbox"}
                  id={"both"}
                  checked={buy && rent}
                />
                <label style={{ fontFamily: "Inter", fontStyle: "normal", fontWeight: "400px", fontSize: "14px", lineHeight: "20px", letterSpacing: "0.25px", color: "#616161" }} >Both</label>
              </CheckDiv>
              <CheckDiv>
                <input style={{ accentColor: "pink", }}
                  onChange={handleOperationType}
                  type={"checkbox"}
                  id={"check-buy"}
                  checked={buy}
                />
                <label style={{ fontFamily: "Inter", fontStyle: "normal", fontWeight: "400px", fontSize: "14px", lineHeight: "20px", letterSpacing: "0.25px", color: "#616161" }}>Buying</label>
              </CheckDiv>
              <CheckDiv>
                <input style={{ accentColor: "pink" }}
                  onChange={handleOperationType}
                  type={"checkbox"}
                  id={"check-rent"}
                  checked={rent}
                />
                <label style={{ fontFamily: "Inter", fontStyle: "normal", fontWeight: "400px", fontSize: "14px", lineHeight: "20px", letterSpacing: "0.25px", color: "#616161" }}>Renting</label>
              </CheckDiv>
            </ChoiceDiv> :
            null}
        </ButtonWrapper>
      </FiltersSection>
    </>
  );
}

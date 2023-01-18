// import FooterCard from "./footerCard"
// import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { MdOutlinePets } from "react-icons/md";
import { RiBuildingLine } from "react-icons/ri";
import { BsHeartFill } from "react-icons/bs";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

const PropertyWrapper = styled.div`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  width: 300px;
  font-family: 'Inter';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #616161;
  border-bottom: 7px solid #BF5F82;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2)
`;

const MyPropertyWrapper = styled.div`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  width: 300px;
  font-family: 'Inter';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #616161;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2)
`;

const DetailsWrapper = styled.div`
  margin: 8px 6px 0px 6px;
`;

function PropertyCard({ image, id, name, operation_type, address, phone, price, property_type, bedrooms, bathrooms, area, pets, description, favorite }) {
  const { currentDisplayedProperties } = useAuth();
  console.log("BAEK DISPLAY PROPERTIES 35", currentDisplayedProperties)


  return (
    <div>
      {(currentDisplayedProperties !== "favorites" &&
        currentDisplayedProperties !== "contacted" &&
        currentDisplayedProperties !== "test" &&
        currentDisplayedProperties !== "filtered") ?
        (
          <MyPropertyWrapper>
              <Link
                to={"/properties/" + id}
              >
                  <img
                  src={image}
                  alt="Property"
                  style={{ height: "200px", width: "300px", borderTopLeftRadius:"8px", borderTopRightRadius: "8px"}}
                  />
                  <DetailsWrapper>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                      <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "10.66px"}}>
                        <RiMoneyDollarCircleLine style={{width: "26.67px", height: "26.67px", color: "#373737"}}/>

                        <p style={{ fontFamily: "Montserrat", fontWeight: "400",
                        fontSize: "24px", lineHeight: "32px", color: "#373737"}}> {price}</p>
                      </div>
                      <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "5px"}}>
                        <RiBuildingLine style={{width: "22px", height: "18px", color: "#616161"}}/>

                        <p> {property_type}</p>
                      </div>
                    </div>
                    <div style={{paddingTop: "12px", paddingBottom: "16px"}}>
                      <p style={{ fontFamily: "Montserrat", letterSpacing: "0.15px", color: "#373737"}}>{address}</p>
                    </div>

                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: "8px"}}>
                      <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "3.67px"}}>
                        <BiBed style={{width: "20px", height: "19px", color: "#616161"}}/>
                        <p> {bedrooms} </p>
                      </div>
                      <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "3.67px"}}>
                        <BiBath style={{width: "20px", height: "19px", color: "#616161"}}/>
                        <p> {bathrooms} </p>
                      </div>
                      <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "6.67px"}}>
                        <BiArea style={{width: "18px", height: "18px", color: "#616161"}}/>
                        <p> {area} </p>
                      </div>

                      { pets? <MdOutlinePets style={{width: "20px", height: "17.5px", color: "#616161"}}/>: <MdOutlinePets style={{width: "20px", height: "17.5px", color: "#FFFFFF"}}/>}
                      { favorite===true && (currentDisplayedProperties==="favorites" || currentDisplayedProperties==="contacted")? <BsHeartFill style={{width: "20px", height: "17.5px", color: "#F48FB1"}}/>: <BsHeartFill style={{width: "20px", height: "17.5px", color: "#FFFFFF"}}/>}
                    </div>
                  </DetailsWrapper>
              </Link>
          </MyPropertyWrapper>
        ):
        (
          <PropertyWrapper>
            <Link
              to={"/properties/" + id}
            >
                <img
                src={image}
                alt="Property"
                style={{ height: "200px", width: "300px", borderTopLeftRadius:"8px", borderTopRightRadius: "8px"}}
                />
                <DetailsWrapper>
                  <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "10.66px"}}>
                      <RiMoneyDollarCircleLine style={{width: "26.67px", height: "26.67px", color: "#373737"}}/>

                      <p style={{ fontFamily: "Montserrat", fontWeight: "400",
                      fontSize: "24px", lineHeight: "32px", color: "#373737"}}> {price}</p>
                    </div>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "5px"}}>
                      <RiBuildingLine style={{width: "22px", height: "18px", color: "#616161"}}/>

                      <p> {property_type}</p>
                    </div>
                  </div>
                  <div style={{paddingTop: "12px", paddingBottom: "16px"}}>
                    <p style={{ fontFamily: "Montserrat", letterSpacing: "0.15px", color: "#373737"}}>{address}</p>
                  </div>

                  <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: "8px"}}>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "3.67px"}}>
                      <BiBed style={{width: "20px", height: "19px", color: "#616161"}}/>
                      <p> {bedrooms} </p>
                    </div>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "3.67px"}}>
                      <BiBath style={{width: "20px", height: "19px", color: "#616161"}}/>
                      <p> {bathrooms} </p>
                    </div>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "6.67px"}}>
                      <BiArea style={{width: "18px", height: "18px", color: "#616161"}}/>
                      <p> {area} </p>
                    </div>

                    { pets? <MdOutlinePets style={{width: "20px", height: "17.5px", color: "#616161"}}/>: <MdOutlinePets style={{width: "20px", height: "17.5px", color: "#FFFFFF"}}/>}
                    { favorite===true && (currentDisplayedProperties==="favorites" || currentDisplayedProperties==="contacted")? <BsHeartFill style={{width: "20px", height: "17.5px", color: "#F48FB1"}}/>: <BsHeartFill style={{width: "20px", height: "17.5px", color: "#FFFFFF"}}/>}
                  </div>
                </DetailsWrapper>
            </Link>
        </PropertyWrapper>
        )}
    </div>
  )
}

export default PropertyCard

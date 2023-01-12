import FooterCard from "./footerCard"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { MdOutlinePets } from "react-icons/md";
import { RiBuildingLine } from "react-icons/ri";
import { BsHeartFill } from "react-icons/bs";
import styled from 'styled-components';

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

const DetailsWrapper = styled.div`
  margin: 8px 6px 0px 6px;
`;

function PropertyCard({image}){
  return (
    <PropertyWrapper>
        <img
        src={image}
        alt="property picture"
        style={{ height: "200px", width: "300px", borderTopLeftRadius:"8px", borderTopRightRadius: "8px"}}
        />
        <DetailsWrapper>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "10.66px"}}>
              <RiMoneyDollarCircleLine style={{width: "26.67px", height: "26.67px", color: "#373737"}}/>

              <p style={{ fontFamily: "Montserrat", fontWeight: "400",
              fontSize: "24px", lineHeight: "32px", color: "#373737"}}> 3000</p>
            </div>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "5px"}}>
              <RiBuildingLine style={{width: "22px", height: "18px", color: "#616161"}}/>

              <p> Apartment</p>
            </div>
          </div>
          <div style={{paddingTop: "12px", paddingBottom: "16px"}}>
            <p style={{ fontFamily: "Montserrat", letterSpacing: "0.15px", color: "#373737"}}>86872 Jacob Gateway, Durganport, WV 48044</p>
          </div>

          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: "8px"}}>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "3.67px"}}>
              <BiBed style={{width: "20px", height: "19px", color: "#616161"}}/>
              <p> 4 </p>
            </div>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "3.67px"}}>
              <BiBath style={{width: "20px", height: "19px", color: "#616161"}}/>
              <p> 2 </p>
            </div>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "6.67px"}}>
              <BiArea style={{width: "18px", height: "18px", color: "#616161"}}/>
              <p> 180 m2 </p>
            </div>

            <MdOutlinePets style={{width: "20px", height: "17.5px", color: "#616161"}}/>
            <BsHeartFill style={{width: "20px", height: "17.5px", color: "#F48FB1", marginRight: "10px"}}/>
          </div>
        </DetailsWrapper>
    </PropertyWrapper>
  )
}

export default PropertyCard

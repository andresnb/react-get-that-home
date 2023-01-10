import styled from 'styled-components';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import {MdOutlinePets} from "react-icons/md"


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DetailsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  width: 830px;
  padding: 0px 32px;
  font-family: 'Inter';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #373737;
`;

function PropertyDetailPage() {

  return (
    <Wrapper>
      <div>AQUI VA LOS PROPERTY DETAILS</div>
      <DetailsCard>
          <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "71.22px"}}>
            <AiOutlineLeft/>
            <img
              src={require("../../src/assets/images/property-image-example.png")}
              alt="team member picture"
                style={{ height: "384px", width: "512px"}}
              />
            <AiOutlineRight/>
          </div>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", borderBottom: "solid 1px #BF5F82", paddingBottom: "16px"}}>
            <div>
              <p style={{ fontFamily: "Montserrat", fontSize: "36px",
              lineHeight: "48px", letterSpacing: "0.25px"}}>
              Francisco de Paula Ugarriza 27 </p>
              <p style={{ letterSpacing: "0.15px", color: "#616161"}}>
              Miraflores, Lima </p>
            </div>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "left", alignItems: "left"}}>
              <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "12px"}}>
                <RiMoneyDollarCircleLine style={{width: "40px", height: "40px", color: "#616161"}}/>
                <p style={{ fontFamily: "Montserrat", fontSize: "36px",
                lineHeight: "48px", letterSpacing: "0.25px"}}>
                3000</p>
              </div>
              <div style={{display: "flex", flexDirection: "column", justifyContent: "left", alignItems: "left", width: "52px"}}>
                <p style={{
                  letterSpacing: "0.15px", color: "#616161", fontWeight: "500",
                  fontSize: "20px", lineHeight: "28px", width: "52px"}}>+100</p>
              </div>
            </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", borderBottom: "solid 1px #BF5F82", paddingBottom: "16px", paddingTop: "16px"}}>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "6.67px"}}>
              <BiBed style={{width: "26.67px", height: "25.33px", color: "#616161"}}/>
              <p style={{ fontFamily: "Montserrat", fontSize: "24px",
              lineHeight: "32px", letterSpacing: "0px", color: "#616161"}}> 4 bedrooms </p>
            </div>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "6.67px"}}>
              <BiBath style={{width: "26.67px", height: "25.33px", color: "#616161"}}/>
              <p style={{ fontFamily: "Montserrat", fontSize: "24px",
              lineHeight: "32px", letterSpacing: "0px", color: "#616161"}}> 2 bathrooms </p>
            </div>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "8px"}}>
              <BiArea style={{width: "24px", height: "24px", color: "#616161"}}/>
              <p style={{ fontFamily: "Montserrat", fontSize: "24px",
              lineHeight: "32px", letterSpacing: "0px", color: "#616161"}}> 180 m2 </p>
            </div>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "6.67px"}}>
              <MdOutlinePets/>
              <p style={{ fontFamily: "Montserrat", fontSize: "24px",
              lineHeight: "32px", letterSpacing: "0px", color: "#616161"}}> Pets allowed </p>
            </div>
        </div>
        <p style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "20px",
        lineHeight: "28px", letterSpacing: "0.15px", color: "#BF5F82", paddingBottom: "8px", paddingTop: "16px"}}> About this property </p>
        <p>
          3 Bedroom/2 Bathroom apartment available for ASAP move-in!
          Apartment features hardwood floors throughout, virtual doorman, Central AC/heat, dishwasher and a microwave.
          The kitchen has custom cabinetry and the living room is big enough to fit a dinner table, a couch and a tv set up.
        </p>
        <p style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "20px",
        lineHeight: "28px", letterSpacing: "0.15px", color: "#BF5F82", paddingBottom: "8px", paddingTop: "16px"}}> Location </p>
        <p style={{marginBottom: "8px"}}> Francisco de Paula Ugarriza 27, Miraflores, Lima </p>
        <div>
          {/* <iframe style={{ width: "100%", height: "760px"}} src="https://maps.google.com/maps?q=CAMPO%20DE%20MARTE&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
          <iframe style={{ width: "100%", height: "760px"}} src="https://maps.google.com/maps?q=PARQUE%20DE%20LA%20AMISTAD&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe> */}
          {/* Francisco de Paula Ugarriza 27, Miraflores, Lima */}
          <iframe style={{ width: "100%", height: "760px"}} src="https://maps.google.com/maps?q=Francisco%20de%20Paula%20Ugarriza%2027,%20Miraflores,%20Lima&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
      </DetailsCard>
    </Wrapper>
  )
}

export default PropertyDetailPage;

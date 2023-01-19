import styled from 'styled-components';
import { AiOutlineLeft, AiOutlineRight, AiOutlineUserAdd } from "react-icons/ai";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BiBed, BiBath, BiArea, BiEdit } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import {MdOutlinePets} from "react-icons/md";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useAuth } from "../context/auth-context";

const favoritesData = [
  { name: 'Fransicsco de Paula Ugarriza 27',
    operation_type: 'sale',
    address: 'Fransicsco de Paula Ugarriza 27',
    price: 25000.00,
    property_type: 'house',
    bedrooms: 4,
    bathrooms: 2,
    area: 220,
    pets: true,
    status: true,
    phone: '5983764478928',
    description: '3 Bedroom/2 Bathroom apartment available for ASAP move-in! Apartment features hardwood floors throughout, virtual doorman, Central AC/heat, dishwasher and a microwave. The kitchen has custom cabinetry and the living room is big enough to fit a dinner table, a couch and a tv set up.',
    favorite: true,
    id: 9
  },
  { name: 'Fransicsco de Paula Ugarriza 27',
    operation_type: 'sale',
    address: 'Fransicsco de Paula Ugarriza 27',
    price: 80000,
    property_type: 'house',
    bedrooms: 2,
    bathrooms: 1,
    area: 150,
    pets: false,
    status: true,
    phone: '5983764478928',
    description: '3 Bedroom/2 Bathroom apartment available for ASAP move-in! Apartment features hardwood floors throughout, virtual doorman, Central AC/heat, dishwasher and a microwave. The kitchen has custom cabinetry and the living room is big enough to fit a dinner table, a couch and a tv set up.',
    favorite: true,
    id: 10
  }
]

const contactedData = [
  { name: 'Fransicsco de Paula Ugarriza 27',
    operation_type: 'sale',
    address: 'Fransicsco de Paula Ugarriza 27',
    price: 25000.00,
    property_type: 'house',
    bedrooms: 4,
    bathrooms: 2,
    area: 220,
    pets: true,
    status: true,
    phone: '5983764478928',
    description: '3 Bedroom/2 Bathroom apartment available for ASAP move-in! Apartment features hardwood floors throughout, virtual doorman, Central AC/heat, dishwasher and a microwave. The kitchen has custom cabinetry and the living room is big enough to fit a dinner table, a couch and a tv set up.',
    favorite: true,
    id: 9
  },

]

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const NotLoggedInBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 226px;
  height: 184px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2)
`;

const LoggedInHomeseekerBox1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 27px;
  width: 258px;
  height: 148px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
`;

const LoggedInHomeseekerBox2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 258px;
  height: 230px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2)
`;

const LoggedInLandlordBox = styled.div`
  width: 188px;
  height: 40px;
`;

const PinkButton = styled("button")`
  border: none;
  background: #F48FB1;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

function PropertyDetailPage() {
  const { id } = useParams();
  const { savedProperties, setSavedProperties, user, userType, allProperties, setAllProperties} = useAuth();
  const [favoriteProperties, setFavoriteProperties] = useState( savedProperties.favorites || favoritesData);
  const [contactedProperties, setContactedProperties] = useState(savedProperties.contacted || contactedData);

  let currentProperty = allProperties.filter(property => property.id == id)["0"];
  const { name, operation_type, address, phone, price, property_type, bedrooms,
          bathrooms, area, pets, description, favorite } = currentProperty
  let foundInContactedList = contactedProperties.filter(property => property.id == id);
  const [contactedStatus, setContactedStatus] = useState(foundInContactedList.length == 1);
  let foundInFavoritesList = favoriteProperties.filter(property => property.id == id);
  const [favoriteStatus, setFavoriteStatus] = useState(foundInFavoritesList.length == 1);


  useEffect(() => {
     setSavedProperties({...savedProperties, "favorites": favoriteProperties, "contacted": contactedProperties })
  }, [favoriteProperties, contactedProperties]);

  function addToContactedProperties(currentProperty) {
    setContactedStatus(true);
    setContactedProperties([...contactedProperties, currentProperty]);
  }

  function addToFavoriteProperties(currentProperty) {
    setFavoriteStatus(true);
    setFavoriteProperties([...favoriteProperties, {...currentProperty, favorite: true}]);
    let newDataBase = allProperties.filter(property => property.id !== id);
    setAllProperties([...newDataBase,{...currentProperty, favorite: true}])
  }

  function removeFromFavoriteProperties(propertyId) {
    setFavoriteStatus(false);
    let newFavoritesList = favoriteProperties.filter(property => property.id !== propertyId);
    setFavoriteProperties(newFavoritesList);
    let newDataBase = allProperties.filter(property => property.id !== id);
    setAllProperties([...newDataBase, {...currentProperty, favorite: false}])
  }

  return (
    <Wrapper style={{ flexDirection:"row", justifyContent:"top", alignItems: "top",gap: "16px" }}>
      <DetailsCard>
          <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "71.22px"}}>
            <AiOutlineLeft/>
            <img
              src={require("../../src/assets/images/property-image-example.png")}
              alt="Team Member"
                style={{ height: "384px", width: "512px"}}
              />
            <AiOutlineRight/>
          </div>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", borderBottom: "solid 1px #BF5F82", paddingBottom: "16px"}}>
            <div>
              <p style={{ fontFamily: "Montserrat", fontSize: "36px",
              lineHeight: "48px", letterSpacing: "0.25px"}}>
              {address} </p>
              <p style={{ letterSpacing: "0.15px", color: "#616161"}}>
              Lima </p>
            </div>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "left", alignItems: "left"}}>
              <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "12px"}}>
                <RiMoneyDollarCircleLine style={{width: "40px", height: "40px", color: "#616161"}}/>
                <p style={{ fontFamily: "Montserrat", fontSize: "36px",
                lineHeight: "48px", letterSpacing: "0.25px"}}>
                {price}</p>
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
              lineHeight: "32px", letterSpacing: "0px", color: "#616161"}}> {bedrooms} bedrooms </p>
            </div>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "6.67px"}}>
              <BiBath style={{width: "26.67px", height: "25.33px", color: "#616161"}}/>
              <p style={{ fontFamily: "Montserrat", fontSize: "24px",
              lineHeight: "32px", letterSpacing: "0px", color: "#616161"}}> {bathrooms} bathrooms </p>
            </div>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "8px"}}>
              <BiArea style={{width: "24px", height: "24px", color: "#616161"}}/>
              <p style={{ fontFamily: "Montserrat", fontSize: "24px",
              lineHeight: "32px", letterSpacing: "0px", color: "#616161"}}> {area} m2 </p>
          </div>
          {pets && (
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "6.67px"}}>
              <MdOutlinePets/>
              <p style={{ fontFamily: "Montserrat", fontSize: "24px",
              lineHeight: "32px", letterSpacing: "0px", color: "#616161"}}> Pets allowed </p>
            </div>
          )}
        </div>
        <p style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "20px",
        lineHeight: "28px", letterSpacing: "0.15px", color: "#BF5F82", paddingBottom: "8px", paddingTop: "16px"}}> About this property </p>
        <p>{ description }</p>
        <p style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "20px",
        lineHeight: "28px", letterSpacing: "0.15px", color: "#BF5F82", paddingBottom: "8px", paddingTop: "16px"}}> Location </p>
        <p style={{marginBottom: "8px"}}> {address}, Lima </p>
        <div>
          <iframe title="map" style={{ width: "100%", height: "760px"}} src="https://maps.google.com/maps?q=Francisco%20de%20Paula%20Ugarriza%2027,%20Miraflores,%20Lima&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
      </DetailsCard>

      {user && userType === "home-seeker" && contactedStatus == false ? (
       <Wrapper style={{padding:"32px 16px", height: "100%", alignSelf: "flex-start", alignItems: "normal"}}>
        <LoggedInHomeseekerBox1>
          <PinkButton style={{ gap: "9px", width: "212px", height: "40px" }}>
              <div onClick={()=> addToContactedProperties(currentProperty)}>
                <p style={{ fontFamily: "Inter", fontWeight: "500", fontSize: "14px",
                lineHeight: "24px", letterSpacing: "1.25px", color: "#FFFFFF"}}>CONTACT ADVISER</p>
              </div>
          </PinkButton>
            {favoriteStatus ? (
             <Wrapper style={{ gap: "14.52px" }} onClick={()=> removeFromFavoriteProperties(id)}>
                <FaHeart style={{width: "20px", height: "18.48px", color: "#616161"}}/>
                <p style={{ fontFamily: "Inter", fontWeight: "400", fontSize: "12px",
                  lineHeight: "16px", letterSpacing: "0.4px", color: "#616161"}}>Saved in favorites</p>
             </Wrapper>
             ): (
             <Wrapper style={{ gap: "14.52px" }} onClick={()=> addToFavoriteProperties(currentProperty)}>
                <FiHeart style={{width: "20px", height: "18.48px", color: "#616161"}}/>
                <p style={{ fontFamily: "Inter", fontWeight: "400", fontSize: "12px",
                  lineHeight: "16px", letterSpacing: "0.4px", color: "#616161"}}>Add to favorites</p>
             </Wrapper>
             )}
        </LoggedInHomeseekerBox1>
       </Wrapper>
      ) :
       user && userType === "home-seeker" && contactedStatus == true ? (
       <Wrapper style={{padding:"32px 16px", height: "100%", alignSelf: "flex-start", alignItems: "normal"}}>
        <LoggedInHomeseekerBox2>
          <Wrapper style={{ gap: "14.52px" }}>
            <p style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "20px",
              lineHeight: "28px", letterSpacing: "0.15px", color: "#373737"}}>Contact information</p>
            <Wrapper style={{ gap: "3px" }}>
              <p style={{ fontFamily: "Inter", fontWeight: "400", fontSize: "14px",
              lineHeight: "20px", letterSpacing: "0.25px", color: "#BF5F82"}}>Email</p>
              <p style={{ fontFamily: "Inter", fontWeight: "400", fontSize: "14px",
              lineHeight: "20px", letterSpacing: "0.25px", color: "#373737"}}>dude@greathouse.com</p>
            </Wrapper>
            <Wrapper style={{ gap: "3px" }}>
              <p style={{ fontFamily: "Inter", fontWeight: "400", fontSize: "14px",
              lineHeight: "20px", letterSpacing: "0.25px", color: "#BF5F82"}}>Phone</p>
              <p style={{ fontFamily: "Inter", fontWeight: "400", fontSize: "14px",
              lineHeight: "20px", letterSpacing: "0.25px", color: "#373737"}}>999444333</p>
            </Wrapper>
            {favoriteStatus ? (
             <Wrapper style={{ gap: "6px" }} onClick={()=> removeFromFavoriteProperties(id)}>
                <FaHeart style={{width: "20px", height: "18.48px", color: "#F48FB1"}}/>
                <p style={{ fontFamily: "Inter", fontWeight: "400", fontSize: "12px",
                  lineHeight: "16px", letterSpacing: "0.4px", color: "#F48FB1"}}>Saved in favorites</p>
             </Wrapper>
             ): (
             <Wrapper style={{ gap: "6px" }} onClick={()=> addToFavoriteProperties(currentProperty)}>
                <FiHeart style={{width: "20px", height: "18.48px", color: "#616161"}}/>
                <p style={{ fontFamily: "Inter", fontWeight: "400", fontSize: "12px",
                  lineHeight: "16px", letterSpacing: "0.4px", color: "#616161"}}>Add to favorites</p>
             </Wrapper>
             )}
          </Wrapper>
        </LoggedInHomeseekerBox2>
       </Wrapper>
      ) :
       user && userType === "landlord" ? (
       <Wrapper style={{ height: "100%", alignSelf: "flex-start", alignItems: "normal"}}>
        <LoggedInLandlordBox>
          <PinkButton style={{ gap: "11px", width: "188px", height: "40px" }}>
              <BiEdit style={{width: "18px", height: "18px", color: "#FFFFFF"}}/>
              <p style={{ fontFamily: "Inter", fontWeight: "500", fontSize: "14px",
              lineHeight: "24px", letterSpacing: "1.25px", color: "#FFFFFF"}}>EDIT PROPERTY</p>
          </PinkButton>
        </LoggedInLandlordBox>
       </Wrapper>
       ) :
       (
       <Wrapper style={{padding:"32px", height: "100%", alignSelf: "flex-start", alignItems: "normal"}}>
        <NotLoggedInBox>
          <p style={{width:"142px", textAlign:"center"}}>Log in or Join to contact the advertiser</p>
          <PinkButton style={{ gap: "9px" }}>
              <AiOutlineUserAdd style={{width: "19px", height: "21px", color: "#FFFFFF"}}/>
              <p style={{ fontFamily: "Inter", fontWeight: "500", fontSize: "14px",
              lineHeight: "24px", letterSpacing: "1.25px", color: "#FFFFFF"}}>LOGIN</p>
          </PinkButton>
        </NotLoggedInBox>
       </Wrapper>
       )}
   </Wrapper>
  )
}

export default PropertyDetailPage;

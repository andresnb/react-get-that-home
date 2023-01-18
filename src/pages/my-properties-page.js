import styled from "styled-components";
import PropertyCard from '../components/PropertyCard/propertyCard';
import sampleProperty from "../assets/images/rental-image-example.png";
import { useEffect, useState } from "react";
import { getProperties } from "../services/property-service";
import { Filters } from "../components/Filters/filters";
import { useAuth } from "../context/auth-context";

const activeData = [

  { name: '86872 Jacob Gateway',
    operation_type: 'rent',
    address: '86872 Jacob Gateway',
    price: 3000.00,
    property_type: 'apartment',
    bedrooms: 4,
    bathrooms: 2,
    area: 180,
    pets: true,
    status: true,
    phone: '5983764478928',
    description: '3 Bedroom/2 Bathroom apartment available for ASAP move-in! Apartment features hardwood floors throughout, virtual doorman, Central AC/heat, dishwasher and a microwave. The kitchen has custom cabinetry and the living room is big enough to fit a dinner table, a couch and a tv set up.',
    favorite: false,
    id: 1
  },
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
    id: 2
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
    id: 3
  },
  { name: 'Fransicsco de Paula Ugarriza 27',
    operation_type: 'rent',
    address: 'Fransicsco de Paula Ugarriza 27',
    price: 250.00,
    property_type: 'apartment',
    bedrooms: 2,
    bathrooms: 1,
    area: 100,
    pets: false,
    status: true,
    phone: '5983764478928',
    description: '3 Bedroom/2 Bathroom apartment available for ASAP move-in! Apartment features hardwood floors throughout, virtual doorman, Central AC/heat, dishwasher and a microwave. The kitchen has custom cabinetry and the living room is big enough to fit a dinner table, a couch and a tv set up.',
    favorite: false,
    id: 4
  },
  { name: '86872 Jacob Gateway',
    operation_type: 'rent',
    address: '86872 Jacob Gateway',
    price: 3000.00,
    property_type: 'apartment',
    bedrooms: 4,
    bathrooms: 2,
    area: 180,
    pets: true,
    status: true,
    phone: '5983764478928',
    description: '3 Bedroom/2 Bathroom apartment available for ASAP move-in! Apartment features hardwood floors throughout, virtual doorman, Central AC/heat, dishwasher and a microwave. The kitchen has custom cabinetry and the living room is big enough to fit a dinner table, a couch and a tv set up.',
    favorite: false,
    id: 5
  }
]

const closedData = [
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
    id: 6,
  },
  { name: 'Fransicsco de Paula Ugarriza 27',
    operation_type: 'rent',
    address: 'Fransicsco de Paula Ugarriza 27',
    price: 250.00,
    property_type: 'apartment',
    bedrooms: 2,
    bathrooms: 1,
    area: 100,
    pets: false,
    status: true,
    phone: '5983764478928',
    description: '3 Bedroom/2 Bathroom apartment available for ASAP move-in! Apartment features hardwood floors throughout, virtual doorman, Central AC/heat, dishwasher and a microwave. The kitchen has custom cabinetry and the living room is big enough to fit a dinner table, a couch and a tv set up.',
    favorite: false,
    id: 7
  },

]

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

const PropertiesContainer = styled.div`
  width: fit-content;
  display: grid;
  gap: 48px;
  grid-template-columns: repeat(3, 300px);
  justify-content:center;
  align-items: center;
`;


function MyProperties() {
  const { currentDisplayedProperties,
          setCurrentDisplayedProperties,
          myProperties, setMyProperties} = useAuth();
  const [activeProperties, setActiveProperties] = useState( myProperties.active || activeData);
  const [closedProperties, setClosedProperties] = useState( myProperties.closed ||closedData);
  const [properties, setProperties] = useState(activeProperties);

  useEffect(() => {
    setCurrentDisplayedProperties("active")
  }, []);

  useEffect(() => {
    if (currentDisplayedProperties === "closed") {
      setProperties(closedProperties);
      setMyProperties({...myProperties, "closed": closedProperties})

    } else {
      setProperties(activeProperties);
      setMyProperties({...myProperties, "active": activeProperties})
    }
  }, [currentDisplayedProperties, activeProperties, closedProperties]);

  function handleDelete(propertyId) {
    let filteredClosed = closedProperties.filter(property => property.id !== propertyId);
    setClosedProperties(filteredClosed);
  }

  function handleClose(propertyId) {
    let filteredActive = activeProperties.filter(property => property.id !== propertyId);
    let newClosed = activeProperties.filter(property => property.id === propertyId);
    setActiveProperties(filteredActive);
    setClosedProperties([...closedProperties , newClosed["0"]]);
  }

  function handleRestore(propertyId) {
    let filteredClosed = closedProperties.filter(property => property.id !== propertyId);
    let newActive = closedProperties.filter(property => property.id === propertyId);
    setClosedProperties(filteredClosed);
    setActiveProperties([...activeProperties, newActive["0"]]);
  }

  return (
    <Wrapper>
      <PageContainer>
        <div style={{width: '1136px'}}>
              {currentDisplayedProperties === "closed" ? (
                <div style={{width: '144px', display:"flex", flexDirection:"row", gap:"24px"}}>
                  <div style={{borderBottom: "2px solid #BDBDBD"}} onClick={() => setCurrentDisplayedProperties("active")}>
                    <p style={{ fontFamily: "Inter", fontWeight: "500", fontSize: "14px",
                    lineHeight: "24px", letterSpacing:"1.25px", color: "#BDBDBD", textAlign: "center"}}>
                      ACTIVE
                    </p>
                  </div>
                  <div style={{borderBottom: "2px solid #F48FB1"}} onClick={() => setCurrentDisplayedProperties("closed")}>
                    <p style={{ fontFamily: "Inter", fontWeight: "500", fontSize: "14px",
                      lineHeight: "24px", letterSpacing:"1.25px", color: "#373737", textAlign: "center"}}>
                        CLOSED
                      </p>
                    </div>
                  </div>
                ): (
                <div style={{width: '144px', display:"flex", flexDirection:"row", gap:"24px"}}>
                  <div style={{ borderBottom: "2px solid #F48FB1" }} onClick={() => setCurrentDisplayedProperties("active")}>
                    <p style={{ fontFamily: "Inter", fontWeight: "500", fontSize: "14px",
                    lineHeight: "24px", letterSpacing:"1.25px", color: "#373737", textAlign: "center"}}>
                      ACTIVE
                    </p>
                  </div>
                  <div style={{borderBottom: "2px solid #BDBDBD"}} onClick={() => setCurrentDisplayedProperties("closed")}>
                    <p style={{ fontFamily: "Inter", fontWeight: "500", fontSize: "14px",
                    lineHeight: "24px", letterSpacing:"1.25px", color: "#BDBDBD", textAlign: "center"}}>
                      CLOSED
                    </p>
                  </div>
                </div>
                )
              }

            <p style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "20px", lineHeight: "28px",
            color: "#616161", marginBottom: "22px", marginTop:"16px", textAlign: "left"}}>
              4 properties found
            </p>

            <PropertiesContainer>
               {properties.map((property) => (
                <PropertyCard
                key={property.id}
                image={sampleProperty}
                handleDelete={handleDelete}
                handleClose={handleClose}
                handleRestore={handleRestore}
                {...property}
                />
                ))}
            </PropertiesContainer>
        </div>
      </PageContainer>
    </Wrapper>
  )
}

export default MyProperties;

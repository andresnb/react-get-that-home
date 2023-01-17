import styled from "styled-components";
import PropertyCard from '../components/PropertyCard/propertyCard';
import sampleProperty from "../assets/images/rental-image-example.png";
import { useEffect, useState } from "react";
import { getProperties } from "../services/property-service";
import { Filters } from "../components/Filters/filters";
import { useAuth } from "../context/auth-context";

const properties_data = [

  { name: '86872 Jacob Gateway',
    operation_type: 'rental',
    address: '86872 Jacob Gateway',
    price: 3000.00,
    property_type: 'Apartment',
    bedrooms: 4,
    bathrooms: 2,
    area: 180,
    pets: true,
    status: true,
    phone: '5983764478928',
    description: '3 Bedroom/2 Bathroom apartment available for ASAP move-in! Apartment features hardwood floors throughout, virtual doorman, Central AC/heat, dishwasher and a microwave. The kitchen has custom cabinetry and the living room is big enough to fit a dinner table, a couch and a tv set up.'
  },
  { name: 'Fransicsco de Paula Ugarriza 27',
    operation_type: 'sale',
    address: 'Fransicsco de Paula Ugarriza 27',
    price: 25000.00,
    property_type: 'House',
    bedrooms: 4,
    bathrooms: 2,
    area: 220,
    pets: true,
    status: true,
    phone: '5983764478928',
    description: '3 Bedroom/2 Bathroom apartment available for ASAP move-in! Apartment features hardwood floors throughout, virtual doorman, Central AC/heat, dishwasher and a microwave. The kitchen has custom cabinetry and the living room is big enough to fit a dinner table, a couch and a tv set up.'
  },
  { name: 'Fransicsco de Paula Ugarriza 27',
    operation_type: 'sale',
    address: 'Fransicsco de Paula Ugarriza 27',
    price: 80000,
    property_type: 'House',
    bedrooms: 2,
    bathrooms: 1,
    area: 150,
    pets: false,
    status: true,
    phone: '5983764478928',
    description: '3 Bedroom/2 Bathroom apartment available for ASAP move-in! Apartment features hardwood floors throughout, virtual doorman, Central AC/heat, dishwasher and a microwave. The kitchen has custom cabinetry and the living room is big enough to fit a dinner table, a couch and a tv set up.'
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
    description: '3 Bedroom/2 Bathroom apartment available for ASAP move-in! Apartment features hardwood floors throughout, virtual doorman, Central AC/heat, dishwasher and a microwave. The kitchen has custom cabinetry and the living room is big enough to fit a dinner table, a couch and a tv set up.'
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

function ListViewPage() {
  const { filters, setFilters } = useAuth();
  const [showFilters, setShowFilters] = useState({
    price: false,
    propertyType: false,
    bedBath: false,
    more:false,
    operationType:false,
  });
  const [properties, setProperties] = useState([]);
  const [prices, setPrices] = useState({
    min: "",
    max: ""
  });
  const [baths, setBaths] = useState(1);
  const [beds, setBeds] = useState(1);

  let filterProperties = [...properties_data]?.filter(property => {
    if(property) return property.status
  });

  // Filter for max and min prices
  filterProperties = filterProperties.filter(property => {
      if (!(filters.prices.max)) return true;
      return (property.price <= filters.prices.max)
  })

  filterProperties = filterProperties.filter(property => {
    if (!(filters.prices.min)) return true;
    return (property.price >= filters.prices.min)
  })

  // Filter for min number of bedrooms
  filterProperties = filterProperties.filter(property => {
    return (property.bedrooms > filters.beds)
  })

  // Filter for min number of bathrooms
  filterProperties = filterProperties.filter(property => {
    return (property.bathrooms > filters.baths)
  })

  console.log('FILTROS??', filterProperties);

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

  function handlePrice(event) {
    event.preventDefault();

    const {name, value} = event.target;
    setPrices({ ...prices, [name.replace("-amount","")]: value });
  }

  function handleDone(event){
    event.preventDefault();

    const id = event.target.id
    if(id==='prices') setFilters({...filters, [id]: prices});
    if(id === "bathsbeds") setFilters({...filters, "beds": beds, "baths":baths})

    setShowFilters({
      // more: false,
      price: false,
      bedBath: false,
      // type: false
    });

  }

  console.log("BEDS", beds);
  console.log("BATHS", baths);
  console.log("FILTERS BAEK", filters);

  return (
    <Wrapper>
      <PageContainer>
        <Filters
          prices={prices}
          handlePrice={handlePrice}
          setBeds={setBeds}
          setBaths={setBaths}
          handleDone={handleDone}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
        />

        <div style={{width: '1136px'}}>
            <div>
              <p style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "20px",
              lineHeight: "28px", color: "#616161", marginBottom: "22px", textAlign: "left"}}>4 properties found
              </p>
            </div>

            <PropertiesContainer>
               {filterProperties.map((property) => (
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

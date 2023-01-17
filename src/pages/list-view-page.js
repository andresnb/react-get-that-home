import styled from "styled-components";
import PropertyCard from '../components/PropertyCard/propertyCard';
import sampleProperty from "../assets/images/rental-image-example.png";
import { useEffect, useState } from "react";
import { getProperties } from "../services/property-service";
import { Filters } from "../components/Filters/filters";
import { useAuth } from "../context/auth-context";

const properties_data = [

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
    favorite: false
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
    favorite: true
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
    favorite: true
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
    favorite: false
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
  const { filters, setFilters, setCurrentDisplayedProperties } = useAuth();
  setCurrentDisplayedProperties("filtered");
  const [properties, setProperties] = useState([]);
  const [showFilters, setShowFilters] = useState({
    price: false,
    propertyType: false,
    bedBath: false,
    more:false,
    operationType:false,
  });
  const [prices, setPrices] = useState({
    min: "",
    max: ""
  });
  const [areas, setAreas] = useState({
    min: "",
    max: ""
  });
  const [baths, setBaths] = useState(1);
  const [beds, setBeds] = useState(1);
  const [petAllowed, setPetAllowed] = useState(false);
  const [apartment, setApartment] = useState(false);
  const [house, setHouse] = useState(false);
  const [rent, setRent] = useState(false);
  const [buy, setBuy] = useState(false);
  const [both, setBoth] = useState(false);
  const [query, setQuery] = useState("");

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
    return (property.bedrooms >= filters.beds)
  })

  // Filter for min number of bathrooms
  filterProperties = filterProperties.filter(property => {
    return (property.bathrooms >= filters.baths)
  })

  // Filter for max and min areas
  filterProperties = filterProperties.filter(property => {
    if (!(filters.areas.max)) return true;
    return (property.area <= filters.areas.max)
  })

  filterProperties = filterProperties.filter(property => {
    if (!(filters.areas.min)) return true;
    return (property.area >= filters.areas.min)
  })

  // Filter for pet allowed
  filterProperties = filterProperties.filter(property => {
    if (!filters.petAllowed) return true;
    return (property.pets)
  })

  // Filter for property type on check
  filterProperties = filterProperties.filter(property => {
    if (!(filters.propertyType[0] || filters.propertyType[1])) return true;
    if (filters.propertyType[0] && filters.propertyType[1]) return true;
    if (filters.propertyType[1]) return property.property_type === "apartment"
    if (filters.propertyType[0]) return property.property_type === "house"
  })

  // Filter for operation type on check
  filterProperties = filterProperties.filter(property => {
  if (!(filters.operationType[0] || filters.operationType[1])) return true;
  if (filters.operationType[0] && filters.operationType[1]) return true;
  if (filters.operationType[0]) return property.operation_type === "rent"
  if (filters.operationType[1]) return property.operation_type === "sale"
  })

  // Filter for address
  filterProperties = filterProperties.filter(property => {
    return (property.address.toLowerCase().includes(filters.search))
  })


  useEffect(() => {
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

  function handleArea(event) {
    event.preventDefault();

    const {name, value} = event.target;
    setAreas({ ...areas, [name.replace("-amount","")]: value });
  }

  function handleDone(event){
    event.preventDefault();

    const id = event.target.id
    if(id==='prices') setFilters({...filters, [id]: prices});
    if(id === "bathsbeds") setFilters({...filters, "beds": beds, "baths":baths});
    if (id === "more") setFilters({ ...filters, "petAllowed": petAllowed, "areas": areas })
    if (id === "propertyType") setFilters({ ...filters, "propertyType": [house, apartment]})

    setShowFilters({
      ...showFilters,
      more: false,
      price: false,
      bedBath: false,
      propertyType: false
    });

  }

  function handleCheck(event) {
    const id = event.target.id
    if (id === "check-pets-allowed") setPetAllowed(event.target.checked);
    if (id === "check-house") setHouse(event.target.checked);
    if (id === "check-apartment") setApartment(event.target.checked);
  }

  function handleOperationType(event){
    const id = event.target.id

    if (id === "both") {
      setBoth(!both)
      setBuy(!both);
      setRent(!both);
    };
    if (id === "check-buy") setBuy(!buy);
    if (id === "check-rent") setRent(!rent);
  }

  function handleQuery(event) {
    setQuery(event.target.value);
  }

  useEffect(()=>{
    setFilters({...filters, "operationType":[buy, rent]})
  },[buy, rent, both])

  useEffect(()=>{
    setFilters({...filters, "search":query})
  },[query])

  return (
    <Wrapper>
      <PageContainer>
        <Filters
          prices={prices}
          areas={areas}
          house={house}
          apartment={apartment}
          petAllowed={petAllowed}
          buy={buy}
          rent={rent}
          both={both}
          query={query}
          handlePrice={handlePrice}
          handleArea={handleArea}
          handleCheck={handleCheck}
          handleOperationType={handleOperationType}
          handleQuery={handleQuery}
          setBeds={setBeds}
          setBaths={setBaths}
          setPetAllowed={setPetAllowed}
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

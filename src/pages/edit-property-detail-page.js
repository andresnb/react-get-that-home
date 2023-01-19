import { useState } from "react";
import { useAuth } from "../context/auth-context";
import styled from 'styled-components';
import { FiSearch } from "react-icons/fi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

const Wrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Wrapper3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`;

const Wrapper4 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: top;
  align-items: top;
`;

const StyledForm = styled("form")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 41.66%
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

const OperationTypeButton = styled("button")`
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

const Input = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  height: 18px;
  font-family: Inter;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: #8E8E8E;
`;



function EditPropertyDetail () {

    const { myProperties } = useAuth();
    const [operationType, setOperationType] = useState("rent");
    // const [formData, setFormData] = useState({
    //     email: email,
    //     password: "",
    //     first_name: first_name,
    //     last_name: last_name,
    // });

    function handleChange(event) {
      const { name, id, value } = event.target;
      console.log("1111", name, id, value)
      // setFormData({ ...formData, [name]: value });
      // console.log(formData)
    }

    function handleSubmit(event) {
      event.preventDefault();
      console.log("SUBMITTTING NEW DATAAA!!")
    }

    return (
        <div>
        <StyledForm onSubmit={handleSubmit}>
            <Wrapper1 style={{gap:"4px"}}>
              <p style={{
                  fontFamily: "Inter", fontWeight: "400", fontSize: "10px",
                  lineHeight: "12.1px", letterSpacing: "1.5px", color: "#616161", marginBottom: "4px"
                }}>Operation Type</p>
              <Wrapper3>
                <OperationTypeButton onClick={() => setOperationType("rent")} style={{ borderRadius: '8px 0px 0px 8px' }}>
                  <p style={{
                        fontFamily: "Montserrat", fontWeight: "400",
                        fontSize: "14px", lineHeight: "20px", color: "#616161"
                      }}>Rent</p>
                </OperationTypeButton>
                <OperationTypeButton onClick={()=>setOperationType("sale")}  style={{ borderRadius: '0px 8px 8px 0px' }}>
                  <p style={{
                        fontFamily: "Montserrat", fontWeight: "400",
                        fontSize: "14px", lineHeight: "20px", color: "#616161"
                      }}>Sale</p>
                </OperationTypeButton>
              </Wrapper3>
            </Wrapper1>

            <Wrapper1 style={{gap:"4px"}}>
              <p style={{
                  fontFamily: "Inter", fontWeight: "400", fontSize: "10px",
                  lineHeight: "12.1px", letterSpacing: "1.5px", color: "#616161", marginBottom: "4px"
                }}>Address</p>
              <Wrapper3 style={{height: "32px", width: "100%"}}>
                <FiSearch style={{ color: "#8E8E8E" }} />
                <Input
                  name="search-address"
                  type="text"
                  // value={query}
                  placeholder="Search by address"
                  // onChange={handleQuery}
                  id={"search-address"}
                  style={{width: "196px"}}
                />
              </Wrapper3>
            </Wrapper1>

            <Wrapper1 style={{gap:"4px"}}>
              <p style={{
                  fontFamily: "Inter", fontWeight: "400", fontSize: "10px",
                  lineHeight: "12.1px", letterSpacing: "1.5px", color: "#616161", marginBottom: "4px"
                }}>PRICE</p>
              <Wrapper3 style={{height: "32px", width: "100%"}}>
                <RiMoneyDollarCircleFill style={{ width: "26.67px", height: "26.67px", color: "#8E8E8E" }}/>
                <Input
                  name="min-amount"
                  type="number"
                  // value={price}
                  placeholder="2000"
                  // onChange={handlePrice}
                  id={"price"}
                />
              </Wrapper3>
            </Wrapper1>

            <Wrapper1 style={{gap:"4px"}}>
              <p style={{
                  fontFamily: "Inter", fontWeight: "400", fontSize: "10px",
                  lineHeight: "12.1px", letterSpacing: "1.5px", color: "#616161", marginBottom: "4px"
                }}>PROPERTY TYPE</p>
              <Wrapper2 style={{gap: "8px"}}>
                <Wrapper2 style={{height: "32px", width: "100%"}}>
                  <Input
                    // onChange={handleCheck}
                    // checked={house}
                    type="checkbox"
                    name="check-house"
                    id="check-house"
                  />
                  <label for="check-house">Houses</label>
                </Wrapper2>
                <Wrapper2 style={{height: "32px", width: "100%"}}>
                  <Input
                    // onChange={handleCheck}
                    // checked={apartment}
                    type="checkbox"
                    name="check-apartment"
                    id="check-apartment"
                  />
                  <label for="check-house">Apartments</label>
                </Wrapper2>
              </Wrapper2>
            </Wrapper1>

            <Wrapper1 style={{gap:"4px"}}>
              <p style={{
                  fontFamily: "Inter", fontWeight: "400", fontSize: "10px",
                  lineHeight: "12.1px", letterSpacing: "1.5px", color: "#616161", marginBottom: "4px"
                }}>Area in m2</p>
                <Input
                  name="area"
                  type="text"
                  // value={query}
                  placeholder="##"
                  // onChange={handleQuery}
                  id={"area"}
                  style={{width: "196px"}}
                />
            </Wrapper1>
            <PinkButton type="submit">PUBLISH PROPERTY LISTING</PinkButton>
          </StyledForm>
        </div>
      );
}

export default EditPropertyDetail

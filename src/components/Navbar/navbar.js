import styled from "styled-components";
// import PropertyCard from '../PropertyCard';
import getThatHomeLogo from "../../assets/images/get-that-home-logo.png";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1136px;
  margin: 16px 0px;
`;

const NavBarItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const WhiteButton = styled("button")`
  height: 40px;
  border: none;
  background: #ffffff;
  border: 2px solid #f48fb1;
  border-radius: 16px;
  padding: 0px 8px;
`;

const PinkButton = styled("button")`
  height: 40px;
  border: none;
  background: #f48fb1;
  border-radius: 16px;
  padding: 0px 8px;
`;

function Navbar() {
  return (
    <Wrapper>
      <NavBarContainer>
        <Link to={"/landing"}>
          <img
            src={getThatHomeLogo}
            alt="get that home app logo"
            style={{ height: "40px", width: "136px" }}
          />
        </Link>
        <NavBarItems>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <FiSearch style={{ color: "#616161" }} />
            <Link to={"/properties"}>
              <p
                style={{
                  fontFamily: "Inter",
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "24px",
                  letterSpacing: "1.25px",
                  color: "#616161",
                }}
              >
                FIND A HOME
              </p>
            </Link>
          </div>
          <WhiteButton>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <AiOutlineUserAdd
                style={{ width: "19px", height: "21px", color: "#616161" }}
              />
              <p
                style={{
                  fontFamily: "Inter",
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "24px",
                  letterSpacing: "1.25px",
                  color: "#616161",
                }}
              >
                JOIN
              </p>
            </div>
          </WhiteButton>
          <Link to="/login">
            <PinkButton>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <AiOutlineUserAdd
                  style={{ width: "19px", height: "21px", color: "#FFFFFF" }}
                />
                <p
                  style={{
                    fontFamily: "Inter",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "24px",
                    letterSpacing: "1.25px",
                    color: "#FFFFFF",
                  }}
                >
                  LOGIN
                </p>
              </div>
            </PinkButton>
          </Link>
        </NavBarItems>
      </NavBarContainer>
    </Wrapper>
  );
}

export default Navbar;

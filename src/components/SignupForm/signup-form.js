import { useState } from "react";
import { useAuth } from "../../context/auth-context";
import { Input} from "../Input/input";
import styled from 'styled-components';

const StyledButton = styled("button")`
  width: 300px;
  height: 36px;
  border: none;
  background: #FA4A0C;
  border-radius: 30px;
`;

const StyledForm = styled("form")`
  display: flex;
  flex-direction: column;
  // align-items: center;
  // gap: 32px;
`;
// { onSignup }
function SignupForm() {
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    signup(formData);
  }

  return (
    <div>
      <StyledForm onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "40px"}}>
        <Input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="my_mail@mail.com"
          label="Email address"
        />
        <Input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="*******"
          label="Password"
        />
        <StyledButton type="submit">Sign-up</StyledButton>
      </StyledForm>
    </div>
  );
}

export default SignupForm;
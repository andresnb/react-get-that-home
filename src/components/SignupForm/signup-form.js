import { useState } from "react";
import styled from "styled-components";
import Payment from "../Payment/Payment";
import UsersForm from "../Use form/Use-form";
function SignUpForm() {
	const [step, setStep] = useState(1);
	const [typeUser, setTypeUser] = useState("");
	return (
		<StyledContainer>
			<StyledBody>
				{step === 1 ? (
					<StyledContainerPayment>
            <Payment setType={setTypeUser} nextStep={setStep} type="landlord" />
						<Payment setType={setTypeUser} nextStep={setStep} type="homeseeker" />
					</StyledContainerPayment>
				) : (
					<StyledContainerForm>
						<UsersForm id={1} typeUser={typeUser}/>
					</StyledContainerForm>
				)}
			</StyledBody>
		</StyledContainer>
	);
}

  
const StyledContainer = styled.div`
	width: 100%;
	height: 100vh;
	border: 1px solid red;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;


const StyledBody = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	background: linear-gradient(to bottom, pink 50%, white 50%);
`;

const StyledContainerPayment = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
	height: 100%;
`;

const StyledContainerForm = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
	height: 100%;
	width: 460px;
`;

export default SignUpForm;
/* <StyledForm onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "40px"}}>
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
      </StyledForm> */      
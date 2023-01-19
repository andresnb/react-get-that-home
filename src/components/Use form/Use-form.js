import styled from "styled-components";
import { useState } from "react";
import { signup } from "../../services/session-service";
import { useNavigate } from "react-router";

export default function UsersForm({ id, typeUser }) {
    const navigate= useNavigate();
	const [form, setForm] = useState({
		email: "",
		password: "",
		name: "",
		username: "",
		role: typeUser.toLowerCase(),
	});
	const handleSubmit = async (e) => {
		e.preventDefault();
        await signup(form);
        navigate("/landing");
		
	};

	const { email, password, name, username } = form;

	return (
		<StyledForm onSubmit={handleSubmit} id={id}>
			<StyledHeader>
				<h2>Create Account</h2>
			</StyledHeader>
			<StyledContainerInputs>
				<StyledContainerInput>
					<label>Name</label>
					<StyledInput
						type='text'
						name='name'
						placeholder='Jhohn Doe'
						value={name}
						required
						onChange={(e) =>
							setForm({ ...form, [e.target.name]: e.target.value })
						}
					/>
				</StyledContainerInput>
				<StyledContainerInput>
					<label>Username</label>
					<StyledInput
						type='text'
						name='username'
						placeholder='Jhohn Doe'
						value={username}
						required
						onChange={(e) =>
							setForm({ ...form, [e.target.name]: e.target.value })
						}
					/>
				</StyledContainerInput>
				<StyledContainerInput>
					<label>Email</label>
					<StyledInput
						type='email'
						name='email'
						placeholder='users@mail.com'
						value={email}
						required
						onChange={(e) =>
							setForm({ ...form, [e.target.name]: e.target.value })
						}
					/>
				</StyledContainerInput>
				<StyledContainerInput>
					<label>Password</label>
					<StyledInput
						type='password'
						name='password'
						placeholder='*******'
						value={password}
						required
						onChange={(e) =>
							setForm({ ...form, [e.target.name]: e.target.value })
						}
					/>
				</StyledContainerInput>
			</StyledContainerInputs>
			<StyledContainerButton>
				<button type='submit'>Create User</button>
			</StyledContainerButton>
		</StyledForm>
	);
}

const StyledForm = styled.form`
	width: 390px;
	background: #ffffff;
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
	border-radius: 8px;
	padding: 16px;
	display: flex;
	gap: 16px;
	flex-direction: column;
`;

const StyledInput = styled.input`
	border: 1px solid pink;
	width: 100%;
	color: gray;
	padding: 4px;
	border-radius: 8px;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 24px;
	margin-top: 4px;
	&:focus {
		outline: none;
	}
`;

const StyledHeader = styled.div`
	text-align: center;
	& > h2 {
		font-style: normal;
		font-weight: normal;
		font-size: 24px;
		line-height: 32px;
	}
`;

const StyledContainerInputs = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const StyledContainerInput = styled.div`
	& > label {
		font-style: normal;
		font-weight: normal;
		font-size: 10px;
		line-height: 12px;
		letter-spacing: 1.5px;
		text-transform: uppercase;
		color: gray;
	}
`;

const StyledContainerButton = styled.div`
	text-align: center;
`;
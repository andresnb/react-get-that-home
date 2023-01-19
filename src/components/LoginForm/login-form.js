import { useState } from "react";
import { Input } from "../Input/input";
import { login } from "../../services/session-service";
import "./Login.css";
import { useNavigate } from "react-router";
function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChangeInputEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangeInputPassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({
      email: email,
      password: password,
    });
    navigate("/landing");
  };
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <Input
          name="email"
          type="email"
          value={email}
          onChange={handleChangeInputEmail}
          placeholder="example@mail.com"
          label="Email"
        />
        <Input
          name="password"
          type="password"
          value={password}
          onChange={handleChangeInputPassword}
          placeholder="*******"
          label="Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;

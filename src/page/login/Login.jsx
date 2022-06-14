import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MAX = 6;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verify, setVerify] = useState(true);

  const navigate = useNavigate();

  const validateEmail = () => {
    const re = /\S+@\S+/;
    return re.test(email);
  };

  const verifyButton = () => {
    const verifyEmail = validateEmail();
    const verifyPassword = password.length > MAX;
    if (verifyEmail && verifyPassword) return setVerify(false);
    return setVerify(true);
  };

  const handleClick = () => {
    localStorage.setItem("user", JSON.stringify({ email }));
    localStorage.setItem("mealsToken", 1);
    localStorage.setItem("cocktailsToken", 1);
    navigate("/foods");
  };

  useEffect(() => {
    verifyButton();
  }, [email, password]);

  return (
    <form>
      <label htmlFor="email-input">
        Email
        <input
          type="email"
          data-testid="email-input"
          value={email}
          onChange={({ target }) => {
            setEmail(target.value);
          }}
        />
      </label>
      <label htmlFor="password-input">
        Password
        <input
          type="password"
          data-testid="password-input"
          value={password}
          onChange={({ target }) => {
            setPassword(target.value);
          }}
        />
      </label>
      <button
        type="submit"
        data-testid="login-submit-btn"
        disabled={verify}
        onClick={() => handleClick()}
      >
        Enter
      </button>
    </form>
  );
}

export default Login;

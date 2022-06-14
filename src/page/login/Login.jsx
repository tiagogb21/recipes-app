import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button, TextField } from "@mui/material";
import { makeStyles } from "@material-ui/core";

import * as Yup from "yup";

import "./Login.css";

import { MAX_LENGTH, remember } from "../../services/variables";

const schema = Yup.object().shape({
  email: Yup.string().required("Required field"),
  password: Yup.string().required("Required field"),
});

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      width: "30rem",
    },
    field: {
      marginTop: theme.spacing(2),
    },
    submitButton: {
      marginTop: theme.spacing(2),
    },
  };
});

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verify, setVerify] = useState(true);

  const classes = useStyles();

  const navigate = useNavigate();

  const validateEmail = () => {
    const re = /\S+@\S+/;
    return re.test(email);
  };

  const verifyButton = () => {
    const verifyEmail = validateEmail();
    const verifyPassword = password.length > MAX_LENGTH;
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
      <TextField
        data-testid="email-input"
        label="email"
        variant="outlined"
        type="email"
        value={email}
        onChange={({ target }) => {
          setEmail(target.value);
        }}
      />
      <TextField
        data-testid="password-input"
        label="email"
        variant="outlined"
        type="password"
        value={password}
        onChange={({ target }) => {
          setPassword(target.value);
        }}
      />

      <Button
        data-testid="login-submit-btn"
        type="submit"
        variant="contained"
        color="primary"
        disabled={verify}
        onClick={() => handleClick()}
      >
        Enter
      </Button>
    </form>
  );
}

export default Login;

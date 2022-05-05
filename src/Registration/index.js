import React from "react";
import { useState, useEffect } from "react";

import {
  Stack,
  Container,
  Typography,
  Link,
  Button,
  FormControl,
  Alert,
} from "@mui/material";
import RegistrationTextinput from "./RegistrationTextinput";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//Redux
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import actionCreators from "../state";

import axios from "axios";

function Registration() {
  const dispatch = useDispatch();
  const { loginUser, setJwt } = bindActionCreators(actionCreators, dispatch);


  const navigate = useNavigate();

  const [pageValid, setPageValid] = useState(false);
  const [validList, updateValidList] = useState([]);

  //UI toggles

  const [warning, setWarning] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);



  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabledButton(true);

    const reqBody = {
      username: e.target[0].value,
      email: e.target[2].value,
      password: e.target[4].value,
    };

    console.log(reqBody);

    if (pageValid) {
      await axios
        .post("http://localhost:1337/api/auth/local/register", reqBody)
        .then((res) => {
          setWarning(false);
          setError(false);
          setSuccess(true);

          setTimeout(()=>{
            loginUser(res.data.user.username);
            setJwt(res.data.jwt);
            navigate("../userposts")
          },3000)
          
        })
        .catch((err) => {
          setWarning(false);
          setError(true);
          setDisabledButton(false);
        });
    } else {
      setWarning(true);
      setDisabledButton(false);
    }
  };

  useEffect(() => {
    console.log("List of valids: ", validList);
    if (validList.length === 3) {
      setPageValid(true);
    }
  }, [validList]);

  console.log("Page validity: " + pageValid);

  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", minHeight: "100vh" }}
    >
      <FormControl
        component="form"
        maxWidth="sm"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        sx={{
          boxShadow: 1,
          width: 300,
          padding: 2,
          height: "100%",
          alignSelf: "center",
        }}
      >
        <Typography gutterBottom align="center" variant="h4" component="h1">
          Create a new user
        </Typography>
        <Stack spacing={2}>
          <AppRegistrationIcon
            sx={{ alignSelf: "center" }}
            color="primary"
            fontSize="large"
          />
          <RegistrationTextinput
            label="Username"
            type="text"
            helperText="Must begin with a letter and be at least 5-characters long (excluding special characters such as #, $, % etc.)."
            validation={/^\w[a-zA-Z0-9]{3,}[a-zA-Z0-9]$/}
            updateValidList={updateValidList}
            validList={validList}
          />
          <RegistrationTextinput
            label="Email"
            type="email"
            helperText="Must be a valid email"
            validation={/^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+[.][a-z]+$/}
            updateValidList={updateValidList}
            validList={validList}
          />
          <RegistrationTextinput
            label="Password"
            type="password"
            helperText="Must be at least 8 characters long, including at least 1 uppercase character and at least 1 special character."
            validation={
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\.@$!%*?&])[A-Za-z\d@.$!%*?&]{8,}$/
            }
            updateValidList={updateValidList}
            validList={validList}
          />
          {warning ? (
            <Alert severity="warning">
              Please fill out all required fields{" "}
            </Alert>
          ) : success ? (
            <Alert severity="success">Registration successful!</Alert>
          ) : error ? (
            <Alert severity="error">An error has occured.</Alert>
          ) : null}
          <Button
            type="submit"
            variant="contained"
            size="large"
            color="primary"
            disabled={disabledButton}
          >
            Register
          </Button>

          <Typography>
            Already have an account?{" "}
            <Link component={RouterLink} to="../Login">
              Login instead
            </Link>
          </Typography>
        </Stack>
      </FormControl>
    </Container>
  );
}

export default Registration;

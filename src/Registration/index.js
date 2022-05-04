import React from "react";
import { useState, useEffect } from "react";

import {
  Stack,
  Container,
  Typography,
  Box,
  Link,
  Button,
  FormControl,
} from "@mui/material";
import RegistrationTextinput from "./RegistrationTextinput";

import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

import { Link as RouterLink } from "react-router-dom";

function Registration() {

  const [pageValid, setPageValid] = useState(false);

  const [validList, updateValidList] = useState([])

  const handleSubmit = async (e) =>{
    e.preventDefault();

    console.log(e.target);

    const reqBody = {
      identifier: e.target[0].value,
      password: e.target[1].value,
    };

  }

  const valid = [];

  useEffect(()=>{ console.log(validList); if(validList.length===3){setPageValid(true)}},[validList])

  console.log("Page validity: " + pageValid)


  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", minHeight: "100vh" }}
    >
      <FormControl
        component="form"
        maxWidth="sm"
        onSubmit={(e)=>{ handleSubmit(e)}}
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
        <AppRegistrationIcon  sx={{ alignSelf: "center" }}
            color="primary"
            fontSize="large"/>
          <RegistrationTextinput
            label="Username"
            helperText="Must begin with a letter and be at least 5-characters long (excluding special characters such as #, $, % etc.)."
            validation={/^\w[a-zA-Z0-9]{3,}[a-zA-Z0-9]$/}
            updateValidList = {updateValidList}
            validList = {validList}
          />
          <RegistrationTextinput
            label="Email"
            helperText="Must be a valid email"
            validation={/^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+[.][a-z]+$/}
            updateValidList = {updateValidList}
            validList = {validList}
          />
          <RegistrationTextinput
            label="Password"
            helperText="Must be at least 8 characters long, including at least 1 uppercase character and at least 1 special character."
            validation={
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\.@$!%*?&])[A-Za-z\d@.$!%*?&]{8,}$/
            }
            updateValidList = {updateValidList}
            validList = {validList}
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            color="primary"
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

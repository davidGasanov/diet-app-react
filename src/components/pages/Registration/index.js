import React from 'react'

import { Stack, Container, Typography, Box } from "@mui/material";
import RegistrationTextinput from "./RegistrationTextinput";


function index() {
  return (
    <Container sx={{ display: "flex", justifyContent: "center", minHeight: "100vh"}}>
    <Box
      component="form"
      maxWidth="sm"
      sx={{
        boxShadow: 1,
        width: 300,
        padding: 2,
        height: "100%",
        alignSelf: 'center',
      }}
    >
      <Typography gutterBottom align="center" variant="h3" component="h1">
        Create a new user
      </Typography>
      <Stack spacing={2}>
        <RegistrationTextinput
          label="Username"
          helperText="Must begin with a letter and be at least 5-characters long (excluding special characters such as #, $, % etc.)."
          validation={/^\w[a-zA-Z0-9]{3,}[a-zA-Z0-9]$/}
        />
        <RegistrationTextinput
          label="Email"
          helperText="Must be a valid email"
          validation={/^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+[.][a-z]+$/}
        />
        <RegistrationTextinput
          label="Password"
          helperText="Must be at least 8 characters long, including at least 1 uppercase character and at least 1 special character."
          validation={/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\.@$!%*?&])[A-Za-z\d@.$!%*?&]{8,}$/}
   />

        
      </Stack>
    </Box>
  </Container>
  )
}

export default index
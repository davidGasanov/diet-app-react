import React from "react";
import axios from "axios";

import { Link as RouterLink, useNavigate } from "react-router-dom";

// MUI
import {
  Button,
  Stack,
  Container,
  Typography,
  FormControl,
  TextField,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Link from "@mui/material/Link";

// REDUX
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import actionCreators from "../state";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loginUser, logOutUser, setJwt, removeJwt } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const handleChange = () => {
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reqBody = {
      identifier: e.target[0].value,
      password: e.target[1].value,
    };

    const {data} = await axios
      .post("http://localhost:1337/api/auth/local", reqBody)
      .then((res) => {
        // res.status == 200 && navigate("/userposts");
      }).catch((err) => console.log(err));


      setTimeout(() => {
        console.log(data);
      }, 1000);
 

  };



  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", minHeight: "100vh" }}
    >
      <FormControl
        component="form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        sx={{
          boxShadow: 2,
          padding: 2,
          height: "100%",
          alignSelf: "center",
        }}
      >
        <Stack spacing={2}>
          <Typography gutterBottom align="center" variant="h4" component="h1">
            Sign in
          </Typography>
          <LockOutlinedIcon
            sx={{ alignSelf: "center" }}
            color="primary"
            fontSize="large"
          />
          <TextField
            required
            onChange={handleChange}
            label={"Email"}
            type="email"
            variant="standard"
          />
          <TextField
            required
            onChange={handleChange}
            type="password"
            label={"Password"}
            variant="standard"
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            color="primary"
          >
            Sign in
          </Button>
          <Typography>
            Already have an account?{" "}
            <Link component={RouterLink} to="../Register">
              Register instead
            </Link>
          </Typography>
        </Stack>
      </FormControl>
    </Container>
  );
}

export default Login;

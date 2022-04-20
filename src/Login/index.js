import React from "react";

import { Link as RouterLink } from "react-router-dom";
import {
  Button,
  Stack,
  Container,
  Typography,
  Box,
  TextField,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Link from "@mui/material/Link";

function index() {
  const handleChange = () => {
    return null;
  };

  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", minHeight: "100vh" }}
    >
      <Box
        component="form"
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
            label={"Username"}
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
            tpye="submit"
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
      </Box>
    </Container>
  );
}

export default index;

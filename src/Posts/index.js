import React from "react";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import Card from "../components/Card";

function index() {
  return (
    <Container sx={{display:"flex", justifyContent: "center", padding: '30px'}}>
      <Grid sx={{ flexGrow: 1 }} maxWidth="xl" container spacing={5}>
        <Grid item xs={12} sm={6} md={4}  align="center">
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4} align="center">
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4} align="center">
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4} align="center">
          <Card />
        </Grid>
      </Grid>
    </Container>
  );
}

export default index;

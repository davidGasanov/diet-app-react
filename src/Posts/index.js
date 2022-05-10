import React from "react";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import Card from "../components/Card";

function index() {
  return (
    <Container sx={{display:"flex", justifyContent: "center"}}>
      <Grid sx={{ flexGrow: 1 }} maxWidth="xl" container spacing={10}>
        <Grid justify="center" item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
      </Grid>
    </Container>
  );
}

export default index;

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Box, Divider } from "@mui/material";

import { GiMeat } from "react-icons/gi";
import {GoPencil} from "react-icons/go"

import pineappleImg from "../imgs/pineapple-rice.jpg";

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={pineappleImg}
          alt="pineapple-rice"
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <Divider/>
      <CardContent >

        <Box sx={{ display: "flex", alignItems: "center", minHeight: "35px" }}>
          {" "}
          <Typography fontWeight="bold" sx={{minWidth:"70px", fontStyle:"bold"}} >Category:</Typography> <Typography sx={{marginLeft: "20px", marginRight:"10px"}} variant="body1">Meat-Based</Typography> <GiMeat color="rgb(221, 133, 18)" size={32} />{" "}
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", minHeight: "35px" }}>
          {" "}
          <Typography sx={{minWidth:"70px"}} variant="body1">Calories:</Typography> <Typography sx={{marginLeft: "20px", marginRight:"10px"}} variant="body1">320 kCal</Typography>{" "}
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", minHeight: "35px" }}>
          {" "}
          <Typography sx={{minWidth:"70px"}} variant="body1">Author:</Typography> <Typography sx={{marginLeft: "20px", marginRight:"10px"}} variant="body1">Author name</Typography>{" "}
        </Box>
      </CardContent>

    </Card>
  );
}

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import {
  Button,
  CardActionArea,
  CardActions,
  Box,
  Divider,
} from "@mui/material";

import { GiMeat } from "react-icons/gi";
import { GiCupcake } from "react-icons/gi";
import { RiLeafFill } from "react-icons/ri";
import { BiDrink } from "react-icons/bi";
import { BsCupStraw } from "react-icons/bs";

export default function MultiActionAreaCard({ data }) {
  const {
    Ingredients,
    calories,
    category,
    description,
    recipe,
    title,
    image,
    user,
  } = data;

  const imgUrl = image.data.attributes.url;
  const icon = (function () {
    switch (category) {
      case "Meat-Based":
        return <GiMeat color="rgb(221, 133, 18)" size={32} />;
      case "Vegetarian":
        return <RiLeafFill color="#3fcc23" size={28} />;
      case "Dessert":
        return <GiCupcake color="#e664e8" size={30} />;
      case "Alcohol":
        return <BiDrink color="#e86485" size={30} />;
      case "Beverage":
        return <BsCupStraw color="#59c5de" size={30} />;
      default:
        return null;
    }
  })();


  return (
    <Card  align="left">
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={"http://localhost:1337" + imgUrl}
          alt={""}
        />
        <CardContent>
          <Typography
            sx={{ minHeight: "65px", m: "auto 0" }}
            gutterBottom
            align="center"
            variant="h6"
            component="h2"
          >
            {title}
          </Typography>
          <Typography
            sx={{
              display: "-webkit-box",
              "-webkit-line-clamp": "2",
              "-webkit-box-orient": "vertical",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
            variant="body2"
            color="text.secondary"
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Divider />
      <CardContent sx={{ paddingBottom: "5px" }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            minHeight: "35px",
          }}
        >
          {" "}
          <Typography
            fontWeight="bold"
            sx={{ minWidth: "70px", fontStyle: "bold" }}
          >
            Category:
          </Typography>{" "}
          <Chip sx={{ m: "5px 10px" }} icon={icon} label={category} />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", minHeight: "35px" }}>
          {" "}
          <Typography sx={{ minWidth: "70px" }} fontWeight="bold" variant="body1">
            Calories:
          </Typography>{" "}
          <Typography
            sx={{ marginLeft: "20px", marginRight: "10px" }}
            variant="body1"
          >
            {calories}kcal
          </Typography>{" "}
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", minHeight: "35px" }}>
          {" "}
          <Typography fontWeight="bold" sx={{ minWidth: "70px" }} variant="body1">
            Uploaded by:
          </Typography>{" "}
          <Typography
            sx={{ marginLeft: "20px", marginRight: "10px" }}
            variant="body1"
          >
            {user.data.attributes.username}
          </Typography>{" "}
        </Box>
      </CardContent>
      <CardActions>
        <Button sx={{ width: "100%" }} variant="contained" size="small">
          Add
        </Button>
      </CardActions>
    </Card>
  );
}

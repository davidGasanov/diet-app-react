import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
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
import pineappleImg from "../imgs/pineapple-rice.jpg";

export default function MultiActionAreaCard({
  data: {
    Ingredients,
    calories,
    category,
    description,
    recipe,
    title,
    image,
    users_permissions_user,
  },
}) {
  const imgUrl = image.data.attributes.url;

  console.log("The img", imgUrl);

  return (
    <Card sx={{ maxWidth: 300 }} align="left">
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={"http://localhost:1337" + imgUrl}
          alt="pineapple-rice"
        />
        <CardContent>
          <Typography sx={{minHeight: '65px'}} gutterBottom align="center" variant="h6" component="div">
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
        <Box sx={{ display: "flex", alignItems: "center", minHeight: "35px" }}>
          {" "}
          <Typography
            fontWeight="bold"
            sx={{ minWidth: "70px", fontStyle: "bold" }}
          >
            Category:
          </Typography>{" "}
          <Typography
            sx={{ marginLeft: "20px", marginRight: "10px" }}
            variant="body1"
          >
            {category}
          </Typography>{" "}
          <GiMeat color="rgb(221, 133, 18)" size={32} />{" "}
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", minHeight: "35px" }}>
          {" "}
          <Typography sx={{ minWidth: "70px" }} variant="body1">
            Calories:
          </Typography>{" "}
          <Typography
            sx={{ marginLeft: "20px", marginRight: "10px" }}
            variant="body1"
          >
            320 kCal
          </Typography>{" "}
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", minHeight: "35px" }}>
          {" "}
          <Typography sx={{ minWidth: "70px" }} variant="body1">
            Author:
          </Typography>{" "}
          <Typography
            sx={{ marginLeft: "20px", marginRight: "10px" }}
            variant="body1"
          >
            Author name
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

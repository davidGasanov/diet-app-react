import { React, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import LinearProgress from "@mui/material/LinearProgress";
import Container from "@mui/material/Container";
import Card from "../components/Card";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import actionCreators from "../state";

function Foodscontainer() {
  const dispatch = useDispatch();
  const { populateFoods } = bindActionCreators(actionCreators, dispatch);

  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    const getFoodList = async () => {
      const { data } = await axios.get(
        "http://localhost:1337/api/foods?populate=*",
        {
          onDownloadProgress: (progressEvent) => {
            let percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
          },
        }
      );
      console.log(data);
      populateFoods(data);
      setFoodList(data.data);
    };
    if (!foodList.length) {
      getFoodList();
    }
  }, []);

  console.log("Foodlist is: ", foodList);

  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", padding: "30px" }}
    >
      {foodList !== [] ? (
        <Grid sx={{ flexGrow: 1 }} maxWidth="xl" container rowSpacing={10}>
          {foodList.map((food, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} align="center">
            <Card data={food.attributes} />
          </Grid>
          ))}
        </Grid>
      ) : (
        <Box sx={{minHeight: '100vh', display:"flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}><Box><LinearProgress sx={{minWidth: '50vw'}}/></Box></Box>
        
      )}
    </Container>
  );
}

export default Foodscontainer;

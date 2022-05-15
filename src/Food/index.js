import { React, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import LinearProgress from "@mui/material/LinearProgress";
import Container from "@mui/material/Container";
import Card from "../components/Card";
import axios from "axios";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { Skeleton } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import actionCreators from "../state";

function Foodscontainer() {
  const dispatch = useDispatch();
  const { populateFoods } = bindActionCreators(actionCreators, dispatch);

  const [foodList, setFoodList] = useState([]);
  const [foodError, setFoodError] = useState(false);
  const [loading, setLoading] = useState(false);

  const getFoodList = async () => {
    setLoading(true);
    const { data } = await axios
      .get("http://localhost:1337/api/foods?populate=*")
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setFoodError(true);
      });
    console.log("Axios data:", data);
    populateFoods(data);
    setLoading(false);
    setFoodList(data.data);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getFoodList();
    }, 3000);
  }, []);

  console.log("Foodlist is: ", foodList);

  const storeFoodList = useSelector((state) => state.foods);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    const query = e.target[0].value;
    console.log("Store Food List: ", storeFoodList);

    if (query !== "") {
      const rx = new RegExp(query, "i");
      const newFoodList = storeFoodList.filter((food) =>
        rx.test(food.attributes.title)
      );
      setFoodList(newFoodList);
      setFoodError(!newFoodList.length);
    } else {
      setFoodList(storeFoodList);
    }
  };

  return (
    <Container sx={{ justifyContent: "center", padding: "30px" }}>
      <Grid
        sx={{ flexGrow: 1 }}
        maxWidth="xl"
        container
        spacing={5}
        rowSpacing={5}
      >
        <Grid component="form" onSubmit={handleSearch} item xs={12}>
          <OutlinedInput
            placeholder="Search for food and drinks"
            fullWidth
            onChange={(e) => {
              if (e.target.value === "") {
                setFoodList(storeFoodList);
                setFoodError(false);
              }
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  type="submit"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </Grid>

        {foodError && (
          <Grid item xs={12}>
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>No items have been found.
            </Alert>
          </Grid>
        )}

        {loading ? (
          [...Array(6)].map((n) => (
              <Grid key={n} item xs={12} sm={6} md={4} lg={3} align="center">
                <Skeleton variant="rectangular" height={200} />
              </Grid>
            ))) : (
          foodList.map((food, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3} align="center">
              <Card data={food.attributes} />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
}

export default Foodscontainer;

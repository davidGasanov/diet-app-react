import { React, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import Container from "@mui/material/Container";
import Card from "../components/Card";
import axios from "axios";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Slider from "@mui/material/Slider";
import { Skeleton, Typography } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import actionCreators from "../state";
//import { is } from "immer/dist/internal";

function Foodscontainer() {
  const dispatch = useDispatch();
  const { populateFoods } = bindActionCreators(actionCreators, dispatch);

  // Local state
  const [foodList, setFoodList] = useState([]);
  const [foodError, setFoodError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [queryParams, setQueryParams] = useState({
    category: ["Meat-Based", "Vegetarian", "Dessert", "Alcohol", "Beverage"],
    calories: [0, 2000],
  });

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
    getFoodList();
  }, []);

  console.log("Foodlist is: ", foodList);

  const storeFoodList = useSelector((state) => state.foods);

  const handleSearch = (e) => {
    e.preventDefault();

    console.log("EVENt", e.target);

    const categoryInput = [e.target[1].value];

    setQueryParams({
      category: categoryInput,
      calories: { min: 0, max: Number.POSITIVE_INFINITY },
    });

    console.log("queryParams:", queryParams);

    const query = e.target[2].value ? e.target[2].value : ".*";
    console.log("Store Food List: ", storeFoodList);
    const rx = new RegExp(query, "i");
    const newFoodList = storeFoodList.filter((food) => {
      if (
        rx.test(food.attributes.title) &&
        food.attributes.calories >= queryParams.calories[0] &&
        food.attributes.calories <= queryParams.calories[1] &&
        categoryInput.includes(food.attributes.category)
      ) {
        return true;
      } else {
        return false;
      }
    });
    setFoodList(newFoodList);
    setFoodError(!newFoodList.length);
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
        <Grid component="form" onSubmit={handleSearch} item xs={12} container>
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>Calorie range:</Typography>
            <Slider
              valueLabelDisplay="auto"
              value={queryParams.calories}
            />
          </Grid>
          <Grid component={Select} item xs={12} md={2}>
            <MenuItem value={"Meat-Based"}>Meat-Based</MenuItem>
            <MenuItem value={"Vegetarian"}>Vegetarian</MenuItem>
          </Grid>

          <Grid
            component={OutlinedInput}
            item
            xs={12}
            md={7}
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

        {loading
          ? [...Array(6)].map((n) => (
              <Grid key={n} item xs={12} sm={6} md={4} lg={3} align="center">
                <Skeleton variant="rectangular" height={200} />
              </Grid>
            ))
          : foodList.map((food, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                align="center"
              >
                <Card data={food.attributes} />
              </Grid>
            ))}
      </Grid>
    </Container>
  );
}

export default Foodscontainer;

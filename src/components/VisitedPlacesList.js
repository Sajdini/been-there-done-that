import React from "react";
import { Grid, Paper } from "@mui/material";
import VisitedPlacesItem from "./VisitedPlacesItem";

const VisitedPlacesList = (props) => {
  return (
    <>
      {props.places.map((place, key) => (
        <Paper
          elevation={4}
          mt={"9"}
          sx={{
            p: 2,
            margin: "auto",
            marginTop: 5,
            maxWidth: 1000,
            flexGrow: 1,
            height: 330,
          }}
        >
          <Grid
            container
            spacing={0}
            direction={key % 2 === 0 ? "row" : "row-reverse"}
          >
            <VisitedPlacesItem
              description={place.description}
              title={place.title}
              src={place.image}
              date={place.date}
            />
          </Grid>
        </Paper>
      ))}
    </>
  );
};

export default VisitedPlacesList;

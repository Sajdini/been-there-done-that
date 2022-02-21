import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Grid, CardMedia } from "@mui/material";

const VisitedPlacesItem = (props) => {
  return (
    <>
      <Grid item xs={6} sx={{ maxHeight: 300, wrap: "wrap" }}>
        <CardMedia
          sx={{
            maxWidth: 1,
            height: 300,
            objectFit: "cover",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <img
            alt="complex"
            src={props.src}
            width={"100%"}
            height={"100%"}
            object
          />
        </CardMedia>
      </Grid>

      <Grid item xs={6} sx={{ maxHeight: 300 }}>
        <Box sx={{ width: 1, height: 1 }}>
          <Typography variant="h4" component="h2" ml={15}>
            {props.title}
          </Typography>

          <Box mt={11}>
            <Typography variant="subtitle2" ml={1} mb={1}>
              Date visited: {props.date}
            </Typography>
            <Typography variant="subtitle1" ml={1}>
              {props.description}
            </Typography>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default VisitedPlacesItem;

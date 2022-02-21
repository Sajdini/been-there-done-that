import React from "react";
import { useState } from "react";
import { Paper, Typography, Divider } from "@mui/material";
import FilledTextField from "./textField";

import DateField from "./DateField";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

const NewPlaceForm = (props) => {
  const [data, setData] = useState({
    title: "",
    image: "",
    date: "",
    description: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      data.title === "" ||
      !data.image ||
      !data.date ||
      data.description === ""
    ) {
      alert("Please submit all the info");
      return;
    }

    props.onAddPlace(data);
  };

  return (
    <>
      <Paper
        elevation={4}
        mt={"9"}
        sx={{
          p: 2,
          margin: "auto",
          marginTop: 5,
          maxWidth: 800,
          flexGrow: 1,
          height: 630,
        }}
      >
        <Divider sx={{ marginBottom: 3 }}>
          <Typography variant={"h4"} component="h3">
            Add a new Place
          </Typography>
        </Divider>

        <FilledTextField
          title="Place"
          label="Write the name of the place you visited!"
          type="text"
          value={data.title}
          onchange={(e) => {
            setData({ ...data, title: e.target.value });
          }}
        />
        <Divider sx={{ marginX: 1.5, width: 0.8, marginX: "auto" }} />
        <FilledTextField
          title="Image"
          label="Put down a link of the place!"
          type="text"
          value={data.image}
          onchange={(e) => {
            setData({ ...data, image: e.target.value });
          }}
        />
        <Divider sx={{ marginX: 1.5, width: 0.8, marginX: "auto" }} />
        <FilledTextField
          title="Description"
          label="Describe the experience briefly "
          type="textArea"
          value={data.description}
          onchange={(e) => {
            setData({ ...data, description: e.target.value });
          }}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <DateField
            title="Date of Visit"
            value={data.date}
            onchange={(e) => {
              setData({ ...data, date: e.target.value });
            }}
          />
          <Box sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              size="large"
              sx={{ paddingX: 15, paddingY: 2.2, color: "primary" }}
              onClick={submitHandler}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default NewPlaceForm;

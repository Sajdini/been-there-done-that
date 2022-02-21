import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
const ImageField = (props) => {
  return (
    <>
      <Box sx={{ width: 0.4, height: 116.02 }}>
        <Typography variant="h5">{props.title}</Typography>
        <label
          htmlFor="upload-photo"
          placeholder={props.value}
          sx={{ height: 1 }}
        >
          <input
            style={{ display: "none" }}
            accept="image/*"
            id="upload-photo"
            name="upload-photo"
            type="file"
            width={1}
            height={1}
            value={props.value}
            onChange={props.onchange}
          />

          <Button
            color="primary"
            variant="contained"
            component="span"
            sx={{ width: 1, height: 60 }}
          >
            {props.btnText}
          </Button>
        </label>
      </Box>
    </>
  );
};

export default ImageField;

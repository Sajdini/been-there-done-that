import React from "react";
import { Typography, Box, TextField } from "@mui/material";

const DateField = (props) => {
  return (
    <>
      <Box sx={{ width: 0.4, height: 116.016 }}>
        <Typography variant="h5">{props.title}</Typography>
        <label htmlFor="date" />
        <TextField
          variant={"filled"}
          fullWidth
          height={1}
          InputProps={{
            disableUnderline: true,
          }}
          label={props.label}
          placeholder={""}
          value={props.value}
          type="date"
          height={60}
          onChange={props.onchange}
        />
      </Box>
    </>
  );
};

export default DateField;

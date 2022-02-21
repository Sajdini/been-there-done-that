import { Box } from "@mui/system";
import { TextField, Typography } from "@mui/material";

const FilledTextField = (props) => {
  return (
    <>
      <Box
        sx={{
          marginBottom: 4,
        }}
      >
        <Typography variant="h5">{props.title}</Typography>
        <TextField
          variant={"filled"}
          fullWidth
          multiline
          InputProps={{
            disableUnderline: true,
          }}
          label={props.label}
          placeholder={""}
          value={props.value}
          type={props.type}
          onChange={props.onchange}
        />
      </Box>
    </>
  );
};

export default FilledTextField;

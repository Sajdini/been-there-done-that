import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { cyan } from "@mui/material/colors";
import { teal } from "@mui/material/colors";
// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: cyan[800],
    },
    secondary: {
      main: teal[900],
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;

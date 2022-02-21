import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
export default function ButtonAppBar(props) {
  const router = useRouter();

  const navigateHome = (e) => {
    e.preventDefault();
    router.push("/");
  };

  const navigatePlaces = (e) => {
    e.preventDefault();
    router.push("/new-place");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Box mx={12} py={2}>
          <Toolbar>
            <Typography variant="h5" component="h4" sx={{ flexGrow: 1 }}>
              Been there done that <LocationOnSharpIcon />
            </Typography>
            <Button color="inherit" onClick={navigateHome}>
              <Typography variant="h6" component="h5">
                Home
              </Typography>
            </Button>
            <Button color="inherit" onClick={navigatePlaces}>
              <Typography variant="h6" component="h5">
                Add New Place
              </Typography>
            </Button>
          </Toolbar>
        </Box>
      </AppBar>
    </Box>
  );
}

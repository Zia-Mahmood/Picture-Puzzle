import "./App.css";
import { styled, useTheme } from "@mui/material/styles";
import Header from "./components/Header";
import PictureDrawer from "./components/PictureDrawer";
import PuzzleBoard from "./components/PuzzleBoard";
import {
  Container,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  Divider,
} from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

function importAll(r) {
  let images = [];
  r.keys().forEach((item, index) => {
    images[index] = r(item);
  });
  return images;
}

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const drawerWidth = "20%";

function App() {
  const images = importAll(
    require.context("./assets", false, /\.(png|jpe?g|svg)$/)
  );
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column",backgroundColor:"#fcd3cf",height:"150%"}}>
      <Header open={open} handleDrawerOpen={handleDrawerOpen} />
      <PictureDrawer
        open={open}
        handleDrawerClose={handleDrawerClose}
        images={images}
      />
      <PuzzleBoard images={images} open={open}/>
    </Box>
  );
}

export default App;

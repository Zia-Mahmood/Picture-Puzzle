import "./App.css";
import Header from "./components/Header";
import PictureDrawer from "./components/PictureDrawer";
import PuzzleBoard from "./components/PuzzleBoard";
import {
  Box,
} from "@mui/material/";
import { useState } from "react";

function importAll(r) {
  let images = [];
  r.keys().forEach((item, index) => {
    images[index] = r(item);
  });
  return images;
}

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

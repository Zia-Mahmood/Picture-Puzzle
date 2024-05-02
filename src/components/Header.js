import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header({handleDrawerOpen,open}) {
  return (
    <AppBar>
      <Toolbar
        sx={{
          backgroundColor: "#f44d3e",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          anchor="left"
          sx={{ mr: 2, ...(open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
        {open && <div></div>}
        <Typography
          variant="h4"
          sx={{ color: "white", fontFamily: "Satisfy, cursive" }}
        >
          Picture Puzzle
        </Typography>
        <div></div>
      </Toolbar>
    </AppBar>
  );
}

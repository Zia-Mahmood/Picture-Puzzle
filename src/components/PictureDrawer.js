import { Divider, Drawer, ImageList, ImageListItem, IconButton } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const drawerWidth = "20%";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",backgroundColor: "#f44d3e",
}));

export default function PictureDrawer({ images, open, handleDrawerClose }) {
  const theme = useTheme();

  return (
    <Drawer
      sx={{
        width: {xs:"40%",sm:drawerWidth},
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: {xs:"40%",sm:drawerWidth},
          boxSizing: "border-box",
        },
        
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon sx={{color:"#fff"}}/>
          ) : (
            <ChevronRightIcon sx={{color:"#fff"}}/>
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <ImageList
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            alignItems: "center",backgroundColor:"#fcd3cf",
            mt: "0px",
            mb: "0px",
            pb:"20px"
          }}
        >
          {images.map((img, index) => {
            return (
              <ImageListItem key={img} style={{ width: "90%", height: "auto",marginTop:'5px' }}>
                <img
                  key={index}
                  src={img}
                  alt = {img.title}
                  style={{ width: "98%", height: "auto" }}
                />
              </ImageListItem>
            );
          })}
        </ImageList>
        <div style={{alignSelf:"auto",backgroundColor:"red"}}></div>
    </Drawer>
    
  );
}

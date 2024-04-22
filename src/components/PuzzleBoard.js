import {
  Box,
  Card,
  CardContent,
  Stack,
  Button,
} from "@mui/material/";
import ShuffleOnIcon from "@mui/icons-material/ShuffleOn";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import { useEffect, useRef, useState } from "react";
import getInstance from "../support_functions/GenerateInstance";
import PuzzleGrid from "./PuzzleGrid";

let originalarray = [];
let emptyPiece;

export default function PuzzleBoard({ images, open }) {
  const width = open ? "80%" : "100%";
  const canvasRef = useRef();
  const [pieces, setPieces] = useState();
  const [shuffled,setShuffled] = useState(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const imageObj = new Image();

    imageObj.onload = () => {
      const { width, height } = imageObj;
      canvas.width = width;
      canvas.height = height;
      const cellWidth = width / 3;
      const cellHeight = height / 3;
      const images = [];

      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
          context.clearRect(0, 0, canvas.width, canvas.height);
          const sx = col * cellWidth;
          const sy = row * cellHeight;
          const sw = cellWidth;
          const sh = cellHeight;
          const dw = width;
          const dh = height;

          context.drawImage(imageObj, sx, sy, sw, sh, 0, 0, dw, dh);
          const imageDataurl = canvas.toDataURL();
          const index = row * 3 + col;
          images.push({ imageDataurl, index });
          originalarray.push(index);
        }
      }

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(imageObj, 0, 0, 0, 0, 0, 0, 0, 0);
      const imageDataurl = canvas.toDataURL();
      emptyPiece = { imageDataurl, index: 0 };

      setPieces(images);
    };
    imageObj.src = images[0];
  }, [images]);

  function shufflePieces() {
    let shuffleArray = getInstance(9);
    setPieces((prev) => {
      const temp = [];
      shuffleArray.forEach((num) => {
        temp.push(prev[num]);
      });
      return temp;
    });
    setShuffled(0.2);
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: `${width}`,
        height: "100%",
        alignSelf: "flex-end",
      }}
    >
      <Card
        variant="outlined"
        sx={{
          mt: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#55e9f5",
          pb: "10px",
        }}
      >
        <CardContent
          className="myCardContent"
          sx={{
            width: "720px",
            height: "720px",
          }}
        >
          <Box
            style={{
              zIndex: 2,
              position: "absolute",
              width: "inherit",
              height: "inherit",
              objectFit: "fill",
              backgroundColor: "white",
            }}
          >
            <img
              src={images[0]}
              alt="puzzle not loaded"
              style={{
                opacity: `${shuffled}`,
                width: "inherit",
                height: "inherit",
                objectFit: "fill",
              }}
            />
          </Box>

          {shuffled===0.2 &&<PuzzleGrid pieces={pieces} emptyPiece={emptyPiece} setPieces={setPieces} setShuffled={setShuffled}/>}
        </CardContent>
        <canvas
          ref={canvasRef}
          style={{ display: "none", width: "720px", height: "720px" }}
        />
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#f44d3e",
              ":hover": { backgroundColor: "#b155f5" },
            }}
            startIcon={<ShuffleOnIcon />}
            onClick={shufflePieces}
          >
            Shuffle
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#f44d3e",
              ":hover": { backgroundColor: "#b155f5" },
            }}
            endIcon={<TipsAndUpdatesIcon />}
          >
            Solution Steps
          </Button>
        </Stack>
      </Card>
    </Box>
  );
}

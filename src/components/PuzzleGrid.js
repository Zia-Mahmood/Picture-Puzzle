import {
    Grid,
    Button,
  } from "@mui/material/";
import { useEffect } from "react";



export default function PuzzleGrid({pieces,emptyPiece,setPieces,setShuffled}){

    useEffect(()=>{
        console.log("from use effect",pieces)
    },[pieces]);

    function findEmptyPiece(piece){
        return piece.index === emptyPiece.index;
    }

    function isSwapable(a,b){
        const r1 = Math.floor(a/3);
        const c1 = a%3;
        const r2 = Math.floor(b/3);
        const c2 = b%3;
        const rowDiff = Math.abs(r1-r2);
        const colDiff = Math.abs(c1-c2);
        return ((rowDiff===1 && colDiff===0) || (rowDiff===0 && colDiff===1));
    }

    function gamefinished(){
        let ans = true;
        pieces.forEach((piece,index)=>{
            if(piece.index!==index){
                ans = false;
            }
        });
        console.log("ans finished",ans)
        return ans;
    }

    function handleClick(index){
        const emptyPieceIndex = pieces.findIndex(findEmptyPiece);
        if(isSwapable(emptyPieceIndex,index)){
            console.log(index,pieces,emptyPiece.index===pieces[8].index);
            setPieces((prev)=>{
                const temp = [...prev];
                [temp[emptyPieceIndex],temp[index]]=[temp[index],temp[emptyPieceIndex]];
                return [...temp];
            });
            console.log(pieces)
            if(gamefinished()){
                setShuffled(1);
            }
        }
        else{
            console.log("else",index);
        }


    }


    return (<Grid container spacing={0} sx={{ mt: "0px" }}>
    {pieces &&
      pieces.map((piece, index) => (
        <Grid
          key={index}
          item
          xs={4}
          sx={{ height: "240px", width: "240px" }}
        >
          <img
            src={
              piece.index === 0
                ? emptyPiece.imageDataurl
                : piece.imageDataurl
            }
            alt="puzzle not loaded"
            style={{
              zIndex: 3,
              position: "absolute",
              width: "inherit",
              height: "inherit",
              border: "1px solid black",
              objectFit: "fill",
            }}
          />
          <Button
            key={index}
            onClick={()=>handleClick(index)}
            style={{
              width: "240px",
              height: "240px",
              border:"none",
              zIndex:12
            }}
          />
        </Grid>
      ))}
  </Grid>);
}
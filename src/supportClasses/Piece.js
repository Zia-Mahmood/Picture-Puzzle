let picture = null;
let canvas = null;
let contet = null;
let pieces = [];


function main(){
    
}



function initializePieces(){
    pieces = [];
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            pieces.push(new Piece(i,j));
        }
    }
}



class Piece{

    constructor(rowIndex,colIndex){
        this.rowIndex = rowIndex;
        this.colIndex = colIndex;
    }

    draw(context){
        context.beginPath();
        context.rect
    }
}
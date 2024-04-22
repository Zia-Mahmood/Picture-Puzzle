import isSolvable from "./CheckInstanceSolvable";

function shuffle(array) {
    let currentIndex = array.length;
    while (currentIndex !== 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }
  

  function getInstance(n){
    let arr = Array.from({length: n}, (_,index) => index);
    shuffle(arr);
    while(!isSolvable(arr)){
      shuffle(arr);
      console.log(arr);
    }
    console.log("final array is "+arr);
    return arr;
  }

  export default getInstance;
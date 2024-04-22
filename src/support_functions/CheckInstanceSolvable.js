function getInvCount(arr,n)
{
	let inv_count = 0 ;
	for(let i=0;i<n-1;i++){
		for(let j=i+1;j<n;j++){
		
			// Value 0 is used for empty space 
			if (arr[j][i] > 0 && arr[j][i] > arr[i][j])
        {console.log(arr[i][j],arr[j][i]);
				inv_count += 1;}
		}
	}
	return inv_count;
}

function isSolvable(arr,n){
  const array = [];
  let itr = Math.sqrt(n);
  for(let i=0;i<itr;i++){
    const ele = [];
    for(let j=0;j<itr;j++){
      ele.push(arr[i*itr + j]);
    }
    array.push(ele);
  }
  let ans = getInvCount(array,itr);
  console.log(ans,ans%2===0,array,n);
  return ans%2===0;
}

export default isSolvable;

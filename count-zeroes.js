function countZeroes(arr, left=0, right=arr.length-1) { 
    if(arr[right] === 1) return 0; 
    if(arr[left] === 0) return arr.length;

    let mid = Math.floor(left + right) / 2;
 
  if(arr[mid] === 0 && arr[mid-1] === 1) return arr.length - mid;
  if(arr[mid] === 0 && arr[mid-1] === 0) return countZeroes(arr, left, right=mid-1);
  if(arr[mid] === 1 && arr[mid+1] === 0) return arr.length - (mid+1);
  
  return countZeroes(arr, left=mid+1, right);
}


// function countZeroes(arr) {
//   let leftIdx = 0;
//   let rightIdx = arr.length -1;
//   let middleIdx = Math.floor(leftIdx + rightIdx) / 2;


//   if(arr[rightIdx] === 1) {
//       return 0;
//   }
//   if(arr[leftIdx] === 0) {
//      return arr.length;
//   }

//   while(leftIdx <= rightIdx) {
//     if(arr[middleIdx] === 0) {
//         rightIdx = middleIdx - 1;
//         if(arr[rightIdx] === 1) {
//             return arr.length - middleIdx;
//         }
//         middleIdx = Math.floor((leftIdx + rightIdx) / 2);
//     } else if (arr[middleIdx] === 1) {
//         leftIdx = middleIdx + 1;
//         if(arr[leftIdx] === 0) {
//             return arr.length - leftIdx;
//         }
//         middleIdx = Math.floor((leftIdx + rightIdx) / 2);
//     }
//   }
//   return 0;
// }


module.exports = countZeroes;
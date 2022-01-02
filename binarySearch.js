// function binarySearch(arr, value) {
//     let leftIdx = 0;
//     let rightIdx = arr.length - 1;
//     let middleIdx = Math.floor(left + rightIdx / 2);

//     while(leftIdx <= rightIdx) {
//         if(arr[middleIdx] > value) {
//             rightIdx = middleIdx - 1;
//             middleIdx = Math.floor(leftIdx + rightIdx / 2);
//         } else if(arr[middleIdx] < value) {
//             leftIdx = middleIdx + 1;
//             middleIdx = Math.floor(leftIdx + rightIdx / 2);
//         } else {
//             return middleIdx;
//         }
//     }
//     return -1;

// }

function binarySearch(arr, val, left=0, right=arr.length) { 
    if(left > right) return -1;

    let mid = Math.floor((left + right)/2);

    if(arr[mid] === val) return mid;
    if(arr[mid] > val) return binarySearch(arr, val, left, right=mid-1);
    if(arr[mid] < val) return binarySearch(arr, val, left=mid+1, right);
}


// module.exports = binarySearchRecursion;
module.exports = binarySearch;
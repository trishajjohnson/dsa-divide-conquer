function findRotationCount(arr, low=0, high=arr.length-1) {
    if(low > high) return 0;
    
    const mid = Math.floor((low+high)/2);

    if(arr[mid-1] > arr[mid]) return mid;
    if(arr[0] > arr[mid]) return findRotationCount(arr, low, high=mid-1);
    if(arr[0] < arr[mid]) return findRotationCount(arr, low=mid+1, high);
}


module.exports = findRotationCount
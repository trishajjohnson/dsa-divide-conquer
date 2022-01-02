function findFloor(arr, val, low=0, high=arr.length-1) {
    if(low > high) return -1;
    if(arr[0] <= val && arr[1] >= val) return arr[0];
    if(arr[arr.length-1] <= val) return arr[arr.length-1];
    
    let mid = Math.floor( (low + high) / 2 );

    if(arr[mid] === val) return arr[mid];
    if(arr[mid] > val && arr[mid-1] <= val) return arr[mid-1];
    if(arr[mid] <= val && arr[mid+1] >= val) return arr[mid];
    if(arr[mid] < val) return findFloor(arr, val, low=mid+1, high);
    if(arr[mid] > val) return findFloor(arr, val, low, high=mid-1);
}

module.exports = findFloor
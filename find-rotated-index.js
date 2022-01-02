function findRotatedIndex(arr, val, low=0, high=arr.length-1) {
    const first = findFirst(arr);

    if(val > arr[first] && arr[arr.length-1] > val) return findValIdx(arr, val, low=first, high=arr.length-1);
    if(val > arr[first] && arr[arr.length-1] < val) return findValIdx(arr, val, low=0, high=first-1);

}

function findFirst(arr, low=0, high=arr.length-1) {
    const mid = Math.floor((low+high)/2);

    if(arr[mid-1] > arr[mid]) return mid;
    if(arr[0] > arr[mid]) return findFirst(arr, low, high=mid-1);
    if(arr[0] < arr[mid]) return findFirst(arr, low=mid+1, high);
}

function findValIdx(arr, val, low=0, high=arr.length-1) {
    if(low > high) return -1;
    
    const mid = Math.floor((low+high)/2);

    if(arr[mid] === val) return mid;
    if(arr[mid] > val) return findValIdx(arr, val, low, high=mid-1);
    if(arr[mid] < val) return findValIdx(arr, val, low=mid+1, high);
}

module.exports = findRotatedIndex
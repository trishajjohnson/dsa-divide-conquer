function sortedFrequency(arr, val) {
    console.log("first", findFirst(arr, val))
    console.log("last", findLast(arr, val))
    if(findFirst(arr, val) === -1) return -1;
    
    return (findLast(arr, val) - findFirst(arr, val)) + 1;
}

function findFirst(arr, val, left=0, right=arr.length-1) {
    if(left > right) return -1;
    if(arr[0] === val) return 0;

    let mid = Math.floor((left + right) / 2);

    if(arr[mid] === val && arr[mid-1] !== val) return mid;
    if(arr[mid] === val && arr[mid-1] === val) return findFirst(arr, val, left, right=mid-1);
    if(arr[mid] > val) return findFirst(arr, val, left, right=mid-1);
    if(arr[mid] < val) return findFirst(arr, val, left=mid+1, right);
}

function findLast(arr, val, left=0, right=arr.length-1) {
    if(left > right) return -1;
    if(arr[arr.length-1] === val) return arr.length-1;

    let mid = Math.floor((left + right) / 2);

    if(arr[mid] === val && arr[mid+1] !== val) return mid;
    if(arr[mid] === val && arr[mid+1] === val) return findLast(arr, val, left=mid+1, right);
    if(arr[mid] > val) return findLast(arr, val, left, right=mid-1);
    if(arr[mid] < val) return findLast(arr, val, left=mid+1, right);
}


function sortedFrequency1(arr, val) {
    let firstIdx = null;
    let lastIdx = null;

    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor( (left + right) / 2 );

    // Find first idx of val
    
    while (!firstIdx && left <= right) {
        if(arr[middle] === val) {
            right = middle - 1;
            if(arr[right] === val) {
                middle = Math.floor( (left + right) / 2);
                if (middle === 0) {
                    firstIdx = middle;
                }
            } else if (arr[right] < val) {
                firstIdx = middle;
            }
        } else if (arr[middle] < val) {
            left = middle + 1;
            if (arr[left] === val) {
                firstIdx = left;
            } else if (arr[left] > val) {
                return -1;
            } else {
                middle = Math.floor( (left + right) / 2 );
            }
        } else if (arr[middle] > val) {
            right = middle - 1;
            middle = Math.floor( (left + right) / 2 );
        }
    }
    
    if(firstIdx === null) return -1;
    // return firstIdx;
    left = firstIdx;
    right = arr.length - 1;
    middle = Math.floor( (left + right) / 2 );

    // Find last index of val

    // while (!lastIdx && left <= right) {
    //     if(arr[middle] === val) {
    //         right = middle - 1;
    //         if(arr[right] === val) {
    //             middle = Math.floor( (left + right) / 2);
    //             if (middle === 0) {
    //                 firstIdx = middle;
    //             }
    //         } else if (arr[right] < val) {
    //             firstIdx = middle;
    //         }
    //     } else if (arr[middle] < val) {
    //         left = middle + 1;
    //         if (arr[left] === val) {
    //             firstIdx = left;
    //         } else if (arr[left] > val) {
    //             return -1;
    //         } else {
    //             middle = Math.floor( (left + right) / 2 );
    //         }
    //     } else if (arr[middle] > val) {
    //         right = middle - 1;
    //         middle = Math.floor( (left + right) / 2 );
    //     }
    // }
    
    while (!lastIdx && left <= right) {
        if(arr[middle] === val) {
            left = middle + 1;
            if(arr[left] === val) {
                middle = Math.floor( (left + right) / 2);
                if (middle === arr.length - 1) {
                    lastIdx = middle;
                }
            } else if (arr[left] && arr[left] > val) {
                lastIdx = middle;
            } else {
                lastIdx = middle;
            }
        } else if (arr[middle] > val) {
            right = middle - 1;
            if(arr[right] && arr[right] === val) {
                lastIdx = right;
            } else if (arr[right] && arr[right] < val) {
                lastIdx = -1;
            } else {
                middle = Math.floor( (left + right) / 2 );
            }
        } else if (arr[middle] < val) {
            left = middle + 1;
            if(left === arr.length - 1 && arr[left] !== val) lastIdx = -1;
            // middle = Math.floor( (left + right) / 2 );
            // if(middle === arr.length -1 ) lastIdx = middle; 
        }
    }
    
    // if(firstIdx === null) firstIdx = -1;
    // if(lastIdx === null) lastIdx = -1;
    // console.log(lastIdx);
}
    // if (firstIdx === lastIdx) return 1;
    // if (!firstIdx && !lastIdx) return -1;
    // if (!firstIdx && lastIdx || firstIdx && !lastIdx) return 1;

    // return lastIdx - firstIdx + 1;
// }



module.exports = sortedFrequency
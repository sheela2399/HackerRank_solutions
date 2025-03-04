// Binary search is a search algorithm used to find the position of  a target value within a sorted array. It works by repeatedly dividing the search interval in half until the target value is found or the interval is empty. The search interval is halved by comparing the target element with the middle value of the search space.

function binarySearch(array, target) {
    let low = 0;
    let high = array.length - 1;

    while(low<= high){
        let mid = Math.floor((low+high)/2);

        if(array[mid]===target){
            return mid;
        }
        else if(array[mid] < target){
            low = mid + 1;  
            // ignore left part
        }
        else {
            high = mid - 1
            // ignore right part
        }
    }
return -1 ; // Target not found    
}

const array = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 7;


console.log(binarySearch(array, target));
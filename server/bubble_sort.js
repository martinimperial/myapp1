// Optimized javaScript implementation
// of Bubble sort
// An optimized version of Bubble Sort
function bubbleSort(arr, n)
{
	var i, j, temp;
	var swapped;
	for (i = 0; i < n - 1; i++)
	{
		swapped = false;
		for (j = 0; j < n - i - 1; j++)
		{
			if (arr[j] > arr[j + 1])
			{
				// Swap arr[j] and arr[j+1]
				temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				swapped = true;
			}
		}

		// IF no two elements were
		// swapped by inner loop, then break
		if (swapped == false)
		break;
	}
}

// Function to print an array
function printArray(arr, size)
{
var i;
for (i = 0; i < size; i++)
	console.log(arr[i] + " ");
}

function binarySearch(arr, x)
{
    let l = 0;
    let r = arr.length - 1;
    let mid;
    while (r >= 1)
    {
        mid = l + Math.floor((r - l) / 2);
        if (arr[mid] === x)
            return mid;

        if (arr[mid] > x)
            r = mid - 1;

        else
            l = mid + 1;
    }
    return -1;
}

// Driver program
//var arr = [ 64, 34, 25, 12, 22, 11, 90 ];
var arr = [56, 72, 8, 12, 16, 38, 2, 91, 3, 6 ];
var n = arr.length;
bubbleSort(arr, n);
console.log("Sorted array: ");
printArray(arr, n);

let x = 38;

let result = binarySearch(arr, x);
(result === -1) ? console.log("Element is not present in array")
               : console.log("Element is present at index " + result);



// This code is contributed shivanisinghss2110

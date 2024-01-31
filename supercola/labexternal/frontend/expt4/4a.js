// 4, a.Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity)
function removeDuplicatesIgnoreCase(arr) {
    // Create a set to store unique lowercase versions of array elements
    const uniqueSet = new Set();

    // Filter the array to remove duplicates (ignore case)
    const uniqueArray = arr.filter(item => {
        const lowercaseItem = item.toLowerCase(); // Convert to lowercase
        if (!uniqueSet.has(lowercaseItem)) {
            uniqueSet.add(lowercaseItem);
            return true;
        }
        return false;
    });

    return uniqueArray;
}

// Example usage:
const inputArray = ["apple", "Orange", "banana", "orange", "APPLE"];
const resultArray = removeDuplicatesIgnoreCase(inputArray);
console.log(resultArray);

// 5,a.Write a JavaScript program to find the most frequent item of an array
function findMostFrequentItem(arr) {
    // Create an object to store the frequency of each element
    const frequencyMap = {};

    // Iterate through the array and count the frequency of each element
    arr.forEach(item => {
        frequencyMap[item] = (frequencyMap[item] || 0) + 1;
    });

    // Find the element with the maximum frequency
    let mostFrequentItem;
    let maxFrequency = 0;

    for (const key in frequencyMap) {
        if (frequencyMap[key] > maxFrequency) {
            mostFrequentItem = key;
            maxFrequency = frequencyMap[key];
        }
    }

    return mostFrequentItem;
}

// Example usage:
const array = [1, 2, 3, 2, 2, 4, 5, 2, 6];
const mostFrequent = findMostFrequentItem(array);

console.log(`Most frequent item: ${mostFrequent}`);

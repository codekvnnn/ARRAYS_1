// 1) Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!

function insertAtBeginning(array, value) {
    const newArray = [value];

    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i]);
    }
    return newArray;
}
const originalArray = [2, 3, 4, 5];
const additionalValue = 1;

const modifiedArray = insertAtBeginning(originalArray, additionalValue);
console.log(modifiedArray);

// Output: [1, 2, 3, 4, 5]

// 2) Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!

function removeAndReturnFirstElement(array) {
    if (array.length === 0) {
        return undefined; // Return undefined if the array is empty
    }

    const removedValue = array[0];
    const newArray = [];
    for (let i = 1; i < array.length; i++) {
        newArray.push(array[i]);

        for (let i = 0; i < newArray.length; i++) {
            array[i] = newArray[i];
        }

        array.length = newArray.length;

        return removedValue;
    }

    // Example usage:
    const myArray = [1, 2, 3, 4, 5];
    const removedValue = removeAndReturnFirstElement(myArray);

    console.log("Removed value:", removedValue);
    console.log("Modified array:", myArray);
}

// 3) Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!

function insertAt(array, index, value) {
    const newArray = [];

    for (let i = 0; i < index; i++) {
        newArray.push(array[i]);
    }

    newArray.push(value);

    for (let i = index; i < array.length; i++) {
        newArray.push(array[i]);
    }

    // Assign the new array back to the original array
    for (let i = 0; i < newArray.length; i++) {
        array[i] = newArray[i];
    }

    array.length = newArray.length;
}

// Example usage:
const myArray = [1, 2, 3, 4, 5];
const index = 2;
const additionalValue = 10;

insertAt(myArray, index, additionalValue);

console.log(myArray);

// Output: [1, 2, 10, 3, 4, 5]

// BONUS 4) Given an array and an index into array, remove and return the array value at that index. Prove the value is removed from the array by printing it. Think of popFront(arr) as equivalent to removeAt(arr,0).

function removeAt(array, index) {
    if (index < 0 || index >= array.length) {
        return undefined; 
    }

    const removedValue = array[index]; 

    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (i !== index) {
            newArray.push(array[i]); 
        }
    }

    for (let i = 0; i < newArray.length; i++) {
        array[i] = newArray[i]; 
    }

    array.length = newArray.length; 

    return removedValue;
}

// Example usage:
const myArray = [1, 2, 3, 4, 5];
const indexToRemove = 0;

const removedValue = removeAt(myArray, indexToRemove);
console.log("Removed value:", removedValue);
console.log("Modified array:", myArray);
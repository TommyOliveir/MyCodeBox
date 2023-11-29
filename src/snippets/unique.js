function removeDupesFromArray(arr) {
const unique = new Set(arr)
//   return [...new Set(arr)];
return [...unique]
}

console.log(removeDupesFromArray([1, 2, 2, 4, 4, 4, 4, 6, 7, 8]));

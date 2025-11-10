// Generating Huge Data
const generateSimData = (size) => {
  const dummyData = [
    "apple",
    "banana",
    "mango",
    "orange",
    "grape",
    "pineapple",
    "strawberry",
    "kiwi",
    "watermelon",
    "papaya",
  ];

  const generatedVastData = [];
  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * dummyData.length);
    generatedVastData.push(dummyData[randomIndex]);
  }

  return generatedVastData;
};
const hugeDataSet = generateSimData(500000);
// console.log(hugeDataSet);





// BRUTE FORCE(Manual Duplicates Removal)
const arrStartTime = performance.now();
const removeDupWithArr = (arr) => {
  const newArrWODuplicates = [];

  arr.forEach((element) => {           //For this part -> O(n) -> Since forEach iterates over whole array
    if (!newArrWODuplicates.includes(element)) {    //For this part -> also O(n) -> Since includes/find iterates over whole array one by one
      newArrWODuplicates.push(element);
    }                                               //So THE WHOLE THING IS O(n2) -> O(n) * O(n) -> O(n2)
  }); 

  return newArrWODuplicates;
};
const finalArrayWODuplicates = removeDupWithArr(hugeDataSet);
const arrEndTime = performance.now();
console.log("Total Time took with Array->", arrEndTime - arrStartTime, "ms");






// Removing Duplicates With Sets
const setStartTime = performance.now();
const removeDupWithSet = (arr) => {
  const newSetWODuplicates = new Set(arr);   //For this part -> O(n) -> It will check by hashTable/hashMap if its duplicate or no over whole array

  return Array.from(newSetWODuplicates);    // O(1)
};
const finalArrayWODuplicates2 = removeDupWithSet(hugeDataSet);
const setEndTime = performance.now();
console.log("Total Time took with Set->", setEndTime - setStartTime, "ms");





// SO THE DUPLICATION REMOVAL IS MUCH FASTER WHILE DOING WITH SETS!! AS IT'S TIME COMPLEXITY(BIG O) IS->O(n) ; WHEREAS WITH ARRAY IT WAS->O(n2)
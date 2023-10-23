const empty33Array = new Array(33);
const arrayOne = [1,2,3,4];
const arrayTwo = [...arrayOne, 5];

console.log(arrayOne);
console.log(arrayTwo);
const arrayThree = arrayTwo.map((number)=>{
  return number * 9
});
console.log(arrayThree);

console.log('Hello World!');
const nameUser = 'Paris';
const lastName = 'Ramírez Saldaña';

let valueGiven = 999;
valueGiven = 666;

console.log(`${nameUser} ${lastName} ${valueGiven}`);

if(true) {
  //Scope, same variable name, overwritten
  console.log(`Scope before: ${valueGiven}`); //Error, cannot acces before initialization ONLY if the line below is active
  //const valueGiven = 888;
  console.log(`Scope after: ${valueGiven}`);
}

valueGiven = 777;

if(true){
  //Scope, same variable name, overwritten
  //console.log(`Scope before: ${valueGiven}`); //Error, cannot acces before initialization ONLY if the line below is active
  const valueGiven = 888;
  console.log(`Scope after: ${valueGiven}`);
}

console.log(`Out of scope: ${valueGiven}`);

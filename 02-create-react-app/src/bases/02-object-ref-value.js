const person = {
  namePerson: 'Alfredo',
  lastName: 'Sánchez',
  age: 33,
  data: {
    city: 'Mexico City',
  }
}

console.log('----------------------Person Data----------------------')
console.table( person );
console.log( person );

const refPerson = person;
refPerson.namePerson = "Paris";
console.log('----------------------Person Ref----------------------')
console.log( refPerson );
console.log( person );

const copyPerson = { ...person };
copyPerson.namePerson = "Alberto";
console.log('----------------------Person Copy----------------------')
console.log( copyPerson );
console.log( person );

const copyPerson2 = { ...person, namePerson: "José" };
console.log('----------------------Person Copy V2----------------------')
console.log( copyPerson2 );
console.log( person );

const person = {
  namePerson: 'Gio',
  age: 22,
  key: 1234410,
  latLong: {
    lat: 12,
    long: 11,
  }
}

const personCopy = { ...person, namePerson: `Dio`, age: 69 }

const {namePerson} = person;
const {namePerson: namePersonAlias} = person;
const {age, key} = person;

console.log(namePerson);
console.log(namePersonAlias);
console.log(age);
console.log(key);

const getPerson = function (personArg){
  console.log(personArg);
}
const getPersonDest = function ({ namePerson: pName, age: pAge = 33, key, range = `Captain`}){
  console.log(
    `Name: ${pName}
  Age: ${pAge}
  Key: ${key}
  Range: ${range}`
  );
}

console.log('---------Post change different subobjects---------');
personCopy.latLong = { ...personCopy.latLong }
personCopy.latLong.lat = 33;//Only Copy modified, otherwise without the line up, both "lat" show the same change "14"
getPerson(person);
getPerson(personCopy);
console.log(`------------------------People------------------------`);
getPerson(person);
getPerson(personCopy);
console.log(`--------------------People DE-STRUCTURATE--------------------`);
getPersonDest(person);
getPersonDest(personCopy);
console.log(`--------------------Use Context--------------------`);
const useContext = ({ namePerson: pName = '', age: pAge = '' }) => {
  return {
    pName,
    pAge,
  }
}
const superP = { ...person, namePerson: 'ManBat' };
const {pName: spName, pAge: spAge } = useContext(superP);
console.log(spName, spAge);
const { latLong: { lat, long }} = person;
console.log(lat, long);

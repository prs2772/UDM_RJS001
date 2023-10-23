const arrExample = ['One', 'Two', 'Three', 'Four'];
const [ elem1 ] = arrExample;
console.log(elem1);
const [ , elem2] = arrExample;
console.log(elem2);

const getArray = () => {
  return ['Hi', 'How are you?'];
}

const [arrEl1, arrEl2] = getArray(); 
console.log(arrEl1, arrEl2);

const useState = (val) => {
  return [val, () => console.log(`Hello World!`)];
}

const arr = useState('SRP');

arr[1];//Not function executed
arr[1]();

const [nombre, setNombre] = useState('Tonio');

console.log(nombre);
setNombre();

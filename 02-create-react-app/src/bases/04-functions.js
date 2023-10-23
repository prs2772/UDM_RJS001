const greet = function(nme){
  return `Hi ${nme}`;
}

const greetArrowFunc = (nme) => {
  return `Hi ${nme}`;
}

const greetArrowFuncOne = (nme) => `Hi ${nme}`;

console.log(`Hi: ${greet('Star Platinum')}`);
console.log(`Hi: ${greetArrowFunc('Estrella platinada')}`);
console.log(`Hi: ${greetArrowFuncOne('Jimmy Neutro')}`);

const getUser = () => ({
  uid: 'er24ediIAu',
  username: 'Charlie123',
});

console.log(getUser());

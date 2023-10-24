const message  = [1,2,3,4,5,6,7,8,,10];
const newMessage = {
  "eichOne": "H1",
  "eichTwo": "H2",
}

const App = () => {
  return(
    <>
      <h1>Node!</h1>
      <p>{message}</p>
      <p>{JSON.stringify(newMessage)}</p>
    </>
  );
}

export { App };

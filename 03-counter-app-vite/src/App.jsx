import PropTypes from 'prop-types';

const message  = [1,2,3,4,5,6,7,8,,10];
const newMessage = {
  "eichOne": "H1",
  "eichTwo": "H2",
}

const App = ({ username, description, age=22 }) => {
  return(
    <>
      <h1>Code!</h1>
      <p>{message}</p>
      <p>{JSON.stringify(newMessage)}</p>
      <p>{`Username: ${username}`}</p>
      <p>{`Description: ${description}`}</p>
      <p>{`Age: ${age}`}</p>
    </>
  );
}

App.propTypes = {
  username: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  age: PropTypes.number,
}
App.defaultPropTypes = {
  age: 23,
}

export { App };

import PropTypes from 'prop-types';

const message  = [1,2,3,4,5,6,7,8,,10];
const newMessage = {
  "eichOne": "H1",
  "eichTwo": "H2",
}

const App = ({ title, subTitle='', age=22 }) => {
  return(
    <>
      <h1 data-testid="test-title">{title}</h1>
      <p>{message}</p>
      <p>{JSON.stringify(newMessage)}</p>
      <p>{`Title: ${title}`}</p>
      <p>{`${subTitle}`}</p>
      <p>{`${subTitle}`}</p>
      <p>{`Age: ${age}`}</p>
    </>
  );
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  age: PropTypes.number,
}
App.defaultPropTypes = {
  age: 23,
}

export { App };

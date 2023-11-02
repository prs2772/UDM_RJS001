import {useState} from 'react'
import PropTypes from 'prop-types';

const CounterApp = ({value=0}) => {
  const buttonsType = ['counter-app-btnAdd', 'counter-app-btnSubstract', 'counter-app-btnReset'];
  const [counter, setCounter] = useState (value);
  //API... Re-render 
  console.log('render');

  const operation = (event, key) => {
    const caso = buttonsType.findIndex(e => e === key);
    setCounter(
      caso === 0 ? counter + 1 : 
        caso === 1 ? counter - 1 : value
    );
    console.log(event);
  }

  return(
    <div className='counter-app'>
      <h1>CounterApp</h1>
      <h2>{`Value: ${counter}`}</h2>
      <div className='counter-app__container-buttons--main'>
        <button key={buttonsType[0]} className='counter-app__button--add' onClick={e => operation(e, buttonsType[0])}>
          +1
        </button>
        <button key={buttonsType[1]} className='counter-app__button--substract' onClick={e => operation(e, buttonsType[1])}>
          -1
        </button>
        <button aria-label="counter-app__button--reset" key={buttonsType[2]} className='counter-app__button--reset' onClick={e => operation(e, buttonsType[2])}>
          Reset
        </button>
      </div>
    </div>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
}

export {CounterApp};

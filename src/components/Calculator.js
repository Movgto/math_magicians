import '../stylesheets/calculator.scss';
import { useState } from 'react';
import calculate from '../logic/calculate';
import Screen from './Screen';

function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });
  return (
    <div id="calculator" data-testid="calculator">
      <Screen total={state.total} next={state.next} />
      <div className="row">
        <button className="button" type="button" onClick={() => setState(calculate(state, 'AC'))}>AC</button>
        <button className="button" type="button" onClick={() => setState(calculate(state, '+/-'))}>+/-</button>
        <button className="button" type="button" onClick={() => setState(calculate(state, '%'))}>%</button>
        <button className="button operator" type="button" onClick={() => setState(calculate(state, '÷'))}>÷</button>
      </div>
      <div className="row">
        <button className="button" type="button" onClick={() => setState(calculate(state, '7'))}>7</button>
        <button className="button" type="button" onClick={() => setState(calculate(state, '8'))}>8</button>
        <button className="button" type="button" onClick={() => setState(calculate(state, '9'))}>9</button>
        <button className="button operator" type="button" onClick={() => setState(calculate(state, 'x'))}>x</button>
      </div>
      <div className="row">
        <button className="button" type="button" onClick={() => setState(calculate(state, '4'))}>4</button>
        <button className="button" type="button" onClick={() => setState(calculate(state, '5'))}>5</button>
        <button className="button" type="button" onClick={() => setState(calculate(state, '6'))}>6</button>
        <button className="button operator" type="button" onClick={() => setState(calculate(state, '+'))}>+</button>
      </div>
      <div className="row">
        <button className="button" type="button" onClick={() => setState(calculate(state, '1'))}>1</button>
        <button className="button" type="button" onClick={() => setState(calculate(state, '2'))}>2</button>
        <button className="button" type="button" onClick={() => setState(calculate(state, '3'))}>3</button>
        <button className="button operator" type="button" onClick={() => setState(calculate(state, '-'))}>-</button>
      </div>
      <div className="row">
        <button className="button double-width" type="button" onClick={() => setState(calculate(state, '0'))}>0</button>
        <button className="button" type="button" onClick={() => setState(calculate(state, '.'))}>.</button>
        <button className="button" type="button" onClick={() => setState(calculate(state, '='))}>=</button>
      </div>
    </div>
  );
}

export default Calculator;

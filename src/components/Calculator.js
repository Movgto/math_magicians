import PropTypes from 'prop-types';
import Button from './Button';
import '../stylesheets/calculator.scss';

const Calculator = (props) => {
  const { screen } = props;
  return (
    <div id="calculator">
      <div id="screen">{screen}</div>
      <div className="row">
        <Button content="AC" />
        <Button content="+/-" />
        <Button content="%" />
        <Button content="/" operator="true" />
      </div>
      <div className="row">
        <Button content="7" />
        <Button content="8" />
        <Button content="9" />
        <Button content="X" operator="true" />
      </div>
      <div className="row">
        <Button content="4" />
        <Button content="5" />
        <Button content="6" />
        <Button content="+" operator="true" />
      </div>
      <div className="row">
        <Button content="1" />
        <Button content="2" />
        <Button content="3" />
        <Button content="-" operator="true" />
      </div>
      <div className="row">
        <Button content="0" operator="true" double="true" />
        <Button content="." />
        <Button content="=" operator="true" />
      </div>
    </div>
  );
};

Calculator.propTypes = {
  screen: PropTypes.string.isRequired,
};

export default Calculator;

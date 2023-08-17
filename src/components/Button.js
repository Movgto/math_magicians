import PropTypes from 'prop-types';

const Button = (props) => {
  const { content, operator, double } = props;
  let buttonClass = 'button';
  if (operator) {
    buttonClass += ' operator';
  }
  if (double) {
    buttonClass += ' double-width';
  }
  return (
    <button className={buttonClass} type="button">{content}</button>
  );
};

Button.propTypes = {
  content: PropTypes.string.isRequired,
  operator: PropTypes.bool.isRequired,
  double: PropTypes.bool.isRequired,
};

export default Button;

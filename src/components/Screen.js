import PropTypes from 'prop-types';

export default function Screen(props) {
  const { total, next } = props;

  let display = '';

  if (next) {
    display = next;
  } else if (total) {
    display = total;
  } else {
    display = '0';
  }
  return (<div id="screen">{display}</div>);
}

Screen.propTypes = {
  total: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
};

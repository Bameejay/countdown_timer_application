import PropTypes from 'prop-types';

export default function TimerDisplay({ remainingTime }) {
  return (
    <div className='timer_display'>
      <h2>Time Left: <span className='remaining-time'>{remainingTime}</span> seconds</h2>
    </div>
  );
}

TimerDisplay.propTypes = {
  remainingTime: PropTypes.number.isRequired,
};

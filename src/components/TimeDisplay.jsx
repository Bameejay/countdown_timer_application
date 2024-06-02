// src/TimerDisplay.js
import PropTypes from 'prop-types';

export default function TimerDisplay({ remainingTime }) {
  return (
    <div className='timer_display'>
      <h2>Remaining Time: {remainingTime} seconds</h2>
    </div>
  );
}

TimerDisplay.propTypes = {
  remainingTime: PropTypes.number.isRequired,
};

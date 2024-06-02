// src/TimerControls.js
import PropTypes from 'prop-types';

export default function TimerControls({ startTimer, pauseTimer, resetTimer, isRunning, remainingTime }) {
  return (
    <div className='timer_controls'>
      <button className='btn_start' onClick={startTimer} disabled={isRunning || remainingTime === 0}>Start</button>
      <button className='btn_pause' onClick={pauseTimer} disabled={!isRunning}>Pause</button>
      <button className='btn_reset' onClick={resetTimer}>Reset</button>
    </div>
  );
}

TimerControls.propTypes = {
  startTimer: PropTypes.func.isRequired,
  pauseTimer: PropTypes.func.isRequired,
  resetTimer: PropTypes.func.isRequired,
  isRunning: PropTypes.bool.isRequired,
  remainingTime: PropTypes.number.isRequired,
};

import PropTypes from 'prop-types';

export default function TimerControls({ startTimer, pauseTimer, resetTimer, isRunning, remainingTime }) {
  return (
    <div className='timer_controls'>
      {/* <button className='btn_start' onClick={startTimer} disabled={isRunning || remainingTime === 0}>Start</button> */}
      <button className='btn_start' onClick={startTimer} disabled={isRunning || remainingTime === 0}><span className="btn_text">Start</span><i className="btn_icon fas fa-play"></i></button>
      {/* <button className='btn_start' onClick={startTimer} disabled={!isRunning || remainingTime === 0}>
        <span className="btn_text">Start</span>
        <i className="btn_icon fas fa-play"></i>
      </button> */}

      {/* <button className='btn_pause' onClick={pauseTimer} disabled={!isRunning}>Pause</button> */}
      <button className='btn_pause' onClick={pauseTimer} disabled={!isRunning || remainingTime === 0}>
        <span className="btn_text">Pause</span>
        <i className="btn_icon fas fa-pause"></i>
      </button>
      {/* <button className='btn_reset' onClick={resetTimer}>Reset</button> */}
      <button className='btn_reset' onClick={resetTimer}>
          <span className="btn_text">Reset</span>
          <i className="btn_icon fas fa-redo"></i>
    </button>
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

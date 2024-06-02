import PropTypes from 'prop-types';

export default function TimerInput({ setInitialTime, setRemainingTime, isRunning }) {
  const handleInputChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) {
      setInitialTime(value);
      setRemainingTime(value);
    }
  };

  return (
    <div className='timer_input'>
      <label>
        Set Timer in <b>seconds</b>:
        <input type="number" onChange={handleInputChange} disabled={isRunning} />
      </label>
    </div>
  );
}

TimerInput.propTypes = {
  setInitialTime: PropTypes.func.isRequired,
  setRemainingTime: PropTypes.func.isRequired,
  isRunning: PropTypes.bool.isRequired,
};


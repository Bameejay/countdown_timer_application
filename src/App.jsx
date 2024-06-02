import { useState, useRef, useEffect } from 'react';
import TimerInput from '../src/components/TimeInput';
import TimerDisplay from '../src/components/TimeDisplay';
import TimerControls from '../src/components/TimerControls';
import Confetti from 'react-confetti';

export default function App() {
  const [initialTime, setInitialTime] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning && remainingTime > 0) {
      intervalRef.current = setInterval(() => {
        setRemainingTime(prevTime => prevTime - 1);
      }, 1000);
    } else if (remainingTime === 0 && isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
      setShowConfetti(true); 
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning, remainingTime]);

  const startTimer = () => {
    if (remainingTime > 0) {
      setIsRunning(true);
      setShowConfetti(false); 
    }
  };

  const pauseTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const resetTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setRemainingTime(initialTime);
    setShowConfetti(false); 
  };

  return (
    <div className='container'>
      <div>
      <h1>Let the Countdown Begin</h1>
      <TimerInput className="timer-input" setInitialTime={setInitialTime} setRemainingTime={setRemainingTime} isRunning={isRunning} />
      <TimerDisplay remainingTime={remainingTime} />
      <TimerControls startTimer={startTimer} pauseTimer={pauseTimer} resetTimer={resetTimer} isRunning={isRunning} remainingTime={remainingTime} />
      {showConfetti && <Confetti />}
      </div>
    </div>
  );
}

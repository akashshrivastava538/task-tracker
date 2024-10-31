// src/components/TimeTracker.js
import React, { useState, useEffect } from 'react';
import './TimeTracker.css'; // Ensure this CSS file exists

const TimeTracker = ({ taskId }) => {
  const [time, setTime] = useState(0);
  const [isTracking, setIsTracking] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const startTracking = () => {
    setIsTracking(true);
    const id = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    setIntervalId(id);
  };

  const stopTracking = () => {
    setIsTracking(false);
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const resetTracker = () => {
    setTime(0);
    stopTracking();
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  return (
    <div className="time-tracker">
      <p className="time-display">Time: {Math.floor(time / 60)}:{String(time % 60).padStart(2, '0')}</p>
      {isTracking ? (
        <button onClick={stopTracking}>Stop</button>
      ) : (
        <button onClick={startTracking}>Start</button>
      )}
      <button onClick={resetTracker}>Reset</button>
    </div>
  );
};

export default TimeTracker;


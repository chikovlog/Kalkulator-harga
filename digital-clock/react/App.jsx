import React, { useState, useEffect } from 'react';
import './App.css';

const DigitalClockApp = () => {
  const [clocks, setClocks] = useState([]);
  const [cityName, setCityName] = useState('');
  const [timezone, setTimezone] = useState('UTC');

  const timezones = [
    { name: 'UTC', offset: 0, city: 'UTC' },
    { name: 'GMT', offset: 0, city: 'London' },
    { name: 'CET', offset: 1, city: 'Paris' },
    { name: 'EET', offset: 2, city: 'Cairo' },
    { name: 'MSK', offset: 3, city: 'Moscow' },
    { name: 'GST', offset: 4, city: 'Dubai' },
    { name: 'PKT', offset: 5, city: 'Karachi' },
    { name: 'IST', offset: 5.5, city: 'India' },
    { name: 'BDT', offset: 6, city: 'Dhaka' },
    { name: 'ICT', offset: 7, city: 'Bangkok' },
    { name: 'SGT', offset: 8, city: 'Singapore' },
    { name: 'AWST', offset: 8, city: 'Perth' },
    { name: 'JST', offset: 9, city: 'Tokyo' },
    { name: 'AEST', offset: 10, city: 'Sydney' },
    { name: 'NZST', offset: 12, city: 'Auckland' },
    { name: 'EST', offset: -5, city: 'New York' },
    { name: 'CST', offset: -6, city: 'Chicago' },
    { name: 'MST', offset: -7, city: 'Denver' },
    { name: 'PST', offset: -8, city: 'Los Angeles' },
    { name: 'AKST', offset: -9, city: 'Anchorage' },
    { name: 'HST', offset: -10, city: 'Honolulu' },
    { name: 'BRT', offset: -3, city: 'São Paulo' },
    { name: 'ART', offset: -3, city: 'Buenos Aires' },
  ];

  const defaultClocks = [
    { timezone: 'UTC', city: 'UTC' },
    { timezone: 'IST', city: 'India' },
    { timezone: 'JST', city: 'Tokyo' },
    { timezone: 'EST', city: 'New York' }
  ];

  // Load clocks from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('customClocks');
    if (stored) {
      setClocks(JSON.parse(stored));
    } else {
      setClocks(defaultClocks);
      localStorage.setItem('customClocks', JSON.stringify(defaultClocks));
    }
  }, []);

  // Update clocks every second
  useEffect(() => {
    const interval = setInterval(() => {
      setClocks([...clocks]);
    }, 1000);
    return () => clearInterval(interval);
  }, [clocks]);

  const getTimeForTimezone = (offset) => {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    return new Date(utc + (3600000 * offset));
  };

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  const formatDate = (date) => {
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${dayNames[date.getDay()]} ${monthNames[date.getMonth()]} ${date.getDate()}`;
  };

  const addClock = () => {
    if (!cityName.trim()) {
      alert('Please enter a city name');
      return;
    }

    if (clocks.some(c => c.city.toLowerCase() === cityName.toLowerCase())) {
      alert('This city is already added');
      return;
    }

    const newClocks = [...clocks, { timezone, city: cityName }];
    setClocks(newClocks);
    localStorage.setItem('customClocks', JSON.stringify(newClocks));
    setCityName('');
  };

  const removeClock = (index) => {
    const newClocks = clocks.filter((_, i) => i !== index);
    setClocks(newClocks);
    localStorage.setItem('customClocks', JSON.stringify(newClocks));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addClock();
    }
  };

  return (
    <div className="digital-clock-app">
      <div className="container">
        <div className="header">
          <h1>⏰ Multi-Timezone Clock</h1>
          <p>Track time across multiple time zones in real-time</p>
        </div>

        <div className="clocks-grid">
          {clocks.map((clock, index) => {
            const tzInfo = timezones.find(tz => tz.name === clock.timezone);
            const time = getTimeForTimezone(tzInfo.offset);
            const timeString = formatTime(time);
            const period = time.getHours() >= 12 ? 'PM' : 'AM';
            const dateString = formatDate(time);

            return (
              <div key={index} className="clock-card">
                <div className="timezone-name">{clock.city}</div>
                <div className="timezone-code">
                  {clock.timezone} (UTC{tzInfo.offset > 0 ? '+' : ''}{tzInfo.offset})
                </div>
                <div className="digital-time">{timeString}</div>
                <div className="time-period">{period}</div>
                <div className="city-info">{dateString}</div>
                {clocks.length > 1 && (
                  <button
                    className="remove-btn"
                    onClick={() => removeClock(index)}
                  >
                    Remove
                  </button>
                )}
              </div>
            );
          })}
        </div>

        <div className="add-timezone-section">
          <h2>Add New Timezone</h2>
          <div className="timezone-form">
            <input
              type="text"
              placeholder="Enter city name (e.g., Tokyo, New York)"
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <select value={timezone} onChange={(e) => setTimezone(e.target.value)}>
              {timezones.map((tz) => (
                <option key={tz.name} value={tz.name}>
                  {tz.name} (UTC{tz.offset > 0 ? '+' : ''}{tz.offset})
                </option>
              ))}
            </select>
            <button onClick={addClock}>Add Clock</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalClockApp;

import React, { useState } from 'react';

const weekdays = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

function RecurringEventForm() {
  const [startDate, setStartDate] = useState('');
  const [dayOfWeek, setDayOfWeek] = useState('Monday');
  const [occurrences, setOccurrences] = useState(1);
  const [eventDates, setEventDates] = useState([]);

  const generateOccurrences = () => {
    const start = new Date(startDate);
    const dayIndex = weekdays.indexOf(dayOfWeek);
    const dates = [];

    let date = new Date(start);
    // Move to the first desired weekday
    while (date.getDay() !== dayIndex) {
      date.setDate(date.getDate() + 1);
    }

    for (let i = 0; i < occurrences; i++) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 7); // weekly
    }

    setEventDates(dates);
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <label>
        Start Date: <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </label>
      <br /><br />

      <label>
        Recurring Day:
        <select value={dayOfWeek} onChange={(e) => setDayOfWeek(e.target.value)}>
          {weekdays.map(day => (
            <option key={day} value={day}>{day}</option>
          ))}
        </select>
      </label>
      <br /><br />

      <label>
        Number of Occurrences:
        <input
          type="number"
          min="1"
          value={occurrences}
          onChange={(e) => setOccurrences(parseInt(e.target.value))}
        />
      </label>
      <br /><br />

      <button onClick={generateOccurrences}>Generate Events</button>

      {eventDates.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h3>📆 Event Occurrences</h3>
          <ul>
            {eventDates.map((date, idx) => (
              <li key={idx}>{date.toDateString()}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default RecurringEventForm;

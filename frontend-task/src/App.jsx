import React from 'react';
import RecurringEventForm from './components/RecurringEventForm';

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>📅 Weekly Recurring Event Generator</h1>
      <RecurringEventForm />
    </div>
  );
}

export default App;

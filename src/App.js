import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [reminders, setReminders] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setReminders([...reminders, { name, message }]);
    setName('');
    setMessage('');
  };

  const handleDelete = (index) => {
    const updatedReminders = reminders.filter((_, i) => i !== index);
    setReminders(updatedReminders);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Set Reminder</h1> 
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Title:</label>
            <input className="input-field"
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} required />
          </div>
          <div htmlFor="message">
            <lable>Message:</lable>
            <input className="input-field"
            type="text" 
            id="message" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} required />
          </div>
          <button type="submit">Submit</button>
        </form>

        {reminders && reminders.length > 0 && (
          <div className="reminders-container">
          <h2>Reminders</h2>
          <div className="reminders-list">
            {reminders.map((reminder, index) => (
              <div key={index} className="reminder-box">
                <h3>{reminder.name}</h3>
                <p>{reminder.message}</p>
                <button 
                    className="delete-button" 
                    onClick={() => handleDelete(index)}
                  >
                    X
                  </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  </div>
);
}

export default App;

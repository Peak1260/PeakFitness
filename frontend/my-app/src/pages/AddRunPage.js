import React, { useState } from 'react';
import axios from 'axios';

function AddRunPage() {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [miles, setMiles] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://your-api-url/runs', {
        title,
        time: parseInt(time),
        miles: parseInt(miles),
        location
      });
      console.log(response.data);
      // Handle successful response
    } catch (error) {
      console.error('Error adding run:', error);
    }
  };

  return (
    <div>
      <h1>Add a New Run</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Time (minutes):
          <input type="number" value={time} onChange={(e) => setTime(e.target.value)} />
        </label>
        <label>
          Miles:
          <input type="number" value={miles} onChange={(e) => setMiles(e.target.value)} />
        </label>
        <label>
          Location:
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </label>
        <button type="submit">Add Run</button>
      </form>
    </div>
  );
}

export default AddRunPage;

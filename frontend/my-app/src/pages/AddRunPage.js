import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddRunPage() {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [miles, setMiles] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/runs', {
        title,
        time,
        miles,
        location
      });
      console.log(response.data);
      navigate('/');
    } catch (error) {
      console.error('Error adding run:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Enter New Run Info</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time (minutes):</label>
          <input
            type="number"
            className="form-control"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="miles">Miles:</label>
          <input
            type="number"
            className="form-control"
            id="miles"
            value={miles}
            onChange={(e) => setMiles(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            className="form-control"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Add Run</button>
      </form>
    </div>
  );
}

export default AddRunPage;

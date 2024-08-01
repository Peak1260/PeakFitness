import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const RunForm = () => {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [miles, setMiles] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/runs/${id}`)
        .then(response => {
          const run = response.data;
          setTitle(run.title);
          setTime(run.time);
          setMiles(run.miles);
          setLocation(run.location);
        })
        .catch(error => console.error(error));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const run = { title, time, miles, location };
    if (id) {
      axios.put(`http://localhost:8080/runs/${id}`, run)
        .then(() => navigate('/'))
        .catch(error => console.error(error));
    } else {
      axios.post('http://localhost:8080/runs', run)
        .then(() => navigate('/'))
        .catch(error => console.error(error));
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">{id ? 'Edit Run' : 'Add Run'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time (minutes)</label>
          <input
            type="number"
            className="form-control"
            id="time"
            value={time}
            onChange={e => setTime(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="miles">Miles</label>
          <input
            type="number"
            className="form-control"
            id="miles"
            value={miles}
            onChange={e => setMiles(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            className="form-control"
            id="location"
            value={location}
            onChange={e => setLocation(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          {id ? 'Update' : 'Add'}
        </button>
      </form>
    </div>
  );
};

export default RunForm;

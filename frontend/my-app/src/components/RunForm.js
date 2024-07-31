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
        .then(() => navigate.push('/'))
        .catch(error => console.error(error));
    } else {
      axios.post('http://localhost:8080/runs', run)
        .then(() => navigate.push('/'))
        .catch(error => console.error(error));
    }
  };

  return (
    <div>
      <h2>{id ? 'Edit Run' : 'Add Run'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
        </label>
        <label>
          Time (minutes):
          <input type="number" value={time} onChange={e => setTime(e.target.value)} required />
        </label>
        <label>
          Miles:
          <input type="number" value={miles} onChange={e => setMiles(e.target.value)} required />
        </label>
        <label>
          Location:
          <input type="text" value={location} onChange={e => setLocation(e.target.value)} required />
        </label>
        <button type="submit">{id ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
};

export default RunForm;

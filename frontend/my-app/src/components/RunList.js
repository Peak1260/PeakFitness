import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RunList = () => {
  const [runs, setRuns] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/runs')
      .then(response => {
        setRuns(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this run?')) {
      axios.delete(`http://localhost:8080/runs/${id}`)
        .then(() => {
          setRuns(runs.filter(run => run.id !== id));
        })
        .catch(error => console.error('Error deleting run:', error));
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">All Runs</h2>
      <div className="list-group">
        {runs.map(run => (
          <div key={run.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div className="d-flex w-100 justify-content-between align-items-center">
              <div className="me-3">
                <h4 className="mb-1">{run.title}</h4>
              </div>
              <div className="me-3">
                <p className="mb-1">Time: {run.time} min</p>
              </div>
              <div className="me-3">
                <p className="mb-1">Miles: {run.miles}</p>
              </div>
              <div className="me-3">
                <p className="mb-1">Location: {run.location}</p>
              </div>
              <div>
                <Link
                  to={`/edit-run/${run.id}`}
                  className="btn btn-primary me-2"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(run.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RunList;

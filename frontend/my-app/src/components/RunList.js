import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RunList = () => {
  const [runs, setRuns] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/runs')
      .then(response => {
        console.log(response.data); // Add this line to check the structure
        setRuns(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>All Runs</h2>
      <ul>
        {runs.map(run => (
          <li key={run.id}>
            <Link to={`/edit-run/${run.id}`}>
              {run.title} - {run.miles} miles
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RunList;

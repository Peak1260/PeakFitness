import React from 'react';
import RunList from '../components/RunList';

const Home = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Welcome to the Fitness Tracker</h1>
      <RunList />
    </div>
  );
};

export default Home;

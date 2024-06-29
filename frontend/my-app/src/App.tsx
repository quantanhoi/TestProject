import React, { useState, useEffect } from 'react';
import './App.css';
import DogForm from './components/DogForm';
import DogsView from './components/DogsView';
import axios from 'axios';

function App() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [latestUpdate, setLatestUpdate] = useState<string | null>(null);

  const fetchDogs = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://localhost:3001/api/dogs');
      setDogs(response.data);
    } catch (err) {
      setError('Failed to fetch dogs');
    } finally {
      setLoading(false);
    }
  };

  const fetchLatestUpdate = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/state/');
      setLatestUpdate(response.data.latest_update);
    } catch (err) {
      console.error('Failed to fetch latest update:', err);
    }
  };

  useEffect(() => {
    fetchDogs();
    fetchLatestUpdate();
  }, []);

  const addDog = async (name: string, age: number) => {
    try {
      const response = await axios.post('http://localhost:3001/api/dogs/add', { name, age });
      if (response.status === 201) {
        fetchDogs(); // Fetch the updated list of dogs
        fetchLatestUpdate(); // Fetch the updated latest update time
      }
    } catch (error) {
      console.error('Failed to add dog to database:', error);
      alert('Failed to add dog to database');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <DogForm addDog={addDog} />
        <DogsView dogs={dogs} loading={loading} error={error} />
        {latestUpdate && <p>Latest update: {new Date(latestUpdate).toLocaleString()}</p>}
      </header>
    </div>
  );
}

export default App;

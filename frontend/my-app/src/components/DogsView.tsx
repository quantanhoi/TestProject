import React from 'react';
import './DogsView.css';

interface Dog {
    d_id: number;
    d_name: string;
    d_age: number;
}

interface DogsViewProps {
    dogs: Dog[];
    loading: boolean;
    error: string | null;
}

const DogsView: React.FC<DogsViewProps> = ({ dogs, loading, error }) => {
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="dogs-container">
            {dogs.map(dog => (
                <div key={dog.d_id} className="dog-card">
                    <h2>{dog.d_name}</h2>
                    <p>Age: {dog.d_age}</p>
                </div>
            ))}
        </div>
    );
};

export default DogsView;

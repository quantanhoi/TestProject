import React, { useState } from 'react';
import InputField from './inputField';
import Button from './button';
import './Button.css';
import './InputField.css';

interface DogFormProps {
    addDog: (name: string, age: number) => void;
}

const DogForm: React.FC<DogFormProps> = ({ addDog }) => {
    const [name, setName] = useState<string>('');
    const [age, setAge] = useState<number | ''>('');

    const handleSubmit = () => {
        if (!name || !age) {
            alert('Name or age of dog cannot be empty');
            return;
        }

        addDog(name, Number(age));
        setName('');
        setAge('');
    };

    return (
        <div>
            <InputField
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <InputField
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
            />
            <Button
                onClick={handleSubmit}
                text="Add Dog"
            />
        </div>
    );
};

export default DogForm;

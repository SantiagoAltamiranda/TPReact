import { useState } from 'react';

const Ejercicio3 = (props) => {
    const [message, setMessage] = useState(props.message);

    const handleChange = () => {
        setMessage(message + ' (from changed state)!');
    };

    return (
        <>
            <h1>Hello {message}</h1>
            <button onClick={handleChange} className='btn btn-primary mt-3'>Click me!</button>
        </>
    );
};

export default Ejercicio3;

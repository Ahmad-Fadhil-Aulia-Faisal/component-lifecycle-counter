import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ finishGame }) => {
    const [count, setCount] = useState(0);
    const buttonRef = useRef(null);

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                event.preventDefault(); // Hindari perilaku default (mis. submit form)
                handleClick();
            }
        };

        buttonRef.current.addEventListener('keydown', handleKeyPress);

        return () => {
            buttonRef.current.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    const handleClick = () => {
        setCount((prevCount) => prevCount + 1);
    };

    return (
        <div>
            <h1 style={{ fontSize: '64px' }}>{count}</h1>
            <button
                ref={buttonRef}
                style={buttonStyle}
                onClick={handleClick}
            >
                +
            </button>
            <div>
                <button
                    onClick={finishGame}
                    style={buttonStyle}
                >
                    Finish Game
                </button>
            </div>
        </div>
    );
};

const buttonStyle = {
    fontSize: '32px',
    width: '200px',
    height: '48px',
    borderRadius: '4px',
    marginRight: '24px',
    marginLeft: '24px',
    marginTop: '30px',
    color: '#fff',
    backgroundColor: '#66ccff',
};

export default Counter;

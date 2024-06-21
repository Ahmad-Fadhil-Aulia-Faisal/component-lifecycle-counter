import React, { useState } from 'react';
import Counter from './Counter';

const App = () => {
    const [isGameOver, setIsGameOver] = useState(false);

    const finishGame = () => {
        setIsGameOver(true);
    };

    const restartGame = () => {
        setIsGameOver(false);
    };

    return (
        <div style={styles.container}>
            {isGameOver ? (
                <div>
                    <h1>Game Over!</h1>
                    <button onClick={restartGame} style={buttonStyle}>
                        Restart Game
                    </button>
                </div>
            ) : (
                <Counter finishGame={finishGame} />
            )}
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '30px',
    },
};

const buttonStyle = {
    fontSize: '24px',
    width: '200px',
    height: '48px',
    borderRadius: '4px',
    marginTop: '20px',
    color: '#fff',
    backgroundColor: '#66ccff',
};

export default App;

// src/components/App.jsx
import React, { useState } from 'react';
import Counter from './Counter';
import GameOver from './GameOver';

const App = () => {
    const [isGameOver, setIsGameOver] = useState(false);

    const finishGame = () => {
        setIsGameOver(true);
    };

    return (
        <div style={styles.container}>
            {isGameOver ? <GameOver /> : <Counter finishGame={finishGame} />}
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '30px',
    },
};

export default App;

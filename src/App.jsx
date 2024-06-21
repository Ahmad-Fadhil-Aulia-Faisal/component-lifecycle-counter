import { useState, useEffect } from "react";
import Counter from "./components/Counter";
import PokeList from "./components/PokeList";
import PokeDetail from "./components/PokeDetail";

function App() {
  const [isGameOver, setIsGameOver] = useState(false);
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemonName, setSelectedPokemonName] = useState("");
  const [pokemonDetail, setPokemonDetail] = useState(null);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.error("Error fetching the pokemon list:", error);
      }
    };

    fetchPokemonList();
  }, []);

  useEffect(() => {
    if (selectedPokemonName) {
      const fetchPokemonDetail = async () => {
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemonName}`);
          const data = await response.json();
          setPokemonDetail(data);
        } catch (error) {
          console.error("Error fetching the pokemon detail:", error);
        }
      };

      fetchPokemonDetail();
    }
  }, [selectedPokemonName]);

  const finishGame = () => {
    setIsGameOver(true);
  };

  const clear = () => {
    setSelectedPokemonName("");
    setPokemonDetail(null);
  };

  return (
    <div style={styles.container}>
      {isGameOver ? (
        <h1>See you again!</h1>
      ) : (
        <>
          <Counter finishGame={finishGame} />
          <h2>PokeAPI</h2>
          <PokeList pokemonList={pokemonList} setSelectedPokemonName={setSelectedPokemonName} />
          {pokemonDetail && (
            <div>
              <h2>Pokemon Detail</h2>
              <PokeDetail pokemonDetail={pokemonDetail} />
              <button style={styles.button} onClick={clear}>
                Clear
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    width: "50%",
    margin: "0 auto",
    padding: "80px",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#1a1a1a",
    color: "#fff",
    borderRadius: "6px",
    padding: "12px 24px",
    fontSize: "1em",
    cursor: "pointer",
    marginTop: "32px",
  },
};

export default App;



console.log("---Câu 3----");



// Interface for Pokemon data
interface Pokemon {
  id: number;
  name: string;
  image: string;
  type: string;
}

// Shuffle function for Pokemon array
const shuffle = (data: Pokemon[]): Pokemon[] => {
  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
  }
  return data;
};

// Fetch Pokemon data from API
const fetchData = async (): Promise<Pokemon[]> => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await response.json();

  // Get random number of Pokemon between 10 and 20
  const randomCount = Math.floor(Math.random() * (20 - 10 + 1)) + 10;

  // Slice results array to get random Pokemon
  const results = data.results.slice(0, randomCount);
  const pokemonArray: Pokemon[] = [];

  // Loop through results and fetch individual Pokemon data
  for (const result of results) {
    const pokemonResponse = await fetch(result.url);
    if (!pokemonResponse.ok) {
      throw new Error('Failed to fetch data');
    }
    const pokemonData = await pokemonResponse.json();

    // Create Pokemon object with type checking
    const pokemon: Pokemon = {
      id: pokemonData.id,
      name: pokemonData.name,
      image: pokemonData.sprites.front_default,
      type: pokemonData.types[0].type.name,
    };

    pokemonArray.push(pokemon);
  }

  return pokemonArray;
};

// Show Pokemon data on the board
const show = (data: Pokemon[]): void => {
  const board = document.getElementById('board');
  if (!board) return;

  board.innerHTML = ''; // Clear existing content

  for (const pokemon of data) {
    const div = document.createElement('div');
    div.className = 'col-2 gameItem m-2 p1 text-center d-flex';

    const img = document.createElement('img');
    img.src = pokemon.image;
    img.alt = pokemon.name;
    img.className = 'img-fluid';

    div.appendChild(img);
    board.appendChild(div);
  }
};

// Main function to execute everything
const main = async () => {
  try {
    const data = await fetchData();
    const shuffledData = shuffle(data);
    show(shuffledData);
  } catch (error) {
    console.error(error);
  }
};

main();


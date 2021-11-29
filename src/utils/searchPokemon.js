export function searchPokemon(searchTerm, pokemon) {
    let filteredPokemon = [];

    if (isNaN(parseInt(searchTerm))) {
        if (typeof searchTerm == 'string') {
            return (filteredPokemon = pokemon.filter((pokeman) => {
                return pokeman.name.toLowerCase().includes(searchTerm.toLowerCase());
            }));
        }
    } else if (!isNaN(parseInt(searchTerm))) {
        searchTerm = parseInt(searchTerm);
        return (filteredPokemon = pokemon.filter((pokeman) => {
            console.log('Number entered');
            return pokeman.id === parseInt(searchTerm);
        }));
    } else {
        filteredPokemon = [...pokemon];
        return filteredPokemon;
    }
}

<script context="module">
    export async function load({ page }) {
        const url = 'https://pokeapi.co/api/v2/pokemon?limit=898';
        const res = await fetch(url);

        const data = await res.json();

        const loadedPokemon = data.results.map((data, index) => {
            return {
                name: data.name,
                id: index + 1,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    index + 1
                }.png`
            };
        });
        return { props: { pokemon: loadedPokemon } };
    }
</script>

<script>
    import PokemanCard from '../components/pokemanCard.svelte';
    import { searchPokemon } from '../utils/searchPokemon.js';
    export let pokemon;

    let searchTerm = '';
    let range = [1, 150];
    let filteredPokemon = [];

    $: {
        filteredPokemon = searchPokemon(searchTerm, pokemon);
        // if (isNaN(parseInt(searchTerm))) {
        //     if (typeof searchTerm == 'string') {
        //         filteredPokemon = pokemon.filter((pokeman) => {
        //             return pokeman.name.toLowerCase().includes(searchTerm.toLowerCase());
        //         });
        //     }
        // } else if (!isNaN(parseInt(searchTerm))) {
        //     searchTerm = parseInt(searchTerm);
        //     filteredPokemon = pokemon.filter((pokeman) => {
        //         console.log('Number entered');
        //         return pokeman.id === parseInt(searchTerm);
        //     });
        // } else {
        //     filteredPokemon = [...pokemon];
        // }
    }
</script>

<svelte:head>
    <title>SvelteKit Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Svelte Pokedex</h1>

<div>
    <input
        class="w-8/12 rounded-md text-lg p-4 border-2 m-4 mr-10 mb-10 border-gray-200 shadow"
        type="text"
        bind:value={searchTerm}
        placeholder="Search Pokemon"
    />
    <label class="text-lg" for="range">Include:</label>
    <input
        class="w-1/12 rounded-md text-lg p-4 border-2 m-2 mb-10 border-gray-200 shadow"
        type="text"
        name="range"
        bind:value={range[0]}
        placeholder="0"
    />

    <input
        class="w-1/12 rounded-md text-lg p-4 border-2 m-1 mb-10 border-gray-200 shadow"
        type="text"
        bind:value={range[1]}
        placeholder="0"
    />
</div>

<div class="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
    {#each filteredPokemon as pokeman}
        <PokemanCard {pokeman} />
    {/each}
</div>

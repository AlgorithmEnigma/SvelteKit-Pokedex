<script context="module">
    export async function load({ page }) {
        const id = page.params.id;
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const pokeman = await res.json();
        return { props: { pokeman } };
    }
</script>

<script>
    export let pokeman;

    const type = pokeman.types.map((type) => {
        return {
            name: type.type.name
        };
    });

    type.forEach((type) => {
        console.log(type.name);
    });
</script>

<div class="flex flex-col items-center">
    <h1 class="text-2xl text-center my-8 uppercase font-bold">{pokeman.name}</h1>
    <p class="text-xl text-center">
        Type:
        {#each type as pokeType}
            <strong class="m-4 ">{pokeType.name}</strong>
        {/each}
    </p>
    <div class="flex h-auto w-8/12">
        <img
            class="card-image h-1/2 w-1/2"
            src={pokeman.sprites['front_default']}
            alt={pokeman.name}
        />
        <img
            class="card-image h-1/2 w-1/2"
            src={pokeman.sprites['front_shiny']}
            alt={pokeman.name}
        />
    </div>
</div>


getdata();

async function getdata() {
    try {

        const PokemonName = document.querySelector("#PokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${PokemonName}`);
        if (!response.ok) {
            throw new Error("Could not fetch the data: ");
        }

        const data = await response.json();
        const pokemonsprite = data.sprites.front_default;
        const imgElement = document.querySelector("#Pokemonimg");

        imgElement.src = pokemonsprite;
        imgElement.style.display = "block";
    }
    catch (error) {
        console.error(error);
    }
}
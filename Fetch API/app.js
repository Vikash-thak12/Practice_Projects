
// getdata();

async function getdata() {
    try {

        const PokemonName = document.getElementById("#Pokemon").value.toLowercase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${PokemonName}`);
        if(!response.ok)
        {
            throw new Error("Could not fetch the data: ");
        }

        const data = await response.json();
        console.log(data);
    }
    catch(error) {
        console.error(error);
    }
}
url = "https://pokeapi.co/api/v2/pokemon/pikachu";

getdata();

async function getdata() {
    try {

        const response = await fetch(url);
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
import { writable } from "svelte/store";

export const pokemon = writable([]);
const fetchPokemon = async () => {
    const url = 'http://192.168.45.223/surveillance_TESTE/isretail_status_min.php';
    const response = await fetch(url);
    const data = await response.json();
    const loadedPokemon = await data.map((data) => {
        console.log("This is the data" + data.Seq);
        console.log("This is the data" + data.Info+"--");
        return {
            name: data.Seq,
            info: data.Info,
            value: data.Value
        };
    });
    pokemon.set(loadedPokemon);
}
fetchPokemon();

import { writable } from "svelte/store";

export const numeradores = writable([]);
const fetchNumeradores = async () => {
    const url = 'http://192.168.45.223/surveillance_TESTE/numerador.php';
    const response = await fetch(url);
    const data = await response.json();
    const loadedNumerador = await data.map((data) => {
        return {
            name: data.numerador,
            resto: data.dif
        };
    });
    numeradores.set(loadedNumerador);
}
fetchNumeradores();

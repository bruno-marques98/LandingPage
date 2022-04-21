import { writable } from "svelte/store";

export const retailMemory = writable([]);

const fetchRetailMemory = async () => {
    const url = 'http://192.168.45.223/surveillance_TESTE/server_memory.php';
    const response = await fetch(url);
    const data = await response.json();
    const memory = await data.map((data) => {
        return {
            name : "Memory",
            value : data.Memory
        };
    });
    retailMemory.set(memory);
}

fetchRetailMemory();

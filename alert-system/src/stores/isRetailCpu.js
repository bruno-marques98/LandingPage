import { writable } from "svelte/store";

export const retailCpu = writable([]);

const fetchRetailCpu = async () => {
    const url = 'http://192.168.45.223/surveillance_TESTE/server_cpu.php';
    const response = await fetch(url);
    const data = await response.json();
    const cpu = await data.map((data) => {
        
        return {
            name : "CPU",
            value : data.CPU
        };
    });
    retailCpu.set(cpu);
}

fetchRetailCpu();

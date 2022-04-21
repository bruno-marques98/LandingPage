import { writable } from "svelte/store";

export const retailDisk = writable([]);

const fetchRetailDisk = async () => {
    const url = 'http://192.168.45.223/surveillance_TESTE/server_disk.php';
    const response = await fetch(url);
    const data = await response.json();
    const disk = await data.map((data) => {
        // console.log("This is the data from cpu " + data);
        return {
            name : "Disk",
            value : data.Disk
        };
    });
    retailDisk.set(disk);
}

fetchRetailDisk();

<script>
	import DataVisualization from '../components/dataVisualization.svelte';
	import Charts from '../components/charts.svelte';
	import { retailCpu } from '../stores/isRetailCpu';
	import { get } from 'svelte/store';
import Ref from '../components/refresh.svelte';
    let sets = {
		cpuValue: 10,
		memoryValue: 20,
		diskValue: 100
	};
	// Disk
	let diskValuee = 0.1;
	const fetchRetailDisk = async () => {
		const url = 'http://192.168.45.223/surveillance_TESTE/server_disk.php';
		const response = await fetch(url);
		const data = await response.json();
		const disk = await data.map((data) => {
			//console.log('DISK inside ', disk);
            diskValuee = data.Disk;
		});
        sets.diskValue = diskValuee;
		return disk;
	};

	let promiseDisk = fetchRetailDisk();


    // Memory
	let memoryValuee = 0.1;
	const fetchRetailMemory = async () => {
		const url = 'http://192.168.45.223/surveillance_TESTE/server_memory.php';
		const response = await fetch(url);
		const data = await response.json();
		const memory = await data.map((data) => {
            memoryValuee = data.Memory;
		});
        sets.memoryValue = memoryValuee;
		return memory;
	};

	let promiseMemory = fetchRetailMemory();

    
    // CPU
	let cpuValuee = 0.1;
	const fetchRetailCPU = async () => {
		const url = 'http://192.168.45.223/surveillance_TESTE/server_cpu.php';
		const response = await fetch(url);
		const data = await response.json();
		const cpu = await data.map((data) => {
            cpuValuee = data.CPU;
		});
        sets.cpuValue = cpuValuee * 100;
		return cpu;
	};

	let promiseCPU = fetchRetailCPU();
</script>

<svelte:head>
	<title>Detalhes</title>
</svelte:head>
<div style="width: 100%; display: flex; align-items: center; justify-content:center;">
	{#await promiseDisk}
		<p>Loading...</p>
	{:then values}
        {#await promiseCPU}
        <p>Loading...</p>
        {:then values}
            {#await promiseMemory}
            <p>Loading...</p>
            {:then values}
                <Charts {...sets} />
            {:catch error}
            <p style="color: red">{error.message}</p>
            {/await}
        {:catch error}
        <p style="color: red">{error.message}</p>
        {/await}
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
</div>

<Ref />

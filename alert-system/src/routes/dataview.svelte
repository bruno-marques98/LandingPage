<script>
	import Charts from '../components/charts.svelte';
	import Ref from '../components/refresh.svelte';
	
    let sets = {
		cpuValue: 10,
		memoryValue: 20,
		diskValue: 100
	};
	// Disk
	let diskValueOutput = 0.1;
	const fetchRetailDisk = async () => {
		const url = 'http://192.168.45.223/surveillance_TESTE/server_disk.php';
		const response = await fetch(url);
		const data = await response.json();
		const disk = await data.map((data) => {
			diskValueOutput = data.Disk;
		});
		sets.diskValue = diskValueOutput;
		return disk;
	};

	let promiseDisk = fetchRetailDisk();

	// Memory
	let memoryValueOutput = 0.1;
	const fetchRetailMemory = async () => {
		const url = 'http://192.168.45.223/surveillance_TESTE/server_memory.php';
		const response = await fetch(url);
		const data = await response.json();
		const memory = await data.map((data) => {
			memoryValueOutput = data.Memory;
		});
		sets.memoryValue = memoryValueOutput;
		return memory;
	};

	let promiseMemory = fetchRetailMemory();

	// CPU
	let cpuValueOutput = 0.1;
	const fetchRetailCPU = async () => {
		const url = 'http://192.168.45.223/surveillance_TESTE/server_cpu.php';
		const response = await fetch(url);
		const data = await response.json();
		const cpu = await data.map((data) => {
			cpuValueOutput = data.CPU;
		});
		sets.cpuValue = cpuValueOutput * 100;
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

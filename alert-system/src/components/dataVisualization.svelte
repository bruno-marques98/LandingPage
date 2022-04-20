<script context="module">
	// CPU
	let cpuValue = 0.1;
	const fetchRetailCpu = async () => {
		const url = 'http://192.168.45.223/surveillance_TESTE/server_cpu.php';
		const response = await fetch(url);
		const data = await response.json();
		const cpu = await data.map((data) => {
			cpuValue = data.CPU;
		});
		return cpuValue;
	};

	let promiseCpu = fetchRetailCpu();

	// Memory
	let memoryValue = 0.1;

	const fetchRetailMemory = async () => {
		const url = 'http://192.168.45.223/surveillance_TESTE/server_memory.php';
		const response = await fetch(url);
		const data = await response.json();
		const memory = await data.map((data) => {
			memoryValue = data.Memory;
		});
		return memoryValue;
	};

	let promiseMem = fetchRetailMemory();

	// Disk
	let diskValue = 0.1;
	const fetchRetailDisk = async () => {
		const url = 'http://192.168.45.223/surveillance_TESTE/server_disk.php';
		const response = await fetch(url);
		const data = await response.json();
		const disk = await data.map((data) => {
			console.log('DISK', diskValue);
			diskValue = data.Disk;
		});
		return diskValue;
	};

	let promiseDisk = fetchRetailDisk();
</script>

<script>
	//Import the Fusioncharts library
	import FusionCharts from 'fusioncharts';

	//Import the Widgets
	import Widgets from 'fusioncharts/fusioncharts.widgets';

	//Import the theme as fusion
	import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

	//Import the Svelte component
	import SvelteFC, { fcRoot } from 'svelte-fusioncharts';

	import Ref from '../components/refresh.svelte';

	// Always set FusionCharts as the first parameter
	fcRoot(FusionCharts, Widgets, FusionTheme);

	let cpuValue = 0.1;

	async function setChartConfigs() {
		cpuValue = await fetchRetailCpu();
		//STEP 2 : preparing the chart Data
		const colorRange = {
			color: [
				{
					minValue: '0',
					maxValue: '50',
					code: '#62B58F'
				},
				{
					minValue: '50',
					maxValue: '75',
					code: '#FFC533'
				},
				{
					minValue: '75',
					maxValue: '100',
					code: '#F2726F'
				}
			]
		};
		const dials = {
			dial: [
				{
					value: (cpuValue * 100).toString()
				}
			]
		};
		//STEP 3: Create your configuration object
		return (chartConfigs = {
			type: 'angulargauge', // The gauge type
			width: '450', // Width of the gauge
			height: '250', // Height of the gauge
			dataFormat: 'json', // Data type
			renderAt: 'chart-container', //Container where the gauge will render
			dataSource: {
				// Gauge Configuration
				chart: {
					caption: 'Server CPU',
					lowerLimit: '0',
					upperLimit: '100',
					showValue: '1',
					numberSuffix: '%',
					theme: 'fusion',
					showToolTip: '0'
				},
				// Chart Data
				colorRange: colorRange,
				dials: dials
			}
		});
	}

	let chartConfigs = setChartConfigs();

	async function setChartConfigsMemory() {
		let memValue = await fetchRetailMemory();
		//STEP 2 : preparing the chart Data
		const colorRange = {
			color: [
				{
					minValue: '0',
					maxValue: '50',
					code: '#62B58F'
				},
				{
					minValue: '50',
					maxValue: '75',
					code: '#FFC533'
				},
				{
					minValue: '75',
					maxValue: '100',
					code: '#F2726F'
				}
			]
		};
		const dials = {
			dial: [
				{
					value: memValue.toString()
				}
			]
		};
		//STEP 3: Create your configuration object
		return (chartConfigsMemory = {
			type: 'angulargauge', // The gauge type
			width: '450', // Width of the gauge
			height: '250', // Height of the gauge
			dataFormat: 'json', // Data type
			renderAt: 'chart-container', //Container where the gauge will render
			dataSource: {
				// Gauge Configuration
				chart: {
					caption: 'Server Memory',
					lowerLimit: '0',
					upperLimit: '100',
					showValue: '1',
					numberSuffix: '%',
					theme: 'fusion',
					showToolTip: '0'
				},
				// Chart Data
				colorRange: colorRange,
				dials: dials
			}
		});
	}
	let chartConfigsMemory = setChartConfigsMemory();

	async function setChartConfigsDisk() {
		let memValue = await fetchRetailDisk();
		//STEP 2 : preparing the chart Data
		const colorRange = {
			color: [
				{
					minValue: '0',
					maxValue: '50',
					code: '#62B58F'
				},
				{
					minValue: '50',
					maxValue: '75',
					code: '#FFC533'
				},
				{
					minValue: '75',
					maxValue: '100',
					code: '#F2726F'
				}
			]
		};
		const dials = {
			dial: [
				{
					value: diskValue.toString()
				}
			]
		};
		//STEP 3: Create your configuration object
		return (chartConfigsDisk = {
			type: 'angulargauge', // The gauge type
			width: '450', // Width of the gauge
			height: '250', // Height of the gauge
			dataFormat: 'json', // Data type
			renderAt: 'chart-container', //Container where the gauge will render
			dataSource: {
				// Gauge Configuration
				chart: {
					caption: 'Server Used Disk Space',
					lowerLimit: '0',
					upperLimit: '100',
					showValue: '1',
					numberSuffix: '%',
					theme: 'fusion',
					showToolTip: '0'
				},
				// Chart Data
				colorRange: colorRange,
				dials: dials
			}
		});
	}
	let chartConfigsDisk = setChartConfigsDisk();
</script>

<div style="display: flex; margin : auto;">
	{#await promiseCpu}
		<p>Loading...</p>
	{:then values}
		<SvelteFC {...chartConfigs} />
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}

	{#await promiseMem}
		<p>Loading...</p>
	{:then values}
		<SvelteFC {...chartConfigsMemory} />
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}

	{#await promiseDisk}
		<p>Loading...</p>
	{:then values}
		<SvelteFC {...chartConfigsDisk} />
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
</div>

<Ref />

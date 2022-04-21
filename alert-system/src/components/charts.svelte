<script>
	export let cpuValue;
	export let memoryValue;
	export let diskValue;

	//Import the Fusioncharts library
	import FusionCharts from 'fusioncharts';

	//Import the Widgets
	import Widgets from 'fusioncharts/fusioncharts.widgets';

	//Import the theme as fusion
	import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

	//Import the Svelte component
	import SvelteFC, { fcRoot } from 'svelte-fusioncharts';
	import { derived } from 'svelte/store';

	import Ref from '../components/refresh.svelte';

	// Always set FusionCharts as the first parameter
	fcRoot(FusionCharts, Widgets, FusionTheme);
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
	const dialsCpu = {
		dial: [
			{
				value: cpuValue.toString()
			}
		]
	};
	//STEP 3: Create your configuration object
	const chartConfigsCpu = {
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
			dials: dialsCpu
		}
	};

	const dialsMemory = {
		dial: [
			{
				value: memoryValue.toString()
			}
		]
	};
	//STEP 3: Create your configuration object
	const chartConfigsMemory = {
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
			dials: dialsMemory
		}
	};
	//STEP 2 : preparing the chart Data

	const dialsDisk = {
		dial: [
			{
				value: diskValue.toString()
			}
		]
	};
	//STEP 3: Create your configuration object
	const chartConfigsDisk = {
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
			dials: dialsDisk
		}
	};
</script>
<div style="display: flex; margin : auto;">
    <SvelteFC {...chartConfigsCpu} />
	<SvelteFC {...chartConfigsMemory} />
    <SvelteFC {...chartConfigsDisk} />
</div>

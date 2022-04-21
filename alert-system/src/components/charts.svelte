<script>
	export let cpuValue;
	export let memoryValue;
	export let diskValue;

	import FusionCharts from 'fusioncharts';

	import Widgets from 'fusioncharts/fusioncharts.widgets';

	import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

	import SvelteFC, { fcRoot } from 'svelte-fusioncharts';

	import Circle from 'svelte-material-icons/AlertCircle.svelte';

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

	const chartConfigsCpu = {
		type: 'angulargauge',
		width: '450',
		height: '300',
		dataFormat: 'json',
		renderAt: 'chart-container',
		dataSource: {
			chart: {
				caption: 'Server CPU',
				lowerLimit: '0',
				upperLimit: '100',
				showValue: '1',
				numberSuffix: '%',
				theme: 'fusion',
				showToolTip: '0'
			},
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

	const chartConfigsMemory = {
		type: 'angulargauge',
		width: '450',
		height: '300',
		dataFormat: 'json',
		renderAt: 'chart-container',
		dataSource: {
			chart: {
				caption: 'Server Memory',
				lowerLimit: '0',
				upperLimit: '100',
				showValue: '1',
				numberSuffix: '%',
				theme: 'fusion',
				showToolTip: '0'
			},
			colorRange: colorRange,
			dials: dialsMemory
		}
	};

	const dialsDisk = {
		dial: [
			{
				value: diskValue.toString()
			}
		]
	};

	const chartConfigsDisk = {
		type: 'angulargauge',
		width: '450',
		height: '300',
		dataFormat: 'json',
		renderAt: 'chart-container',
		dataSource: {
			chart: {
				caption: 'Server Used Disk Space',
				lowerLimit: '0',
				upperLimit: '100',
				showValue: '1',
				numberSuffix: '%',
				theme: 'fusion',
				showToolTip: '0'
			},
			colorRange: colorRange,
			dials: dialsDisk
		}
	};
</script>

<div style="display: flex; margin : auto;">
	<SvelteFC {...chartConfigsCpu} />
	{#if cpuValue > 75}
		<span class="alert"><Circle color="red" /></span>
	{/if}
	<SvelteFC {...chartConfigsMemory} />
	{#if memoryValue > 75}
		<span class="alert"><Circle color="red" /></span>
	{/if}
	<SvelteFC {...chartConfigsDisk} />
	{#if diskValue > 75}
		<span class="alert"><Circle color="red" /></span>
	{/if}
</div>

<style>
	@keyframes blink {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	.alert {
		display: inline;
		margin: 0;
		padding: 0;
		position: relative;
		left: -5%;
		top: 10px;
		animation: blink 1s linear infinite;
	}
</style>

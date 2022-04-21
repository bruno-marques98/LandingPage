<script lang="ts">
	import Circle from 'svelte-material-icons/AlertCircle.svelte';
	import { retailCpu } from '../stores/isRetailCpu';
	import { retailMemory } from '../stores/isRetailMemory';
	import { retailDisk } from '../stores/isRetailDisk';
	
  let prominent = false;
	let dense = false;

	let error = false;

	function setErrorTrue() {
		error = true;
		console.log('Setted to true');
	}
</script>

{#each $retailCpu as cpu}
	{#if cpu.value > 0.75}
		<p hidden>{setErrorTrue()}</p>
	{/if}
{/each}

{#each $retailMemory as memory}
{#if memory.value > 75}
		<p hidden>{setErrorTrue()}</p>
	{/if}
{/each}

{#each $retailDisk as disk}
{#if disk.value > 75}
		<p hidden>{setErrorTrue()}</p>
	{/if}
{/each}

<div>
	<div class="flexy">
		<div class="navbar">
			<div class="link">
				<a href="/">Alertas</a>
			</div>
			<div class="link">
				<a href="/dataview">Performance</a>
				{#if error}
					<span class="teste"><Circle color="red" /></span>
				{/if}
			</div>
		</div>
	</div>
	<slot />
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	.navbar {
		background-color: rgb(0, 160, 247);
		display: flex;
		width: 100%;
		margin: 0;
	}

	.navbar .link {
		text-decoration: none;
		color: white;
		font-size: large;
		margin-left: 10px;
		padding: 10px;
		float: left;
		display: flex;
	}

	.navbar .link a {
		color: white;
	}

	.navbar .link :hover {
		text-decoration: underline;
	}

	.teste {
		display: inline;
	}
</style>

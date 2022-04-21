<script>
	// @ts-nocheck

	//console.log("Data " + $pokemon);
	async function getStatus() {
		let response = await fetch('http://192.168.45.223/surveillance_TESTE/isretail_status_min.php', {
			header: { 'Access-Control-Allow-Origin': '*' }
		});
		let status = await response.json();
		return status;
	}
	const promise = getStatus();
	let isAnyServiceStopped = false;

	import { numeradores } from '../stores/numeradores';

	function setServicesTrue() {
		isAnyServiceStopped = true;
	}
	import './index.scss';
	import Ref from '../components/refresh.svelte';
	import Check from 'svelte-material-icons/Check.svelte';

	let errorMessage = 'Hello';
	function setMessage(message) {
		errorMessage = message;
	}
	let errorRetail = false;
	function setErrorRetail() {
		errorRetail = true;
	}
	let errorStaples = false;
	function setErrorStaples() {
		errorStaples = true;
	}
	let errorAgro = false;
	function setErrorAgro() {
		errorAgro = true;
	}
	let errorDaufood = false;
	function setErrorDaufood() {
		errorDaufood = true;
	}
</script>

{#if isAnyServiceStopped == true}
	<div style="padding: 20px; background-color: #f44336; color: white;">
		<strong>Atenção!</strong>
		{errorMessage}
		<span
			style="margin-left: 15px; color: white; font-weight: bold; float: right; font-size: 22px; line-height: 20px; cursor: pointer; transition: 0.3s;"
			onclick="this.parentElement.style.display='none';">&times;</span
		>
	</div>
{:else}
	<div style="display: flex; justify-content: center">
		<Check size="30em" color="rgba(16, 234, 104,0.8)" />
	</div>
{/if}
<div style="display:flex; justify-content: center; margin: 50px">
	<!-- ISRETAIL -->
	{#await promise}
		<p>Loading...</p>
	{:then status}
		{#each status as stat}
			{#if stat.Info == 'Services inactive'}
				{#if stat.Value > 0}
					<p hidden>
						{setServicesTrue()}
						{setErrorRetail()}
						{setMessage('There are Services Inactive!')}
					</p>
				{/if}
			{:else if stat.Info == 'Messages in error'}
				{#if stat.Value > 0}
					<p hidden>
						{setServicesTrue()}
						{setMessage('There are Messages in error!')}
					</p>
				{:else}
					{setErrorRetail()}
				{/if}
			{:else if stat.Info == 'Jobs in error'}
				{#if stat.Value > 0}
					<p hidden>
						{setServicesTrue()}
						{setMessage('There are Jobs in error!')}
					</p>
				{:else}
					{setErrorRetail()}
				{/if}
			{/if}
		{/each}
		<div style="display: flex; justify-content: center;">
			<div class="card">
				<h1 class="text-4xl text-begin uppercase" style="color:red">IS Retail</h1>
				{#if errorRetail == false}
					<p class="text-2xl text-begin uppercase">Mensagens</p>
					<ol style="margin: 10px">
						{#each status as stat}
							{#if stat.Info == 'Services inactive'}
								{#if stat.Value > 0}
									<li class="item">
										{stat.Info} : <b>{stat.Value}</b>
									</li>
								{/if}
							{:else if stat.Info == 'Messages in error'}
								{#if stat.Value > 0}
									<li class="item">
										{stat.Info} : <b>{stat.Value}</b>
									</li>
								{/if}
							{:else if stat.Info == 'Jobs in error'}
								{#if stat.Value > 0}
									<li class="item">
										{stat.Info} : <b>{stat.Value}</b>
									</li>
								{/if}
							{/if}

							<p hidden>
								{#if stat.Info == 'Services inactive'}
									{#if stat.Value > 0}
										{setServicesTrue()}
										{setErrorRetail()}
									{/if}
								{/if}
							</p>
						{/each}
					</ol>
					{#if $numeradores.length > 0}
						<p class="text-2xl text-begin uppercase; margin: 10px">Numeradores a acabar</p>
					{/if}
					<ol style="margin: 10px">
						{#each $numeradores as num}
							<li class="item">
								{num.name} : <b>{num.resto}</b>
							</li>
						{/each}
					</ol>
				{:else}
					<div style="display: flex; justify-content: center">
						<Check size="10em" color="rgba(16, 234, 104,0.8)" />
					</div>
				{/if}
			</div>
		</div>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
	<!-- Staples -->
	{#await promise}
		<p>Loading...</p>
	{:then status}
		{#each status as stat}
			{#if stat.Info == 'Services inactive'}
				{#if stat.Value > 0}
					<p hidden>
						{setServicesTrue()}
						{setErrorStaples()}
						{setMessage('There are Services Inactive!')}
					</p>
				{/if}
			{:else if stat.Info == 'Messages in error'}
				{#if stat.Value > 0}
					<p hidden>
						{setServicesTrue()}
						{setMessage('There are Messages in error!')}
					</p>
				{:else}
					{setErrorStaples()}
				{/if}
			{:else if stat.Info == 'Jobs in error'}
				{#if stat.Value > 0}
					<p hidden>
						{setServicesTrue()}
						{setMessage('There are Jobs in error!')}
					</p>
				{:else}
					{setErrorStaples()}
				{/if}
			{/if}
		{/each}
		<div style="display: flex; justify-content: center;">
			<div class="card">
				<h1 class="text-4xl text-begin uppercase" style="color:red">Staples</h1>
				{#if errorStaples == false}
					<p class="text-2xl text-begin uppercase">Mensagens</p>
					<ol style="margin: 10px">
						{#each status as stat}
							{#if stat.Info == 'Services inactive'}
								{#if stat.Value > 0}
									<li class="item">
										{stat.Info} : <b>{stat.Value}</b>
									</li>
								{/if}
							{:else if stat.Info == 'Messages in error'}
								{#if stat.Value > 0}
									<li class="item">
										{stat.Info} : <b>{stat.Value}</b>
									</li>
								{/if}
							{:else if stat.Info == 'Jobs in error'}
								{#if stat.Value > 0}
									<li class="item">
										{stat.Info} : <b>{stat.Value}</b>
									</li>
								{/if}
							{/if}

							<p hidden>
								{#if stat.Info == 'Services inactive'}
									{#if stat.Value > 0}
										{setServicesTrue()}
										{setErrorRetail()}
									{/if}
								{/if}
							</p>
						{/each}
					</ol>
					{#if $numeradores.length > 0}
						<p class="text-2xl text-begin uppercase; margin: 10px">Numeradores a acabar</p>
					{/if}
					<ol style="margin: 10px">
						{#each $numeradores as num}
							<li class="item">
								{num.name} : <b>{num.resto}</b>
							</li>
						{/each}
					</ol>
				{:else}
					<div style="display: flex; justify-content: center">
						<Check size="10em" color="rgba(16, 234, 104,0.8)" />
					</div>
				{/if}
			</div>
		</div>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
	<!-- Agros -->
	{#await promise}
		<p>Loading...</p>
	{:then status}
		{#each status as stat}
			{#if stat.Info == 'Services inactive'}
				{#if stat.Value > 0}
					<p hidden>
						{setServicesTrue()}
						{setErrorAgro()}
						{setMessage('There are Services Inactive!')}
					</p>
				{/if}
			{:else if stat.Info == 'Messages in error'}
				{#if stat.Value > 0}
					<p hidden>
						{setServicesTrue()}
						{setMessage('There are Messages in error!')}
					</p>
				{:else}
					{setErrorAgro()}
				{/if}
			{:else if stat.Info == 'Jobs in error'}
				{#if stat.Value > 0}
					<p hidden>
						{setServicesTrue()}
						{setMessage('There are Jobs in error!')}
					</p>
				{:else}
					{setErrorAgro()}
				{/if}
			{/if}
		{/each}
		<div style="display: flex; justify-content: center;">
			<div class="card">
				<h1 class="text-4xl text-begin uppercase" style="color:red">Agro</h1>
				{#if errorAgro == false}
					<p class="text-2xl text-begin uppercase">Mensagens</p>
					<ol style="margin: 10px">
						{#each status as stat}
							{#if stat.Info == 'Services inactive'}
								{#if stat.Value > 0}
									<li class="item">
										{stat.Info} : <b>{stat.Value}</b>
									</li>
								{/if}
							{:else if stat.Info == 'Messages in error'}
								{#if stat.Value > 0}
									<li class="item">
										{stat.Info} : <b>{stat.Value}</b>
									</li>
								{/if}
							{:else if stat.Info == 'Jobs in error'}
								{#if stat.Value > 0}
									<li class="item">
										{stat.Info} : <b>{stat.Value}</b>
									</li>
								{/if}
							{/if}

							<p hidden>
								{#if stat.Info == 'Services inactive'}
									{#if stat.Value > 0}
										{setServicesTrue()}
										{setErrorAgro()}
									{/if}
								{/if}
							</p>
						{/each}
					</ol>
					{#if $numeradores.length > 0}
						<p class="text-2xl text-begin uppercase; margin: 10px">Numeradores a acabar</p>
					{/if}
					<ol style="margin: 10px">
						{#each $numeradores as num}
							<li class="item">
								{num.name} : <b>{num.resto}</b>
							</li>
						{/each}
					</ol>
				{:else}
					<div style="display: flex; justify-content: center">
						<Check size="10em" color="rgba(16, 234, 104,0.8)" />
					</div>
				{/if}
			</div>
		</div>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
	<!-- Daufood -->
	{#await promise}
		<p>Loading...</p>
	{:then status}
		{#each status as stat}
			{#if stat.Info == 'Services inactive'}
				{#if stat.Value > 0}
					<p hidden>
						{setServicesTrue()}
						{setErrorDaufood()}
						{setMessage('There are Services Inactive!')}
					</p>
				{/if}
			{:else if stat.Info == 'Messages in error'}
				{#if stat.Value > 0}
					<p hidden>
						{setServicesTrue()}
						{setMessage('There are Messages in error!')}
					</p>
				{:else}
					{setErrorDaufood()}
				{/if}
			{:else if stat.Info == 'Jobs in error'}
				{#if stat.Value > 0}
					<p hidden>
						{setServicesTrue()}
						{setMessage('There are Jobs in error!')}
					</p>
				{:else}
					{setErrorDaufood()}
				{/if}
			{/if}
		{/each}
		<div style="display: flex; justify-content: center;">
			<div class="card">
				<h1 class="text-4xl text-begin uppercase" style="color:red">Agro</h1>
				{#if errorDaufood == false}
					<p class="text-2xl text-begin uppercase">Mensagens</p>
					<ol style="margin: 10px">
						{#each status as stat}
							{#if stat.Info == 'Services inactive'}
								{#if stat.Value > 0}
									<li class="item">
										{stat.Info} : <b>{stat.Value}</b>
									</li>
								{/if}
							{:else if stat.Info == 'Messages in error'}
								{#if stat.Value > 0}
									<li class="item">
										{stat.Info} : <b>{stat.Value}</b>
									</li>
								{/if}
							{:else if stat.Info == 'Jobs in error'}
								{#if stat.Value > 0}
									<li class="item">
										{stat.Info} : <b>{stat.Value}</b>
									</li>
								{/if}
							{/if}

							<p hidden>
								{#if stat.Info == 'Services inactive'}
									{#if stat.Value > 0}
										{setServicesTrue()}
										{setErrorDaufood()}
									{/if}
								{/if}
							</p>
						{/each}
					</ol>
					{#if $numeradores.length > 0}
						<p class="text-2xl text-begin uppercase; margin: 10px">Numeradores a acabar</p>
					{/if}
					<ol style="margin: 10px">
						{#each $numeradores as num}
							<li class="item">
								{num.name} : <b>{num.resto}</b>
							</li>
						{/each}
					</ol>
				{:else}
					<div style="display: flex; justify-content: center">
						<Check size="10em" color="rgba(16, 234, 104,0.8)" />
					</div>
				{/if}
			</div>
		</div>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
</div>

<Ref />

<style>
	@keyframes blink {
		50% {
			border-color: #fff;
		}
	}
	.card {
		display: grid;
		box-shadow: 10px 10px 120px 10px rgba(0, 0, 0, 0.2), 0 6px 100px 0 rgba(0, 0, 0, 0.19);
		text-align: center;
		padding: 20px 60px;
		margin: 20px;
	}
	.item {
		border: 4px solid rgb(226, 40, 40);
		border-radius: 10px;
		margin-top: 1px;
		padding: 12px;
		color: black;
		animation: blink 2s linear infinite;
	}
</style>

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

	console.log('isAnyServiceStopped ' + isAnyServiceStopped);
	import { numeradores } from '../stores/numeradores';

	function setServicesTrue() {
		isAnyServiceStopped = true;
	}
	import './index.scss';
	import Ref from '../components/refresh.svelte';

	let errorMessage = 'Hello';
	function setMessage(message) {
		errorMessage = message;
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
{/if}
<div style="display:flex; justify-content: center; margin: 50px">
	{#await promise}
		<p>Loading...</p>
	{:then status}
		{#each status as stat}
			{#if stat.Info == 'Services inactive'}
				{#if stat.Value > 0}
					<p hidden>
						{setServicesTrue()}
						{setMessage('There are Services Inactive!')}
					</p>
				{/if}
			{:else if stat.Info == 'Messages in error'}
				{#if stat.Value > 0}
					<p hidden>
						{setServicesTrue()}
						{setMessage('There are Messages in error!')}
					</p>
				{/if}
			{:else if stat.Info == 'Jobs in error'}
				{#if stat.Value > 0}
					<p hidden>
						{setServicesTrue()}
						{setMessage('There are Jobs in error!')}
					</p>
				{/if}
			{/if}
		{/each}
		<div style="display: flex; justify-content: center;">
			<div class="card">
				<h1 class="text-4xl text-begin uppercase" style="color:red">IS Retail</h1>
				<p class="text-2xl text-begin uppercase">Mensagens</p>
				<ol style="margin: 10px">
					{#each status as stat}
						{#if stat.Info == 'Services inactive'}
							{#if stat.Value > 0}
								<li class="item">
									{stat.Info} : {stat.Value}
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
									{stat.Info} : {stat.Value}
								</li>
							{/if}
						{/if}

						<p hidden>
							{#if stat.Info == 'Services inactive'}
								{#if stat.Value > 0}
									{setServicesTrue()}
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
							{num.name} : {num.resto}
						</li>
					{/each}
				</ol>
			</div>
		</div>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
	{#await promise}
		<p>Loading...</p>
	{:then status}
		{#each status as stat}
			{#if stat.Info == 'Services inactive'}
				{#if stat.Value > 0}
					<p hidden>
						{setServicesTrue()}
						{setMessage('There are Services Inactive!')}
					</p>
				{/if}
			{:else if stat.Info == 'Messages in error'}
				{#if stat.Value > 0}
					<p hidden>
						{setServicesTrue()}
						{setMessage('There are Messages in error!')}
					</p>
				{/if}
			{:else if stat.Info == 'Jobs in error'}
				{#if stat.Value > 0}
					<p hidden>
						{setServicesTrue()}
						{setMessage('There are Jobs in error!')}
					</p>
				{/if}
			{/if}
		{/each}
		<div style="display: flex; justify-content: center;">
			<div class="card">
				<h1 class="text-4xl text-begin uppercase" style="color:red">Staples</h1>
				<p class="text-2xl text-begin uppercase">Mensagens</p>
				<ol style="margin: 10px">
					{#each status as stat}
						{#if stat.Info == 'Services inactive'}
							{#if stat.Value > 0}
								<li class="item">
									{stat.Info} : {stat.Value}
								</li>
							{/if}
						{:else if stat.Info == 'Messages in error'}
							{#if stat.Value > 0}
								<li class="item">
									{stat.Info} : {stat.Value}
								</li>
							{/if}
						{:else if stat.Info == 'Jobs in error'}
							{#if stat.Value > 0}
								<li class="item">
									{stat.Info} : {stat.Value}
								</li>
							{/if}
						{/if}

						<p hidden>
							{#if stat.Info == 'Services inactive'}
								{#if stat.Value > 0}
									{setServicesTrue()}
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
							{num.name} : {num.resto}
						</li>
					{/each}
				</ol>
			</div>
		</div>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
	{#await promise}
		<p>Loading...</p>
	{:then status}
		{#each status as stat}
			{#if stat.Info == 'Services inactive'}
				{#if stat.Value > 0}
					<p hidden>
						{setServicesTrue()}
						{setMessage('There are Services Inactive!')}
					</p>
				{/if}
			{:else if stat.Info == 'Messages in error'}
				{#if stat.Value > 0}
					<p hidden>
						{setServicesTrue()}
						{setMessage('There are Messages in error!')}
					</p>
				{/if}
			{:else if stat.Info == 'Jobs in error'}
				{#if stat.Value > 0}
					<p hidden>
						{setServicesTrue()}
						{setMessage('There are Jobs in error!')}
					</p>
				{/if}
			{/if}
		{/each}
		<div style="display: flex; justify-content: center;">
			<div class="card">
				<h1 class="text-4xl text-begin uppercase" style="color:red">Agro</h1>
				<p class="text-2xl text-begin uppercase">Mensagens</p>
				<ol style="margin: 10px">
					{#each status as stat}
						{#if stat.Info == 'Services inactive'}
							{#if stat.Value > 0}
								<li class="item">
									{stat.Info} : {stat.Value}
								</li>
							{/if}
						{:else if stat.Info == 'Messages in error'}
							{#if stat.Value > 0}
								<li class="item">
									{stat.Info} : {stat.Value}
								</li>
							{/if}
						{:else if stat.Info == 'Jobs in error'}
							{#if stat.Value > 0}
								<li class="item">
									{stat.Info} : {stat.Value}
								</li>
							{/if}
						{/if}

						<p hidden>
							{#if stat.Info == 'Services inactive'}
								{#if stat.Value > 0}
									{setServicesTrue()}
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
							{num.name} : {num.resto}
						</li>
					{/each}
				</ol>
			</div>
		</div>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}

	{#await promise}
		<p>Loading...</p>
	{:then status}
		{#each status as stat}
			{#if stat.Info == 'Services inactive'}
				{#if stat.Value > 0}
					<p hidden>
						{setServicesTrue()}
						{setMessage('There are Services Inactive!')}
					</p>
				{/if}
			{:else if stat.Info == 'Messages in error'}
				{#if stat.Value > 0}
					<p hidden>
						{setServicesTrue()}
						{setMessage('There are Messages in error!')}
					</p>
				{/if}
			{:else if stat.Info == 'Jobs in error'}
				{#if stat.Value > 0}
					<p hidden>
						{setServicesTrue()}
						{setMessage('There are Jobs in error!')}
					</p>
				{/if}
			{/if}
		{/each}
		<div style="display: flex; justify-content: center;">
			<div class="card">
				<h1 class="text-4xl text-begin uppercase" style="color:red">Daufood</h1>
				<p class="text-2xl text-begin uppercase">Mensagens</p>
				<ol style="margin: 10px">
					{#each status as stat}
						{#if stat.Info == 'Services inactive'}
							{#if stat.Value > 0}
								<li class="item">
									{stat.Info} : {stat.Value}
								</li>
							{/if}
						{:else if stat.Info == 'Messages in error'}
							{#if stat.Value > 0}
								<li class="item">
									{stat.Info} : {stat.Value}
								</li>
							{/if}
						{:else if stat.Info == 'Jobs in error'}
							{#if stat.Value > 0}
								<li class="item">
									{stat.Info} : {stat.Value}
								</li>
							{/if}
						{/if}

						<p hidden>
							{#if stat.Info == 'Services inactive'}
								{#if stat.Value > 0}
									{setServicesTrue()}
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
							{num.name} : {num.resto}
						</li>
					{/each}
				</ol>
			</div>
		</div>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
</div>

<Ref />
<style>
	@keyframes blink { 50% { border-color:#fff ; }  }
	.card {
		display: grid;
		box-shadow: 10px 10px 120px 10px rgba(0, 0, 0, 0.2), 0 6px 100px 0 rgba(0, 0, 0, 0.19); 
		text-align: center; 
		padding: 20px 60px; 
		margin: 20px
	}
	.item{
		border: 4px solid rgb(226, 40, 40); 
		border-radius: 10px;
		margin-top: 1px; 
		padding: 12px;  
		color: black;
		animation: blink 2s linear infinite;
	}
</style>

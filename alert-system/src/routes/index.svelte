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

	console.log('SERVICE STOPPED : ' + isAnyServiceStopped);
	/*promisse.forEach(status => {
		if(status.Info=="Services inactive"){
			if(status.Value > 0){
				isAnyServiceStopped = true;
			}
		}
	});*/
	console.log('isAnyServiceStopped ' + isAnyServiceStopped);
	import { numeradores } from '../stores/numeradores';

	function setServicesTrue() {
		isAnyServiceStopped = true;
		console.log('Set ' + isAnyServiceStopped);
	}
	import './index.scss';
	import Ref from '../components/refresh.svelte';

</script>




{#if isAnyServiceStopped == true}
	<div style="padding: 20px; background-color: #f44336; color: white;">
		<strong>Atenção!</strong> Existem serviços parados
		<span
			style="margin-left: 15px;
		color: white;
		font-weight: bold;
		float: right;
		font-size: 22px;
		line-height: 20px;
		cursor: pointer;
		transition: 0.3s;"
			onclick="this.parentElement.style.display='none';">&times;</span
		>
	</div>
{/if}

<div style="display: flex; justify-content: center;">
	<div
		style="display: grid;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		text-align: center; padding: 20px 60px; margin: 20px"
	>
		<h1 class="text-4xl text-begin uppercase" style="color:red">IS Retail</h1>
		<p class="text-2xl text-begin uppercase">Mensagens</p>
		<ol style="margin: 10px">
			{#await promise}
				<p>Loading...</p>
			{:then status}
				{#each status as stat}
					<li
						style="border: 1px solid #ddd;
					margin-top: -1px; /* Prevent double borders */
					background-color: #C9C0BE;
					padding: 12px;  color: red"
					>
						{stat.Info} : {stat.Value}
					</li>
					<p hidden>
						{#if stat.Info == 'Services inactive'}
							{#if stat.Value > 0}
								{setServicesTrue()}
							{/if}
						{/if}
					</p>
				{/each}
			{:catch error}
				<p style="color: red">{error.message}</p>
			{/await}
		</ol>
		<p class="text-2xl text-begin uppercase; margin: 10px">Numeradores a acabar</p>
		<ol style="margin: 10px">
			{#each $numeradores as num}
				<li
					style="border: 1px solid #ddd;
			margin-top: -1px; /* Prevent double borders */
			background-color: #C9C0BE;
			padding: 12px;  color: red"
				>
					{num.name} : {num.resto}
				</li>
			{/each}
		</ol>
	</div>

	<div
		style="display: grid;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	text-align: center; padding: 20px 60px; margin: 20px"
	>
		<h1 class="text-4xl text-begin uppercase" style="color:red">AGRO</h1>
		<p class="text-2xl text-begin uppercase">Mensagens</p>
		<ol style="margin: 10px">
			{#await promise}
				<p>Loading...</p>
			{:then status}
				{#each status as stat}
					<li
						style="border: 1px solid #ddd;
				margin-top: -1px; /* Prevent double borders */
				background-color: #C9C0BE;
				padding: 12px;  color: red"
					>
						{stat.Info} : {stat.Value}
					</li>
					<p hidden>
						{#if stat.Info == 'Services inactive'}
							{#if stat.Value > 0}
								{setServicesTrue()}
							{/if}
						{/if}
					</p>
				{/each}
			{:catch error}
				<p style="color: red">{error.message}</p>
			{/await}
		</ol>
		<p class="text-2xl text-begin uppercase; margin: 10px">Numeradores a acabar</p>
		<ol style="margin: 10px">
			{#each $numeradores as num}
				<li
					style="border: 1px solid #ddd;
		margin-top: -1px; /* Prevent double borders */
		background-color: #C9C0BE;
		padding: 12px;  color: red"
				>
					{num.name} : {num.resto}
				</li>
			{/each}
		</ol>
	</div>
	<div
		style="display: grid;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		text-align: center; padding: 20px 60px; margin: 20px"
	>
		<h1 class="text-4xl text-begin uppercase" style="color:red">STAPLES</h1>
		<p class="text-2xl text-begin uppercase">Mensagens</p>
		<ol style="margin: 10px">
			{#await promise}
				<p>Loading...</p>
			{:then status}
				{#each status as stat}
					<li
						style="border: 1px solid #ddd;
					margin-top: -1px; /* Prevent double borders */
					background-color: #C9C0BE;
					padding: 12px;  color: red"
					>
						{stat.Info} : {stat.Value}
					</li>
					<p hidden>
						{#if stat.Info == 'Services inactive'}
							{#if stat.Value > 0}
								{setServicesTrue()}
							{/if}
						{/if}
					</p>
				{/each}
			{:catch error}
				<p style="color: red">{error.message}</p>
			{/await}
		</ol>
		<p class="text-2xl text-begin uppercase; margin: 10px">Numeradores a acabar</p>
		<ol style="margin: 10px">
			{#each $numeradores as num}
				<li
					style="border: 1px solid #ddd;
			margin-top: -1px; /* Prevent double borders */
			background-color: #C9C0BE;
			padding: 12px;  color: red"
				>
					{num.name} : {num.resto}
				</li>
			{/each}
		</ol>
	</div>
	<div
		style="display: grid;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		text-align: center; padding: 20px 60px; margin: 20px"
	>
		<h1 class="text-4xl text-begin uppercase" style="color:red">DAUFOOD</h1>
		<p class="text-2xl text-begin uppercase">Mensagens</p>
		<ol style="margin: 10px">
			{#await promise}
				<p>Loading...</p>
			{:then status}
				{#each status as stat}
					<li
						style="border: 1px solid #ddd;
					margin-top: -1px; /* Prevent double borders */
					background-color: #C9C0BE;
					padding: 12px;  color: red"
					>
						{stat.Info} : {stat.Value}
					</li>
					<p hidden>
						{#if stat.Info == 'Services inactive'}
							{#if stat.Value > 0}
								{setServicesTrue()}
							{/if}
						{/if}
					</p>
				{/each}
			{:catch error}
				<p style="color: red">{error.message}</p>
			{/await}
		</ol>
		<p class="text-2xl text-begin uppercase; margin: 10px">Numeradores a acabar</p>
		<ol style="margin: 10px">
			{#each $numeradores as num}
				<li
					style="border: 1px solid #ddd;
			margin-top: -1px; /* Prevent double borders */
			background-color: #C9C0BE;
			padding: 12px;  color: red"
				>
					{num.name} : {num.resto}
				</li>
			{/each}
		</ol>
	</div>
</div>

<Ref/>

<!--
<div style="padding: 20px; background-color: #f44336; color: white;">
	<strong>Atenção!</strong> Existem serviços parados
	<span style="margin-left: 15px;
	color: white;
	font-weight: bold;
	float: right;
	font-size: 22px;
	line-height: 20px;
	cursor: pointer;
	transition: 0.3s;" onclick="this.parentElement.style.display='none';">&times;</span> 
  </div>
<h1 class="text-4xl text-center my-8 uppercase">Sistema de alertas</h1>
<div style="display: flex; justify-content: center;">
	<div style="display: grid;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	text-align: center; padding: 0px 60px; margin: 20px">
		<h1 class="text-4xl text-begin uppercase"  style="color:red">IS Retail</h1>
		<p class="text-2xl text-begin uppercase">Serviços</p>
		<div style="display: grid; align-items: center;">
			<Section style="margin: 0px">
				<p>Serviço Batch 1</p>
				<IconButton class="material-icons" >
					<Icon component={Svg} viewBox="0 0 24 24">
						<path fill="red" d={mdiCircle} />
					</Icon>
				</IconButton>
			</Section>
			<Section style="margin: 0px">
				<p>Serviço Batch 2</p>
				<IconButton class="material-icons" size="normal" >
					<Icon component={Svg} viewBox="0 0 24 24" >
						<path fill="green" d={mdiCircle} />
					</Icon>
				</IconButton>
			</Section>
			<Section style="margin: 0px">
				<p>Serviço Batch 3</p>
				<IconButton class="material-icons" size="normal" >
					<Icon component={Svg} viewBox="0 0 24 24" >
						<path fill="green" d={mdiCircle} />
					</Icon>
				</IconButton>
			</Section>
		</div>
		<p class="text-2xl text-begin uppercase">Numeradores</p>
		<div style="display: flex; align-items: center;">
			<Section style="margin: 0px">
				<ui  style="list-style-type: none;">
					<li style="border: 1px solid #ddd;
					margin-top: -1px; /* Prevent double borders */
					background-color: #C9C0BE; /* Grey background on top of the list items */
					padding: 12px;">
						Numerador XPTO: 759
					</li>
					<li style="border: 1px solid #ddd;
					margin-top: -1px; /* Prevent double borders */
					background-color: #C9C0BE;
					padding: 12px;  color: red">
						Numerador XPTO2: 10
					</li>
					<li style="border: 1px solid #ddd;
					margin-top: -1px; /* Prevent double borders */
					background-color: #C9C0BE;
					padding: 12px; color: red">
						Numerador XPTO3: 0
					</li>
				</ui>
			</Section>
		</div>
		<p class="text-2xl text-begin uppercase">Erros</p>
		<div style="display: flex; align-items: center;">
			<Section style="margin: 0px">
				<ui  style="list-style-type: none; width: 100%;">
					<li style="border: 1px solid #ddd;
					margin-top: -1px; /* Prevent double borders */
					background-color: #C9C0BE;
					padding: 12px;">
						Mensagens: 759
					</li>
					<li style="border: 1px solid #ddd;
					margin-top: -1px; /* Prevent double borders */
					background-color: #C9C0BE;
					padding: 12px;">
						Trabalhos: 10
					</li>
				</ui>
			</Section>
		</div>
	</div>
	<div style="display: grid;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	text-align: center; padding: 0px 60px; margin: 20px">
		<h1 class="text-4xl text-begin uppercase"  style="color:red">Agros</h1>
		<p class="text-2xl text-begin uppercase">Serviços</p>
		<div style="display: grid; align-items: center;">
			<Section style="margin: 0px">
				<p>Serviço Batch 1</p>
				<IconButton class="material-icons" >
					<Icon component={Svg} viewBox="0 0 24 24">
						<path fill="red" d={mdiCircle} />
					</Icon>
				</IconButton>
			</Section>
			<Section style="margin: 0px">
				<p>Serviço Batch 2</p>
				<IconButton class="material-icons" size="normal" >
					<Icon component={Svg} viewBox="0 0 24 24" >
						<path fill="green" d={mdiCircle} />
					</Icon>
				</IconButton>
			</Section>
			<Section style="margin: 0px">
				<p>Serviço Batch 3</p>
				<IconButton class="material-icons" size="normal" >
					<Icon component={Svg} viewBox="0 0 24 24" >
						<path fill="green" d={mdiCircle} />
					</Icon>
				</IconButton>
			</Section>
		</div>
		<p class="text-2xl text-begin uppercase">Numeradores</p>
		<div style="display: flex; align-items: center;">
			<Section style="margin: 0px">
				<ui  style="list-style-type: none;">
					<li style="border: 1px solid #ddd;
					margin-top: -1px; /* Prevent double borders */
					background-color: #C9C0BE; /* Grey background on top of the list items */
					padding: 12px;">
						Numerador XPTO: 759
					</li>
					<li style="border: 1px solid #ddd;
					margin-top: -1px; /* Prevent double borders */
					background-color: #C9C0BE;
					padding: 12px;  color: red">
						Numerador XPTO2: 10
					</li>
					<li style="border: 1px solid #ddd;
					margin-top: -1px; /* Prevent double borders */
					background-color: #C9C0BE;
					padding: 12px; color: red">
						Numerador XPTO3: 0
					</li>
				</ui>
			</Section>
		</div>
		<p class="text-2xl text-begin uppercase">Erros</p>
		<div style="display: flex; align-items: center;">
			<Section style="margin: 0px">
				<ui  style="list-style-type: none; width: 100%;">
					<li style="border: 1px solid #ddd;
					margin-top: -1px; /* Prevent double borders */
					background-color: #C9C0BE;
					padding: 12px;">
						Mensagens: 759
					</li>
					<li style="border: 1px solid #ddd;
					margin-top: -1px; /* Prevent double borders */
					background-color: #C9C0BE;
					padding: 12px;">
						Trabalhos: 10
					</li>
				</ui>
			</Section>
		</div>
	</div>
	<div style="display: grid;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	text-align: center; padding: 0px 60px; margin: 20px">
		<h1 class="text-4xl text-begin uppercase"  style="color:red">Daufood</h1>
		<p class="text-2xl text-begin uppercase">Serviços</p>
		<div style="display: grid; align-items: center;">
			<Section style="margin: 0px">
				<p>Serviço Batch 1</p>
				<IconButton class="material-icons" >
					<Icon component={Svg} viewBox="0 0 24 24">
						<path fill="red" d={mdiCircle} />
					</Icon>
				</IconButton>
			</Section>
			<Section style="margin: 0px">
				<p>Serviço Batch 2</p>
				<IconButton class="material-icons" size="normal" >
					<Icon component={Svg} viewBox="0 0 24 24" >
						<path fill="green" d={mdiCircle} />
					</Icon>
				</IconButton>
			</Section>
			<Section style="margin: 0px">
				<p>Serviço Batch 3</p>
				<IconButton class="material-icons" size="normal" >
					<Icon component={Svg} viewBox="0 0 24 24" >
						<path fill="green" d={mdiCircle} />
					</Icon>
				</IconButton>
			</Section>
		</div>
		<p class="text-2xl text-begin uppercase">Numeradores</p>
		<div style="display: flex; align-items: center;">
			<Section style="margin: 0px">
				<ui  style="list-style-type: none;">
					<li style="border: 1px solid #ddd;
					margin-top: -1px; /* Prevent double borders */
					background-color: #C9C0BE; /* Grey background on top of the list items */
					padding: 12px;">
						Numerador XPTO: 759
					</li>
					<li style="border: 1px solid #ddd;
					margin-top: -1px; /* Prevent double borders */
					background-color: #C9C0BE;
					padding: 12px;  color: red">
						Numerador XPTO2: 10
					</li>
					<li style="border: 1px solid #ddd;
					margin-top: -1px; /* Prevent double borders */
					background-color: #C9C0BE;
					padding: 12px; color: red">
						Numerador XPTO3: 0
					</li>
				</ui>
			</Section>
		</div>
		<p class="text-2xl text-begin uppercase">Erros</p>
		<div style="display: flex; align-items: center;">
			<Section style="margin: 0px">
				<ui  style="list-style-type: none; width: 100%;">
					<li style="border: 1px solid #ddd;
					margin-top: -1px; /* Prevent double borders */
					background-color: #C9C0BE;
					padding: 12px;">
						Mensagens: 759
					</li>
					<li style="border: 1px solid #ddd;
					margin-top: -1px; /* Prevent double borders */
					background-color: #C9C0BE;
					padding: 12px;">
						Trabalhos: 10
					</li>
				</ui>
			</Section>
		</div>
	</div>
	<div style="display: grid;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	text-align: center; padding: 0px 60px; margin: 20px">
		<h1 class="text-4xl text-begin uppercase"  style="color:red">Staples</h1>
		<p class="text-2xl text-begin uppercase">Serviços</p>
		<div style="display: grid; align-items: center;">
			<Section style="margin: 0px">
				<p>Serviço Batch 1</p>
				<IconButton class="material-icons" >
					<Icon component={Svg} viewBox="0 0 24 24">
						<path fill="red" d={mdiCircle} />
					</Icon>
				</IconButton>
			</Section>
			<Section style="margin: 0px">
				<p>Serviço Batch 2</p>
				<IconButton class="material-icons" size="normal" >
					<Icon component={Svg} viewBox="0 0 24 24" >
						<path fill="green" d={mdiCircle} />
					</Icon>
				</IconButton>
			</Section>
			<Section style="margin: 0px">
				<p>Serviço Batch 3</p>
				<IconButton class="material-icons" size="normal" >
					<Icon component={Svg} viewBox="0 0 24 24" >
						<path fill="green" d={mdiCircle} />
					</Icon>
				</IconButton>
			</Section>
		</div>
		<p class="text-2xl text-begin uppercase">Numeradores</p>
		<div style="display: flex; align-items: center;">
			<Section style="margin: 0px">
				<ui  style="list-style-type: none;">
					<li style="border: 1px solid #ddd;
					margin-top: -1px; /* Prevent double borders */
					background-color: #C9C0BE; /* Grey background on top of the list items */
					padding: 12px;">
						Numerador XPTO: 759
					</li>
					<li style="border: 1px solid #ddd;
					margin-top: -1px; /* Prevent double borders */
					background-color: #C9C0BE;
					padding: 12px;  color: red">
						Numerador XPTO2: 10
					</li>
					<li style="border: 1px solid #ddd;
					margin-top: -1px; /* Prevent double borders */
					background-color: #C9C0BE;
					padding: 12px; color: red">
						Numerador XPTO3: 0
					</li>
				</ui>
			</Section>
		</div>
		<p class="text-2xl text-begin uppercase">Erros</p>
		<div style="display: flex; align-items: center;">
			<Section style="margin: 0px">
				<ui  style="list-style-type: none; width: 100%;">
					<li style="border: 1px solid #ddd;
					margin-top: -1px; /* Prevent double borders */
					background-color: #C9C0BE;
					padding: 12px;">
						Mensagens: 759
					</li>
					<li style="border: 1px solid #ddd;
					margin-top: -1px; /* Prevent double borders */
					background-color: #C9C0BE;
					padding: 12px;">
						Trabalhos: 10
					</li>
				</ui>
			</Section>
		</div>
	</div>
</div>
-->

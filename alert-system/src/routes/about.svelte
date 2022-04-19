<script>
    import GoogleChartPie from "../components/chart.svelte";
    import DataVisualization from "../components/dataVisualization.svelte";
</script>
<svelte:head>
    <title>Detalhes</title>
</svelte:head>
<div style="width: 100%; display: flex; align-items: center; justify-content:center;">
	<DataVisualization />
    <GoogleChartPie
    cols=2
    rows=2
    title="Earning Per Story"
    sliceVisibilityThreshold={2.5 / 100}
    />
</div>

  
  
<script>
    import DataVisualization from "../components/dataVisualization.svelte";

    import { retailCpu } from '../stores/isRetailCpu';
    import {get} from 'svelte/store';

</script>
<svelte:head>
    <title>Detalhes</title>
</svelte:head>
<div style="width: 100%; display: flex; align-items: center; justify-content:center;">
	<DataVisualization />
</div>

  
  
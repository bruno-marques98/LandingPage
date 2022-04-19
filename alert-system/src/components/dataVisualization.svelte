<!-- svelte-ignore a11y-missing-attribute -->

   <script type="text/javascript">
      /*import { retailCpu } from '../stores/isRetailCpu';  
      let cpuValue = 0;
      console.log(cpuValue);
      google.charts.load('current', {'packages':['gauge']});
      google.charts.setOnLoadCallback(drawChart);
      /*let value = retailCpu.value;
      console.log("value: " + value);
      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['CPU', cpuValue]
        ]);

        var options = {
          width: 800, height: 240,
          redFrom: 90, redTo: 100,
          yellowFrom:75, yellowTo: 90,
          minorTicks: 5
        };

        var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

        chart.draw(data, options);

        setInterval(function() {
          data.setValue(0,1,cpuValue);
          chart.draw(data, options);
        }, 1000);
        
      }*/
    </script>
   <!--<body>
  
    <h1 style="color:green; text-align: center;text-transform: uppercase;font-size: 350%;">IsRetail</h1>
    {#each $retailCpu as cpu}
      {cpuValue=cpu.value*100}
      <div id="chart_div" style="display: flex; align-items: center; width: 800px; height: 240px;"></div>
    {/each}
    <div id="chart_div" style="display: flex; align-items: center; width: 800px; height: 240px;"></div>
  </body>-->
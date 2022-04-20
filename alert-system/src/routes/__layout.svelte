<script lang="ts">
    import Nav from "../components/Nav.svelte";

    import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
    import IconButton, {Icon} from '@smui/icon-button';
    import {mdiMenu} from '@mdi/js';
    import {Svg} from '@smui/common/elements';
    
    let prominent = false;
    let dense = false;
</script>
<div>
    <div class="flexy">

      <div class="navbar">
        <div class="link">
          <a href="/">Alertas</a>
        </div>
        <div class="link">
          <a href="/dataview">Performance</a>
        </div>
      </div>
      
    </div>
    <slot></slot>   
</div>
<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    .navbar{
      background-color: rgb(0, 160, 247);
      display: inline-block;
      width: 100%;
    }

    .navbar .link{
      text-decoration: none;
      color: white;
      font-size: large;
      margin-left: 10px;
      padding: 10px;
      float: left;
    }

    .navbar .link a{
      color: white;
    }

    .navbar .link :hover{
      text-decoration: underline;
    }
</style>
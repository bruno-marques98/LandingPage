<script lang="ts">
    import Nav from "../components/Nav.svelte";
    import DataVisualization from "../components/dataVisualization.svelte";

    import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
    import IconButton, {Icon} from '@smui/icon-button';
    import {mdiMenu} from '@mdi/js';
    import {Svg} from '@smui/common/elements';
    
    let prominent = false;
    let dense = false;
</script>
<div>
    <div class="flexy">
        <div class="top-app-bar-container">
          <TopAppBar
            variant="static"
            {prominent}
            {dense}
            color='primary'
          >
            <Row>
              <Section>
                <IconButton class="material-icons">
                    <Icon component={Svg} viewBox="0 0 24 24">
                        <path fill="currentColor" d={mdiMenu} />
                      </Icon>
                </IconButton>
              </Section>
              <Section>
                  <Nav />
              </Section>
              <Section align="end" toolbar>
                <IconButton class="material-icons" aria-label="Download"
                  >file_download</IconButton
                >
                <IconButton class="material-icons" aria-label="Print this page"
                  >print</IconButton
                >
                <IconButton class="material-icons" aria-label="Bookmark this page"
                  >bookmark</IconButton
                >
              </Section>
            </Row>
          </TopAppBar>
        </div>
    </div>
    <slot></slot>   
</div>
<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
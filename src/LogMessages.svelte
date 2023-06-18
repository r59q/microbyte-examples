<script>
    import SectionContainer from './SectionContainer.svelte';
    import { messages } from './util';
</script>

<SectionContainer title="Log messages">
    <div style="margin-top: 1rem;">
        {#each $messages as msg}
            <p class="log-msg">{msg}</p>
        {/each}
    </div>
</SectionContainer>

<style>
    .log-msg {
        font-size: 12px;
        margin: 0;
    }
</style>

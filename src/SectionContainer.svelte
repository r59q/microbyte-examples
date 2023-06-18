<script lang="ts">
    export let title: string
</script>

<div class="container">
    <div style="width:100%" class="row container-row">
        <div class="column">
            <h4>{title}</h4>
            <slot />
        </div>
    </div>
</div>

<style>
    .container {
        margin: 1rem 2rem 2rem 2rem;
    }
    .container-row {
        border-width: 0px 0px 1px 0px;
        border-color: #a1a1a1;
        padding-bottom: 1rem;
        width: 100%;
        border-style: solid;
    }
</style>

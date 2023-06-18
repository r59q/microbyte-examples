<script lang="ts">
    import LogMessages from './LogMessages.svelte';
    import SectionContainer from './SectionContainer.svelte';
    import BluetoothConnection from './examples/BluetoothConnection.svelte';
</script>

<div class="column">
    <SectionContainer title="Bluetooth connection">
        <BluetoothConnection />
    </SectionContainer>
    <LogMessages />
</div>

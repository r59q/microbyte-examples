<script lang="ts">
    import LogMessages from './LogMessages.svelte';
    import SectionContainer from './SectionContainer.svelte';
    import BluetoothByNameConnection from './examples/BluetoothByNameConnection.svelte';
    import BluetoothConnection from './examples/BluetoothConnection.svelte';
</script>

<div class="column">
    <SectionContainer title="Bluetooth connection">
        <BluetoothConnection />
    </SectionContainer>
    <SectionContainer title="Bluetooth connection using name">
        <BluetoothByNameConnection />
    </SectionContainer>
    <LogMessages />
</div>

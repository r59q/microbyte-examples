<script lang="ts">
    import LogMessages from './LogMessages.svelte';
    import SectionContainer from './SectionContainer.svelte';
    import BluetoothByNameConnection from './examples/BluetoothByNameConnection.svelte';
    import BluetoothByPatternConnection from './examples/BluetoothByPatternConnection.svelte';
    import BluetoothConnection from './examples/BluetoothConnection.svelte';
    import ReadingAccelerometer from './examples/ReadingAccelerometer.svelte';
</script>

<div class="column">
    <SectionContainer title="Bluetooth connection">
        <BluetoothConnection />
    </SectionContainer>

    <SectionContainer title="Bluetooth connection using name">
        <BluetoothByNameConnection />
    </SectionContainer>

    <SectionContainer title="Bluetooth connection using pairing pattern">
        <BluetoothByPatternConnection />
    </SectionContainer>

    <SectionContainer title="Reading accelerometer data">
        <ReadingAccelerometer />
    </SectionContainer>

    <LogMessages />
</div>

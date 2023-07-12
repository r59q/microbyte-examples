<script lang="ts">
    import { Microbit } from 'microbyte';
    import { addMessage } from '../util';

    let microbitName = '';

    const onConnectButtonClick = () => {
        if (microbitName.length != 5) {
            addMessage(
                `Error: Microbit names are expected to be of length 5, saw length ${microbitName.length}`
            );
            return;
        }

        addMessage('Connecting...');

        const microbit = new Microbit();
        microbit.requestBluetooth(
            microbitName,
            () => {
                addMessage('Connection successful!');
            },
            (reason) => {
                addMessage('Failed to connect!');
                addMessage(reason);
            }
        );
    };
</script>

<p>Connect via bluetooth to a microbit.</p>
<p>Enter the name of microbit</p>
<input bind:value={microbitName} placeholder="Name of microbit" />
<button on:click={onConnectButtonClick}>Click me to connect</button>

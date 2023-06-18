<script lang="ts">
    import { Microbit } from 'microbyte';
    import { addMessage } from '../util';

    const onConnectButtonClick = () => {
        addMessage('Connecting...');
        const microbit = new Microbit();
        microbit.requestBluetooth(
            undefined, // Providing no name finds all microbits
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

<p>Connect via bluetooth to a microbit</p>
<button on:click={onConnectButtonClick}>Click me to connect</button>

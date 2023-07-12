<script lang="ts">
    import { Accelerometer, Microbit } from 'microbyte';
    import { addMessage } from '../util';

    let xVal = 0;
    let yVal = 0;
    let zVal = 0;

    const onConnectButtonClick = async () => {
        addMessage('Connecting...');
        const microbit = new Microbit([Accelerometer]); // Specify accelerometer service is needed
        await microbit.requestBluetooth();

        if (microbit.isBluetoothConnected()) {
            addMessage('Connection succeeded');
            microbit.getService(Accelerometer).listenForChange((x, y, z) => {
                xVal = x;
                yVal = y;
                zVal = z;
            });
        }
    };
</script>

<p>Connect via bluetooth to a microbit</p>
<button on:click={onConnectButtonClick}>Click me to connect</button>
<p>{`x: ${xVal} y: ${yVal} z: ${zVal}`}</p>

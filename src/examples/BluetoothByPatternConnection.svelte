<script lang="ts">
    import { Microbit, PairingPattern } from 'microbyte';
    import { addMessage } from '../util';
    import { each } from 'svelte/internal';

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

    let pattern: boolean[][] = [
        [false, true, true, false, false],
        [true, true, true, true, false],
        [true, true, true, true, false],
        [true, true, true, true, true],
        [true, true, true, true, true],
    ];

    microbitName = PairingPattern.patternToName(pattern);

    const cellSelected = (y: number, x: number): undefined => {
        for (let i = 0; i < y; i++) {
            pattern[i][x] = false;
        }
        for (let i = y; i < 5; i++) {
            pattern[i][x] = true;
        }
        microbitName = PairingPattern.patternToName(pattern);
    };
</script>

<p>Connect via bluetooth to a microbit.</p>
<div class="row">
    <div class="col paddedColumn">
        <!--We add rows-->
        {#each pattern as line, i}
            <div class="row">
                <!--For each row we make 5 cells, giving us a 5x5 matrix-->
                {#each line as cellValue, j}
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <div
                        class="cell"
                        class:cell-unselected={!cellValue}
                        class:cell-selected={cellValue}
                        on:click={() => cellSelected(i, j)}
                    />
                {/each}
            </div>
        {/each}
    </div>
    <div class="paddedColumn">
        <p>---> {microbitName}</p>
    </div>
</div>

<button on:click={onConnectButtonClick}>Click me to connect</button>

<style>
    .paddedColumn {
        margin-right: 16px;
        margin-top: auto;
        margin-bottom: auto;
    }

    .cell {
        width: 32px;
        height: 32px;
        border-radius: 5px;
        margin: 4px;
    }

    .cell-unselected {
        background-color: #142d42;
    }

    .cell-selected {
        background-color: #2391ff;
    }
</style>

import { writable } from 'svelte/store';

export const messages = writable<string[]>([]);

export const addMessage = (message: string) => {
    messages.update((s) => {
        s.push(message);
        return s;
    });
};

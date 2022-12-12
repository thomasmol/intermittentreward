import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const chance = writable((browser && parseInt(localStorage.getItem('chance') || '2')) || 2);
chance.subscribe((value) => browser && (localStorage.chance = value.toString()));

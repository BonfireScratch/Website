<script lang="ts">
	import { onMount } from 'svelte';
	import VariableLetter from './VariableLetter.svelte';

	export let text: string;
	export let typing: boolean;
	let font: any;

	let letters = text.split('');

	onMount(() => {
		if (typing) {
			font.style.width = `${letters.length}ch`;
		}
	});
</script>

<div
	bind:this={font}
	class={`${typing === true ? 'typing translate-y-2 md:translate-y-2.5 lg:translate-y-3' : ''}`}
>
	{#each letters as letter}
		{#if letter === ' '}
			<span class="select-none">{letter}</span>
		{:else}
			<VariableLetter>{letter}</VariableLetter>
		{/if}
	{/each}
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');

	div {
		display: inline-block;
	}

	.typing {
		white-space: nowrap;
		overflow: hidden;
		border-right: 3px solid;
		font-family: 'Inconsolata', monospace;
		animation: typing 0.3s steps(6), blink 0.5s step-end infinite alternate;
	}

	@keyframes typing {
		from {
			width: 0;
		}
	}

	@keyframes blink {
		50% {
			border-color: transparent;
		}
	}
</style>

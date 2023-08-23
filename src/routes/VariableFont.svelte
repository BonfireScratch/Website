<script lang="ts">
	import VariableLetter from './VariableLetter.svelte';

	export let text: string;
	export let typing: boolean;
	let font: any;

	let letters = text.split('');
</script>

<div
	bind:this={font}
	class={`${typing === true ? 'typing translate-y-2 md:translate-y-2.5 lg:translate-y-3' : ''}`}
	style={`--length: ${letters.length}`}
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
		animation: typing 4.2s steps(6), blink 0.5s step-end infinite;
	}

	@keyframes typing {
		0%,
		50%,
		100% {
			width: 0;
		}

		10%,
		40% {
			width: calc(var(--length) * 1ch);
		}
	}

	@keyframes blink {
		50% {
			border-color: transparent;
		}
	}
</style>

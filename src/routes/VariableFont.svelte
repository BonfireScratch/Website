<script lang="ts">
  import VariableLetter from "./VariableLetter.svelte";
  
  export let text: any;
  let letters = text.split("");
</script>

{#each letters as letter}
  {#if letter === ' '}
    <span class="select-none">{letter}</span>
  {:else}
    <VariableLetter>{letter}</VariableLetter>
  {/if}
{/each}

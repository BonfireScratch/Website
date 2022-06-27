<svelte:head>
  <title>Diogenis Siganos</title>
</svelte:head>

<script>
  import Cursor, { handleMouseMove, handleMouseDown, handleMouseUp } from './Cursor.svelte';
  import Sidebar from './Sidebar.svelte';
  import VariableFont from './VariableFont.svelte';

  let outlineOpacities = ['opacity-20', 'opacity-30', 'opacity-50'];
</script>

<div class="bg-highlights-red">
  <Cursor />
  <main transition-style="in:circle:top-right" on:mousemove={handleMouseMove} on:mousedown={handleMouseDown} on:mouseup={handleMouseUp}>
    <Sidebar />
    <header class="md:flex bg-background-blue">
      <div class="container mx-auto relative h-max py-48">
        <div class="sm:ml-24">
          {#each outlineOpacities as opacity}
            <h1 class={`${opacity} text-center inverted-text text-background-blue sm:text-start`}>DIOGENIS SIGANOS.</h1>
          {/each}
          <h1 class="text-white text-center sm:text-start mb-4">
            <VariableFont text={'DIOGENIS SIGANOS.'} />
          </h1>
          <h2 class="text-highlights-red text-center sm:text-start pb-4">
            <VariableFont text={'I enjoy coding with JS.'} />
          </h2>
          <p class="text-white mx-4 sm:m-0 md:w-1/2">I'm a high school student with an ardent interest in STEM and film. Currently, I'm focused on augmenting my web development and designing skillset.</p>
        </div>
      </div>
      <div class="hidden lg:block">
        <svg class="h-screen" viewBox="0 0 725 990" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="664" y="-454" width="1270" height="940" rx="15" transform="rotate(45 663.973 -454)" fill="#ffffff"/>
        </svg>
      </div>
    </header>
    <!-- <div>
      <p class="text-background-blue">I'm a high school student with an ardent interest in STEM and film. Currently, I'm focused on augmenting my web development and designing skillset.</p>
    </div> -->
  </main>
</div>

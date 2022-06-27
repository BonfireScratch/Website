<script context="module" lang="ts">
  let cursor: any;
  
  export const handleMouseMove = (e: any) => {
    const mouseY = e.clientY;
    const mouseX = e.clientX;
     
    cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`; 
  }
  
  export const handleMouseDown = () => {
    cursor.style.setProperty('--cursor-size', '1.5'); 
  }
  
  export const handleMouseUp = () => {
    cursor.style.setProperty('--cursor-size', '1'); 
  }
</script>

<div class="cursor" bind:this={cursor} />

<style>
  .cursor {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    pointer-events: none;
    will-change: transform;
    transition: 0.3s transform cubic-bezier(0.39, 0.575, 0.565, 1);     
  }

  @media (pointer: fine) {
    .cursor {
      display: block;
    }
  }

  .cursor::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 5px solid #f14336;

    -webkit-transform: scale(var(--cursor-size));
            transform: scale(var(--cursor-size));
    transition: 0.3s opacity cubic-bezier(0.39, 0.575, 0.565, 1),
                0.3s transform cubic-bezier(0.39, 0.575, 0.565, 1),
                0.15s border-radius cubic-bezier(0.39, 0.575, 0.565, 1);
  }
</style>

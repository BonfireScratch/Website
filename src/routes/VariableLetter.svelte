<script>
  let animated = false;
</script>

<span class="select-none" class:text-animation="{animated === true}" on:mouseenter="{() => animated =  true}" on:animationend="{() => animated =  false}">
  <slot></slot>
</span>

<style>
  .text-animation {
    display: inline-block;
    animation: bounce 1s 1 forwards;
  }

  @keyframes bounce {
    from {
      transform: scale3d(1, 1, 1);
    }

    30% {
      transform: scale3d(1.25, 0.75, 1);
    }

    40% {
      transform: scale3d(0.75, 1.25, 1);
    }

    50% {
      transform: scale3d(1.15, 0.85, 1);
    }

    65% {
      transform: scale3d(.95, 1.05, 1);
    }

    75% {
      transform: scale3d(1.05, .95, 1);
    }

    to {
      transform: scale3d(1, 1, 1);
    }
  }
</style>

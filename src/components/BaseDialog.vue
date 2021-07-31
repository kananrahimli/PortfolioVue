<template>
  <teleport to="body">
    <div  class="backdrop"></div>
    
  </teleport>
</template>

<script>
export default {

};
</script>

<style scoped>

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;
}


</style>

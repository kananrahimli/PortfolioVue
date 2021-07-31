<template>
  <div class="base-container">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.base-container {
  margin-left: 13.63rem;
  height: 100vh;
  width: 84%;
  background: #fff;
  position: relative;
  padding: 1rem;
  overflow-x: hidden;
}

@media screen and (max-width:768px) {
  .base-container {
    margin-left: 0;
    width: 100% !important;
  }
}
</style>

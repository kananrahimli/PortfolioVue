<template>
  <div class="base-card">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.base-card {
  border: 3px solid none;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 0px 2px 2px rgb(0, 0, 0,0.2);
  position: relative;
  padding: 2rem;
  width: 100%;
}

@media screen and (max-width:768px) {
  .base-card{
    width: 82% !important;
    margin-top: 5rem !important;
    padding: 1rem;
  }
}

</style>

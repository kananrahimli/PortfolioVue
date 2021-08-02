<template>
  <div :class="background">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props:{
    bgNoWhite:{
      type:Boolean,
      required:false,
      default:false
    }
  },
  computed:{
    background(){
      return {'base-container':!this.bgNoWhite,'base-container-2':this.bgNoWhite}
    }
  }
};
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

.base-container-2 {
  margin-left: 13.63rem;
  height: 100vh;
  width: 84%;
  background: #eaeaea;
  position: relative;
  padding: 1rem;
  overflow-x: hidden;
}

@media screen and (max-width:768px) {
  .base-container {
    margin-left: 0;
    width: 100% !important;
  }
  .base-container-2 {
    margin-left: 0;
    width: 100% !important;
  }
}
</style>

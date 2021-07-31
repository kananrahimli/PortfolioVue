<template>
  <div>
    <base-dialog v-if="showSpinner"></base-dialog>
    <base-spinner v-if="showSpinner"></base-spinner>
     <div id="app" v-if="!showSpinner">
    <Navigation></Navigation>
    
    <router-view  v-slot="slotProps">
      <transition name="router">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </div>
  </div>
 
</template>
<script>
import Navigation from "./layout/Navigation.vue";

export default {
  data(){
    return{
      showSpinner:true
    }
  },
  components: {
    Navigation: Navigation,
  },
  created(){
    

    setTimeout(() => {
      this.showSpinner=false
      this.$router.push('/home')
    }, 5000);
  }
};
</script>
<style>
/* @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap'); */
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
#app {
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
  font-family: 'Montserrat', sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  word-wrap: break-word;
}

.router-enter-from,.router-leave-to{

}
.router-enter-active{
  animation: router 0.5s ease-out ;
}
.router-leave-active{
   animation: router 0.5s ease-out reverse;
}
.router-leave-from,.router-enter-to{
  
}
@keyframes router {
  0%{
    opacity: 0;
    transform: scale(1);
  }
  50%{
    opacity: 0.5;
    transform: scale(0.5);
  }
  100%{
    opacity: 1;
    transform: scale(1);
  }
}
</style>

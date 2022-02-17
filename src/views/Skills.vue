<template>
  <base-container>
    <base-title title="Skills"></base-title>

    <div class="row container pt-5 mt-5 ml-1">
      <div
        class="col-md-6 d-flex justify-content-center flex-column "
        id="skillsTextContainer"
      >
        <h2><strong>My creative skills & experiences.</strong></h2>
        <p class="font-weight-bold">
          I've learned frontend web development for 1 year. I'm good at
          reading documentation, solving confused problems, making algorithmic
          logic . I'm continue to learning because i love my profession
        </p>
      </div>
      <div class="col-md-6 skillsContainer ">
        <span><i class="fab fa-html5"></i> Html5</span>
        <div class="progress mt-1 mb-4">
          <div
            class="progress-bar html"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            style="width: 80%"
          >
            <strong>80%</strong>
          </div>
        </div>
        <span><i class="fab fa-css3-alt"></i> Css3</span>
        <div class="progress mt-1 mb-4">
          <div
            class="progress-bar css"
            role="progressbar"
            aria-valuenow="40"
            aria-valuemin="0"
            aria-valuemax="100"
            style="width: 75%"
          >
            <strong>75%</strong>
          </div>
        </div>
        <span><i class="fab fa-sass"></i>Scss</span>
        <div class="progress mt-1 mb-4">
          <div
            class="progress-bar scss"
            role="progressbar"
            aria-valuenow="40"
            aria-valuemin="0"
            aria-valuemax="100"
            style="width: 60%"
          >
            <strong>60%</strong>
          </div>
        </div>
        <span><i class="fab fa-bootstrap"></i> Bootstrap 4</span>
        <div class="progress mt-1 mb-4">
          <div
            class="progress-bar bootstrap"
            role="progressbar"
            aria-valuenow="40"
            aria-valuemin="0"
            aria-valuemax="100"
            style="width: 80%"
          >
            <strong>80%</strong>
          </div>
        </div>
        <span><i class="fab fa-js-square"></i> Javascript</span>
        <div class="progress mt-1 mb-4">
          <div
            class="progress-bar js"
            role="progressbar"
            aria-valuenow="40"
            aria-valuemin="0"
            aria-valuemax="100"
            style="width: 75%"
          >
            <strong>70%</strong>
          </div>
        </div>
        <span><i class="fab fa-audible"></i> jQuery</span>
        <div class="progress mt-1 mb-4">
          <div
            class="progress-bar jquery"
            role="progressbar"
            aria-valuenow="40"
            aria-valuemin="0"
            aria-valuemax="100"
            style="width: 65%"
          >
            <strong>65%</strong>
          </div>
        </div>
        <span><i class="fab fa-vuejs"></i> VueJS</span>
        <div class="progress mt-1 mb-4">
          <div
            class="progress-bar vue"
            role="progressbar"
            aria-valuenow="40"
            aria-valuemin="0"
            aria-valuemax="100"
            style="width: 85%"
          >
            <strong>85%</strong>
          </div>
        </div>
        <span><i class="fab fa-vuejs"></i> Vuex</span>
        <div class="progress mt-1 mb-4">
          <div
            class="progress-bar vuex"
            role="progressbar"
            aria-valuenow="40"
            aria-valuemin="0"
            aria-valuemax="100"
            style="width: 85%"
          >
            <strong>85%</strong>
          </div>
        </div>
        <span><i class="fa-solid fa-r"></i> ReactJS(Hooks,Context Api)</span>
        <div class="progress mt-1 mb-4">
          <div
            class="progress-bar vue"
            role="progressbar"
            aria-valuenow="40"
            aria-valuemin="0"
            aria-valuemax="100"
            style="width: 75%"
          >
            <strong>75%</strong>
          </div>
        </div>
        <span><i class="fa-solid fa-r"></i> Redux</span>
        <div class="progress mt-1 mb-4">
          <div
            class="progress-bar vuex"
            role="progressbar"
            aria-valuenow="40"
            aria-valuemin="0"
            aria-valuemax="100"
            style="width: 65%"
          >
            <strong>65%</strong>
          </div>
        </div>
        <span><i class="fab fa-github"></i> Git</span>
        <div class="progress mt-1 mb-4">
          <div
            class="progress-bar git"
            role="progressbar"
            aria-valuenow="40"
            aria-valuemin="0"
            aria-valuemax="100"
            style="width: 70%"
          >
            <strong>70%</strong>
          </div>
        </div>
        <span><i class="fas fa-database"></i> Firebase</span>
        <div class="progress mt-1 mb-4">
          <div
            class="progress-bar firebase"
            role="progressbar"
            aria-valuenow="40"
            aria-valuemin="0"
            aria-valuemax="100"
            style="width: 60%"
          >
            <strong>60%</strong>
          </div>
        </div>
        <span ><i class="fab fa-figma"></i> Figma(LOW)</span>
        <div class="progress mt-1 mb-4">
          <div
            class="progress-bar figma"
            role="progressbar"
            aria-valuenow="40"
            aria-valuemin="0"
            aria-valuemax="100"
            style="width: 30%"
          >
            <strong>30%</strong>
          </div>
        </div>
      </div>
    </div>
  </base-container>
</template>

<script>
export default {};
</script>

<style scoped>
.progress-bar.css {
  background-color: #264DE4;
  color: black;
  height: 12px;
  animation: animate 0.5s linear ;
  animation-delay: 0.6s
  
}

.progress-bar.html {
  background-color: #DD4B25;
  color: black;
  height: 12px;
  animation: animate 0.5s linear ;
  animation-delay: 0.6s
  
}
.progress-bar.bootstrap {
  background-color: #8512F7;
  color: black;
  height: 12px;
  animation: animate 0.5s linear ;
  animation-delay: 0.6s
  
}
.progress-bar.js {
  background-color: #EFD81D;
  color: black;
  height: 12px;
  animation: animate 0.5s linear ;
  animation-delay: 0.6s
  
}
.progress-bar.jquery {
  background-color: #0865A6;
  color: black;
  height: 12px;
  animation: animate 0.5s linear ;
  animation-delay: 0.6s
  
}
.progress-bar.scss {
  background-color: #CD6799;
  color: black;
  height: 12px;
  animation: animate 0.5s linear ;
  animation-delay: 0.6s
  
}
.progress-bar.vue {
  background-color: #3FB27F;
  color: black;
  height: 12px;
  animation: animate 0.5s linear ;
  animation-delay: 0.6s
  
}
.progress-bar.vuex {
  background-color: #3FB27F;
  color: black;
  height: 12px;
  animation: animate 0.5s linear ;
  animation-delay: 0.6s
  
}
.progress-bar.firebase {
  background-color: #FFCB2B;
  color: black;
  height: 12px;
  animation: animate 0.5s linear ;
  animation-delay: 0.6s
  
}
.progress-bar.git {
  background-color: #E94E31;
  color: black;
  height: 12px;
  animation: animate 0.5s linear ;
  animation-delay: 0.6s
  
}
.progress-bar.figma {
  background: linear-gradient(90deg, rgba(25,182,246,1) 0%, rgba(10,201,127,1) 50%, rgba(247,110,95,1) 100%);
  
  color: black;
  height: 12px;
  animation: animate 0.5s linear ;
  animation-delay: 0.6s
  
}




@keyframes animate {
  0%{
    width: 0%;
  }
  50%{
    width: 50%;
  }
  100%{
    width: 100%;
  }
}
.progress i {
  font-size: 1rem;
  margin-right: 0.5rem;
}
.progress{
  height: 12px;
  border-radius: 16px;
  }

@media screen and (max-width: 768px) {
  #skillsTextContainer {
    margin-bottom: 1.5rem;
  }
}


</style>

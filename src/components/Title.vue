<template>
  <h4 class="title">{{title}}</h4>
</template>

<script>
export default {
 props:{
     title:{
         type:String,
         required:true
     }
 }
}
</script>

<style>
.title {
  position: absolute;
  top: 20px;
  left: 2rem;
  font-size: 3rem;
  font-weight: bold;
}

.title::after {
  content: "";
  position: absolute;
  background-color: #ff7f50;
  width: 40%;
  height: 0.3rem;
  left: 0rem;
  top: 55px;
}
.title::before {
  content: "";
  position: absolute;
  background-color: #ff7f50;
  width: 30%;
  height: 0.3rem;
  left: 0rem;
  top: 65px;
}
@media screen and (max-width:768px){
    .title {
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    font-weight: bold;
  }

  .title::after {
    content: "";
    position: absolute;
    background-color: #ff7f50;
    width: 30%;
    height: 0.3rem;
    left: 0rem;
    top: 55px;
  }
  .title::before {
    content: "";
    position: absolute;
    background-color: #ff7f50;
    width: 20%;
    height: 0.3rem;
    left: 0rem;
    top: 65px;
  }
}
</style>
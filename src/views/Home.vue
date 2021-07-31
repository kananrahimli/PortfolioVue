<template>
  <div class="home row ">
    <div class="image col-md-6 d-flex align-items-start">
      <img src="../assets/profile.jpg"  alt="" />
    </div>
    <div class="text col-md-6 text-center d-flex flex-column align-items-center">
      <h2 >Hi.I'm <br>  <span id="whoIam" style="font-size:3rem; font-weight: 900" >{{text}}</span></h2>
      <a href="#" class="btn btn-outline-info text-light mb-auto" @click="$router.push('/about')">More..</a>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            text:'Kanan Rahimli'
        }
    },
    created(){
        setInterval(() => {
            if(this.text==='Kanan Rahimli'){
                this.text='Frontend Developer'
            }else{
                this.text='Kanan Rahimli'
            }
        }, 3500);
    }
};
</script>
<style scoped>
.btn-outline-info{
  border: 1px solid #ff7f50 !important;
}
.btn-outline-info:hover{
  background-color: #ff7f50 !important;
}
.home {
  margin-left: 13.63rem;
  background-image: url("../assets/homeimg2.gif");
  width: 84%;
  background-repeat: no-repeat;
  position: relative;
  background-position: center;
  height: 100vh;
  overflow: hidden;
  /* background-size: cover; */
}
.home::after {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #576574;
  opacity: 0.7;
}
img{
    border-radius: 50%;
    width: 60%;
    margin-top: 1rem;
    margin-left: 1rem;
    animation: image 60s  infinite;
}
@keyframes image {
    0%{
        transform: rotateY(180deg);
    }
     50%{
        transform: rotateY(-180deg);
    }
     100%{
         transform: rotateY(0);
    }
}
.text h2{
    font-size: 2.5rem;
    margin-top: auto;
    color: black;
    animation: changeText 3000ms infinite;
}
@keyframes changeText {
    0%{
        opacity: 1;
        transform: scale(1);
    }
    50%{
        opacity: 0;
        transform: scale(0);
    }
    
    100%{
        opacity: 1;
        transform: scale(1);
    }
}
.text,
.image {
  z-index: 1;
}

@media screen and (max-width: 768px) {
  .home {
    margin-left: 0;
    width: 100% !important;
    height: 110vh;
  }
  img{
    border-radius: 50%;
    width: 60%;
    margin-top:5rem;
    margin-left: auto;
     margin-right: auto;
}
.text h2{
    font-size: 3rem;
    margin-top:4rem ;
    margin-bottom: 4rem;
    margin-left: auto;
    margin-right: auto;
}

}
</style>

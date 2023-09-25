<template>
  <div class="home row mx-0">
    <div class="image col-md-6 d-flex align-items-start">
      <img src="../assets/profile.jpg" alt="" />
    </div>
    <div
      class="text col-md-6 text-center d-flex flex-column align-items-center"
    >
      <h2>
        Hi.I'm 
        <span class="typed-text" style="font-size: 3rem; font-weight: 900">
          {{typeValue}}
          </span>
          <span class="cursor" :class="{'typing':typeStatus}">&nbsp;</span>
      </h2>
      <a
        href="#"
        class="btn btn-outline-info text-light mb-auto"
        @click="$router.push('/about')"
        >More..</a
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        typeValue: '',
        typeStatus: false,
        typeArray: ['Kanan Rahimli','Frontend Developer'],
        typingSpeed: 100,
        erasingSpeed: 100,
        newTextDelay: 2000,
        typeArrayIndex: 0,
        charIndex: 0
    };
  },
     methods: {
      typeText() {
        if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
          if(!this.typeStatus)
            this.typeStatus = true;
          this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
          this.charIndex += 1;
          setTimeout(this.typeText, this.typingSpeed);
        }
        else {
          this.typeStatus = false;
          setTimeout(this.eraseText, this.newTextDelay);
        }
      },
      eraseText() {
        if(this.charIndex > 0) {
          if(!this.typeStatus)
            this.typeStatus = true;
          this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
          this.charIndex -= 1;
          setTimeout(this.eraseText, this.erasingSpeed);
        }
        else {
          this.typeStatus = false;
          this.typeArrayIndex += 1;
          if(this.typeArrayIndex >= this.typeArray.length)
            this.typeArrayIndex = 0;
          setTimeout(this.typeText, this.typingSpeed + 1000);
        }
      }
    },
    created() {
      setTimeout(this.typeText, this.newTextDelay + 200);
    }
};
</script>
<style scoped>

h2 span.typed-text{
  color: #ff0505;
}

h2 span.cursor{
  display: inline-block;
  margin-left: 3px;
  width: 4px;
  background-color: #ff0505;
  animation: cursor 0.6s infinite;
}

h2 span.cursor.typing{
  animation: none;
}

@keyframes cursor {
  49%{background-color: #ff0505;}
  50%{background-color: transparent;}
  99%{background-color: transparent;}
}
.btn-outline-info {
  border: 1px solid #ff7f50 !important;
}
.btn-outline-info:hover {
  background-color: #ff7f50 !important;
}
.home {
  /* margin-left: 13.63rem; */
  background-image: url("../assets/background.jpg");
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-position: center;
  object-fit: cover;
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
img {
  border-radius: 50%;
  width: 60%;
  margin-top: 1rem;
  margin-left: 1rem;
  /* animation: image 60s infinite; */
}
@keyframes image {
  0% {
    transform: rotateY(180deg);
  }
  50% {
    transform: rotateY(-180deg);
  }
  100% {
    transform: rotateY(0);
  }
}
.text h2 {
  font-size: 2.5rem;
  margin-top: auto;
  color: black;
  animation: changeText 3000ms infinite;
}
/* @keyframes changeText {
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
} */
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
  img {
    border-radius: 50%;
    width: 60%;
    margin-top: 5rem;
    margin-left: auto;
    margin-right: auto;
  }
  .text h2 {
    font-size: 3rem;
    margin-top: 4rem;
    margin-bottom: 4rem;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>

<template>
  <base-container class="pt-5">
    <base-title title="Contact"></base-title>

    <div
      id="contact"
      class="d-flex flex-column align-items-center py-3 px-0 container mb-4"
    >
      <div class="my-3">
        <base-title text1="Contact" text2="us"></base-title>
      </div>
      <div class="form my-5 row px-md-2">
        <div class="col-md-4 d-flex flex-column justify-content-around">
          <div class="py-5">
            <p>
              <strong class="ml-0  ml-md-0"
                ><span class="questionTitle" style="font-size: 1.2rem"
                  ><strong> Do you have a question?</strong> </span
                ><br /><br />

                <i class="fas fa-phone mr-3 mt-3"></i>
                <span>+994556085532</span>
                <br />
                <i class="fas fa-envelope mr-3 mt-3"></i>
                <span>kenanrehimli48@gmail.com</span>
                <br />
                <i class="fas fa-map-marker-alt mr-3 mt-3"></i>
                <span>Baku,Bayil</span></strong
              >
            </p>
          </div>
          <div class="d-flex justify-content-around px-5">
            <a href="https://www.facebook.com/profile.php?id=100005356844995">
              <i class="fab fa-facebook"></i
            ></a>
            <a href="https://github.com/kananrahimli">
              <i class="fab fa-github"></i
            ></a>
            <a href="https://www.linkedin.com/in/kanan-rahimli-44b703176/">
              <i class="fab fa-linkedin-in"></i
            ></a>
          </div>
        </div>
        <div
          class="
            col-md-8
            d-flex
            flex-column
            p-4 p-md-5
            align-items-center
            justify-content-around
          "
        >
          <input
            type="text"
            class="w-100 mt-4"
            name=""
            placeholder="Name"
            id=""
            v-model="name"
          />
          <input
            type="text"
            class="w-100 my-3"
            placeholder="Email"
            name=""
            id=""
            v-model="email"
          />
          <textarea
            name=""
            id=""
            placeholder="Message"
            rows="6"
            class="w-100"
            v-model="message"
          ></textarea>
          <button
            class="btn btn-outline-success mt-4"
            type="submit"
            id="submit"
            @click="send"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  </base-container>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            email:'',
            message:'',
            name:''
        }
    },

    methods:{
        send(){
            axios.post('https://portfolio-e44ea-default-rtdb.firebaseio.com/users.json',{
                name:this.name,
                email:this.email,
                message:this.message
            }).then(()=>{
                
                this.name='',
                this.email='',
                this.message=''
                alert('Mesajiniz ugurla gonderildi')
            }).catch((err)=>{
                console.log(err);
            })
        }
    }
};
</script>

<style scoped>
#contact i {
  color: #ff7f50;
}

.form {
  border: 1px solid #f8f8f8;
  background: #f5f4f4;
  width: 80%;
}

a {
  text-decoration: none;
  color: #2f2f30;
  font-size: 1.5rem;
}

input,
textarea {
  border: none;
  border-bottom: 1px solid #2f2f30;
  background: transparent;
  outline: none;
  padding: 10px 0px;
  
}

input:focus,
textarea:focus{

   border: none;
  border-bottom: 1px solid #ff7f50;
  background: transparent;
  outline: none;
  padding: 10px 0px;
}

@media screen and (max-width: 768px) {
  .form {
    width: 100%;
  }

  span {
    font-size: 12px;
  }
}
</style>
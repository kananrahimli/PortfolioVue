<template>
<base-container class="pt-5">
<base-title title="Contact" ></base-title>
<div id="contact" class="container mt-5">
     
          <div class="row">
            <div class="col-md-6 info" >
              <span class="questionTitle" style="font-size: 1.2rem;"><strong> Do you have a question?</strong> </span><br><br>

              <i class="fas fa-phone  mr-3 mt-3 " ></i>
              <span>+994556085532</span>
              <br>
              <i class="fas fa-envelope  mr-3 mt-3 " ></i>
              <span>kenanrehimli48@gmail.com</span>
              <br>
              <i class="fas fa-map-marker-alt  mr-3 mt-3 "></i>
              <span>Baku,Bayil</span>
            </div>
            <div class="col-md-6 ">
              <form action="">
                <span  style="font-size: 1.5rem; display: block; " class="message mb-2"><strong>Message me</strong></span>
                  <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                          
                          <input type="text" name="name" id="name" class="form-control" required placeholder="Name">
                        </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
        
                        <input type="email" name="name" id="name" class="form-control" required placeholder="Email">
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <input type="text" name="name" id="name" class="form-control" required placeholder="Subject">
                      </div>
                    </div>

                    <div class="col-md-12">
                      <div class="form-group">
                        <textarea name="" id="" cols="15" rows="5" required placeholder="Message.." class="form-control"></textarea>
                      </div>
                    </div>
                    <button class="btn btn-outline-success ml-3" type="submit" id="submit">Send</button>
                  </div>
              </form>
                  
            </div>
          </div>
</div>
</base-container>
  
</template>

<script>
export default {

}
</script>

<style scoped>
      #contact{
      padding: 5rem 1rem 0rem;
     }
    #contact i{
      color:#ff7f50 ;
    }

    @media screen and (max-width: 768px){
         #contact .info{
        margin-bottom: 3rem;
        
      }     
    }
</style>
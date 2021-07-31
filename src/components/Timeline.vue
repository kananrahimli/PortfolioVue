<template>
  <div class="timeline">
    <ul>
      <li>
        <div class="content ">
          <h1>{{university||course||company}}</h1>
          <br>
          <h4>{{specialty||courseName||role}}</h4>
        </div>
        <div class="time">
         <i class="far fa-calendar-alt"></i><h2>{{time}}</h2>
        </div>
      </li>
      <div class="clear"></div>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props:['time','university','specialty','course','courseName','company','role']
};
</script>

<style scoped>
.timeline li .fa-calendar-alt{
    position: absolute;
    font-style: italic;
    top: 20px;
    left: 110%;
    font-size: 15px;
}
/* .timeline li:nth-child(even) .fa-calendar-alt{
    position: absolute;
    font-style: italic;
    top: 18px;
    right: 110%;
    font-size: 18px;
} */
.timeline {
  position: relative;
  margin-bottom: -16px ;
}

.timeline::before{
    content: '';
    position: absolute;
    left: 50%;
    width: 2px;
    height: 100%;
    background-color: #ff7f50;
}
.timeline h1{
    font-weight: 900;
    font-size: 20px;
}
.timeline h2{
    font-weight: 800;
    font-size: 15px;
}
.timeline h4{
    font-weight: 600;
    font-size: 13px;
}
.timeline ul li{
    position: relative;
    width: 50%;
    list-style: none;
    padding: 20px 0;
    padding-right: 12px;
    margin-top: 30px;
}
/* .timeline ul li:nth-child(even){
    position: relative;
    width: 50%;
    list-style: none;
    padding: 20px 0;
    padding-left: 12px;
    margin-top: 30px;
} */
.timeline ul li{
    float: left;
    text-align: right;
    clear: both;
}
/* .timeline ul li:nth-child(even){
    float: right;
    text-align: left;
    clear: both;
} */
.timeline ul li::before{
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    background: #ff7f50;
    border-radius: 50%;
    right: -8px;

}
/* .timeline ul li:nth-child(even)::before{
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    background: #ff7f50;
    border-radius: 50%;
    left: -7px;
} */

.timeline li h2{
    position: absolute;
    top: 18px;
    left: 125%;
    font-style: italic;
}
    /* .timeline li:nth-child(even) h2{
        position: absolute;
        top: 16px;
        right: 125%;
        font-style: italic;
    } */
.content{
    padding-bottom: 60px;
}
.clear{
    clear: both;
}

@media screen and (max-width: 768px){
    .timeline ul li p{
        font-size: 10px;
    }
    .timeline h4{
        font-size: 10px;
    }
}
</style>

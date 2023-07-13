<template>
  <base-container>
    <div class="about row flex-wrap">
      <base-title title="About"></base-title>
      <base-card class="col-md-5 mx-auto align-self-start mb-5">
        <time-line
          v-for="edu in education"
          :key="edu"
          :university="edu.uni"
          :specialty="edu.specialty"
          :time="edu.time"
        ></time-line>
      </base-card>
      <base-card class="col-md-5 mx-auto align-self-start px-1">
        <time-line
          v-for="experience in experiences"
          :key="experience"
          :company="experience.company"
          :role="experience.role"
          :time="experience.time"
        ></time-line>
      </base-card>
      <base-card class="col-md-5 ml-md-5 mx-auto" style="margin-top: -320px">
        <time-line
          v-for="course in courses"
          :key="course"
          :course="course.kind"
          :courseName="course.course"
          :time="course.time"
        ></time-line>
      </base-card>
    </div>
  </base-container>
</template>

<script>
import TimeLine from "../components/Timeline.vue";
export default {
  components: {
    TimeLine,
  },
  data() {
    return {
      education: [
        {
          uni: "ADNSU",
          specialty: "Master of Processin automation enginner",
          time: "15/09/2021 30/06/2022",
        },
        {
          uni: "ADNSU",
          specialty: "Bachelors of Processin automation enginner",
          time: "15/09/2016 1/6/2020",
        },
      ],
      courses: [
        {
          course:
            "Maximilian Schwarzmüller-Vue(w/ Router, Vuex, Composition API)",
          kind: "Udemy",
          time: "01/03/2020 20/04/2021",
        },
        {
          course: "Sadik Turan (Komple uygulamali web geliştirme kursu",
          kind: "Udemy",
          time: "15/06/2020 06/01/2021",
        },

        {
          course: "English Language",
          kind: "Master Number 1",
          time: "05/10/2017 20/01/2018",
        },
      ],

      experiences: [
        {
          company: "Azerimed",
          role: "Frontend Developer",
          time: "17/01/2022 29/06/2022",
        },
        {
          company: "Artmood",
          role: "Frontend Developer",
          time: "03/09/2021 01/12/2021",
        },
        {
          company: "Labrin Tech",
          role: "Frontend Developer (Internship)",
          time: "01/05/2021 05/08/2021",
        },
        {
          company: "Freelancer,Self-employment",
          role: "Frontend Developer ",
          time: "01/11/2020",
        },
      ],
    };
  },
};
</script>

<style scoped>
.about {
  margin-top: 10rem;
}
.col-md-5:nth-child(2):before {
  content: "Education";
  font-size: 30px;
  font-weight: 900;
  position: absolute;
  top: -3rem;
  left: 0rem;
}
.col-md-5:nth-child(4):before {
  content: "Courses";
  font-size: 30px;
  font-weight: 900;
  position: absolute;
  top: -3rem;
  left: 0rem;
}
.col-md-5:nth-child(3):before {
  content: "Experience";
  font-size: 30px;
  font-weight: 900;
  position: absolute;
  top: -3rem;
  left: 0rem;
}
p {
  font-size: 1.2rem;
  font-weight: 800;
  text-align: justify;
}

@media screen and (max-width: 768px) {
  .about {
    margin-top: 10rem;
  }
}
</style>

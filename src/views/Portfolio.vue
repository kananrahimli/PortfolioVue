<template>
  <base-container bgNoWhite>
    <base-title title="Portfolio" class="mb-2"></base-title>
    <div id="portfolio" class="custom-container ml-1 row justify-content-center">
      <div
        class="customCard pb-3 col-md-2 mx-3 my-5 d-flex flex-column"
        v-for="(project, index) in projects"
        :key="index"
      >
        <div class="imgBox text-center">
          <img
            :src="require('../assets/' + project.projectImg + '.png')"
            class=""
            alt=""
          />
        </div>
        <div class="content">
          <h3 class="font-weight-bold">{{ project.projectName }}</h3>
          <p class="my-4">
            <span class="font-weight-bold text-info">
              Used technology and tools:</span
            >
            {{ project.projectContent }}
          </p>

          <div class="actions d-flex justify-content-around">
            <button>
              <a
                :href="project.demo"
                target="_blank"
                class="text-decoration-none"
                >See project</a
              >
            </button>
            <button>
              <a
                :href="project.github"
                target="_blank"
                class="text-decoration-none"
                >See code</a
              >
            </button>
          </div>
        </div>
      </div>
    </div>
  </base-container>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          projectName: "Aptek Online",
          projectImg: "aptekonline",
          projectContent:
            "Html,Css,Bootstrap,Axios,Jquery,Google map,Javascript,Vue.js",
          // github:'https://github.com/kananrahimli/React-corona-app',
          demo: "https://64b138f130412d093282fad6--glittering-nougat-26cc87.netlify.app/",
        },
        {
          projectName: "Zəfəran Aptek",
          projectImg: "zeferan",
          projectContent:
            "Html,Css,Bootstrap,Axios,Jquery,Google map,Javascript",
          // github:'https://github.com/kananrahimli/React-corona-app',
          demo: "https://nostalgic-pike-028b68.netlify.app",
        },
        {
          projectName: "Zoom Opticstore",
          projectImg: "zoom",
          projectContent:
            "Html,Css,Bootstrap,Axios,Jquery,Google map,Javascript,Javascript Plugin",
          // github:'https://github.com/kananrahimli/React-corona-app',
          demo: "https://jolly-fermat-03ba6e.netlify.app",
        },
        {
          projectName: "Cargoex",
          projectImg: "cargoex",
          projectContent: "Html,Css,Bootstrap,Js,Vue.js",
          github: "https://github.com/kananrahimli/cargoexx",
          demo: "https://nostalgic-khorana-7c1d46.netlify.app/",
        },
        {
          projectName: "Premiums",
          projectImg: "premiums",
          projectContent: "Html,scss,Bootsrap,Js,jquery,",
          // github:'https://github.com/kananrahimli/FireBlogs',
          demo: "http://premiums.az/",
        },
        {
          projectName: "Baku-Chaviar",
          projectImg: "bakucaviar",
          projectContent: "Html,scss,Bootsrap,Js,jquery,Firebse-adminpanel",
          // github:'https://github.com/kananrahimli/FireBlogs',
          demo: "https://objective-yalow-ddcafd.netlify.app/",
        },
        {
          projectName: "Fire Blogs",
          projectImg: "fireblogs",
          projectContent: "Html,scss,Bootsrap,Js,Vue.js,Vuex,Firebase",
          github: "https://github.com/kananrahimli/FireBlogs",
          demo: "https://fireblogs.netlify.app/",
        },
        {
          projectName: "Coach Finders",
          projectImg: "coachFinder",
          projectContent:
            "Html,Css,Bootstrap,Vue.js,Vuex,Axios,Firebase,Authentication",
          github: "https://github.com/kananrahimli/CocahFinder",
          demo: "https://kind-brattain-b8b99e.netlify.app/",
        },
        {
          projectName: "Corona statistic",
          projectImg: "corona",
          projectContent: "Html,Css,Bootstrap,Vue,Bootstrap,Axios",
          github: "https://github.com/kananrahimli/CovidApp-Vue.js-",
          demo: "https://infallible-bhabha-76a893.netlify.app",
        },
        {
          projectName: "Todo app",
          projectImg: "todo",
          projectContent: "Html,Css,Javascript,Localstorage",
          github: "https://github.com/kananrahimli/To-do-list",
          demo: "https://adoring-heyrovsky-10fd42.netlify.app",
        },
        {
          projectName: "Random Person",
          projectImg: "randomperson",
          projectContent: "Html,Bootstrap,Javascript,Fetch api,Async Js",
          github: "https://github.com/kananrahimli/Random-person",
          demo: "https://tender-visvesvaraya-ed9d27.netlify.app",
        },
        {
          projectName: "Slider app",
          projectImg: "slider",
          projectContent: "Html, Bootstrap,Js",
          github: "https://github.com/kananrahimli/Slider-app",
          demo: "https://competent-bose-90eaa5.netlify.app",
        },

        {
          projectName: "Monster Game",
          projectImg: "monster",
          projectContent: "Html,Css,Js,Vue.js",
          github: "https://github.com/kananrahimli/MonsterGame-Vue.js-",
          demo: "https://heuristic-goldberg-042942.netlify.app",
        },
        {
          projectName: "FindCountry",
          projectImg: "findcountry",
          projectContent: "Html,Css,Bootstrap,Fetch api,Vue.js,Vuex",
          github: "https://github.com/kananrahimli/FindCountry",
          demo: "https://agitated-pasteur-685043.netlify.app/",
        },

        {
          projectName: "Taraz",
          projectImg: "taraz",
          projectContent: "Html,Css,Bootsrap,Js,Vue.js,Vuex",
          github: "https://github.com/kananrahimli/taraz",
          demo: "https://confident-goldwasser-cb6aab.netlify.app/",
        },

        {
          projectName: "Corona statistic(React)",
          projectImg: "corona",
          projectContent: "Html,Css,Bootstrap,Axios,React.js",
          github: "https://github.com/kananrahimli/React-corona-app",
          demo: "https://musing-visvesvaraya-342837.netlify.app/",
        },
      ],
    };
  },
};
</script>

<style scoped>
#portfolio {
  padding-bottom: 120px;
}
button {
  width: 110px;
  padding: 2px 0px;
  border: 1px solid #ff7f50;
  border-radius: 3px;
  font-size: 12px;
  font-weight: bold;
  background: none;
  transition: 0.3s ease-in-out;
}
a {
  color: #000;
}
button:hover {
  background: #ff7f50;
  color: #fff !important;
}
button:hover a {
  color: #fff;
}
.custom-container {
  padding-top: 150px;
}

.custom-container .customCard {
  height: 180px;
  background-color: #fff;
  border: 1px solid #ff7f50;
  transition: all 0.3s ease-in-out;
  border-radius: 4px;
  box-shadow: 0 5px 202px rgba(0, 0, 0, 0, 0.5);
  cursor: pointer;
}

.custom-container .customCard:hover {
  height: auto;
  max-height: 500px;
}

.custom-container .imgBox {
  margin-top: -30px;
  min-height: 180px !important;
  min-width: 200px !important;
}

.custom-container img {
  border: 1px solid #ff7f50;
  border-radius: 6px;
  width: 100%;
  height: 100%;
}
.custom-container .content {
  margin-top: -30px;
  visibility: hidden;
  transition: 0.3s ease-in-out;
  opacity: 0;
}
.custom-container .customCard:hover .content {
  margin-top: 10px;
  opacity: 1;
  visibility: visible;
  transition-delay: 0.2s;
}
.custom-container .content p {
  font-size: 12px;
}
@media screen and (max-width: 768px) {
  .custom-container .customCard {
    height: 200px;
  }
  .custom-container .customCard:hover {
    height: auto;
  }
  .custom-container .imgBox {
    /* width: 240px !important; */
    margin-top: -30px;
    min-height: 200px;
  }
}
</style>
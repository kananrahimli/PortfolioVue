<template>
  <div>
    <button class="menubar" @click="openMenu">
      <i class="fas fa-bars "></i>
    </button>
    <nav
      class="navbar navbar-light "
      :class="menuBar ? 'showMenu' : 'closeMenu'"
    >
      <button class="times" @click="closeMenu">
        <i class="fas fa-times"></i>
      </button>
      <a class="navbar-brand mt-4 font-weight-bold ml-3" href="#" @click="$router.push('/home')">Kanan</a>
      <ul class="navbar-nav d-flex flex-column">
        <li
          class="nav-item  mt-4 text-center"
          v-for="(menuItem, index) in menuItems"
          :key="index"
          @click="deactivate"
        >
          <router-link :to="menuItem.path">{{ menuItem.text }} </router-link>
        </li>
      </ul>
      <div class="links mt-auto">
        <ul class="list-unstyled d-flex">
          <li>
            <a href="https://github.com/kananrahimli" target="_blank"><i class="fab fa-github"></i></a>
          </li>
          <li>
            <a href="https://www.facebook.com/profile.php?id=100005356844995" target="_blank"><i class="fab fa-facebook"></i></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/kanan-rahimli-44b703176/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { text: "Home", path: "/home" },
        { text: "About", path: "/about" },
        { text: "Skills", path: "/skills" },
        { text: "Portfolio", path: "/portfolio" },
        { text: "Contact", path: "/contact" },
      ],
      menuBar: false,
    };
  },
  methods: {
    openMenu() {
      this.menuBar = true;
    },
    closeMenu() {
      this.menuBar = false;
    },
    deactivate() {
      this.menuBar = false;
    },
  },
};
</script>

<style scoped>
nav {
  background-color: #2c3e50;
  width: 220px !important;
  height: 100%;
  /* overflow-y: scroll; */
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
}

.navbar a {
  text-decoration: none;
  color: #ced6e0;
  position: relative;
  transition: 0.3s;
}

.navbar-brand{
  font-size: 24px;
  color: #ced6e0 !important;
}
.navbar-brand:hover {
  color: #9da3aa !important;
}
.navbar-nav a.active::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #ff7f50;
  transition: 0.3s;
}
.navbar-nav a:not(.active)::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #ff7f50;
  transition: 0.4s;
}
.navbar-nav a:not(.active):hover::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #ff7f50;
  transition: 0.4s;
}

nav button {
  position: absolute;
  top: 10px;
  right: 10px;
}
button {
  display: none;
}
.showMenu {
  position: fixed;
  left: 0;
  transition: 0.5s;
}
.menubar {
  position: fixed;
  top: 10px;
  left: 10px !important;
  border: none;
  color: black;
  font-size: 30px;
  background: none;
  z-index: 100;
}
.times {
  position: absolute;
  top: 10px;
  right: 10px !important;
  border: none;
  color: #ced6e0;
  font-size: 25px;
  background: none;
}
.links ul li {
  margin-left: 10px;
  margin-right: 10px;
}
.links i {
  color: #747d8c;
  transition: 0.3s;
}
.links i:hover {
  transform: scale(1.2);
  color: #ff7f50;
}

@media screen and (max-width: 768px) {
  nav {
    position: fixed;
    left: -400px;
    overflow-y: hidden;
    opacity: 0.9;
  }
  .closeMenu {
    position: fixed;
    left: -400px;
    transition: 0.5s;
  }

  button {
    display: block;
  }
}
</style>

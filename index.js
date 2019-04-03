import { parseSheet } from "./utils.js";

import Testcomponent from "./components/Testcomponent.js";
import Footer from "./components/Footer.js";
import Intro from "./components/Intro.js";

Vue.config.devtools = true;

new Vue({
  el: "#app",
  components: {
    Testcomponent,
    Footer,
    Intro
  },
  data: {
    entries: [],
    showNav: false
  },
  computed: {
    // activeEvent() {
    //   if (this.activeEventId) {
    //     return this.waypoints.filter(w => w.ID == this.activeEventId)[0];
    //   }
    //   return null;
    // }
  },
  methods: {
    
  },
  mounted() {
    fetch(
      `https://spreadsheets.google.com/feeds/list/1hRFwFMnXvK47aTzgmCzTQ54gyyhA1jVFrILzWhhu0Dc/1/public/values?alt=json`
    )
      .then(res => res.json())
      .then(res => {
        console.log(parseSheet(res));
        this.entries = parseSheet(res);
      });
  },
  
  template: `
<div>

<section class="hero is-primary is-medium">
  <!-- Hero head: will stick at the top -->
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <h1 class="title is-2">TEST</h1>
          </a>
          <span class="navbar-burger burger" data-target="navbarMenuHeroA" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu" :class="{ 'is-active': showNav }">
          <div class="navbar-end">
            <a class="navbar-item is-active">
              Üks
            </a>
            <a class="navbar-item">
              Kaks
            </a>
            <a class="navbar-item">
              Kolm
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>


  <!-- Hero content: will be in the middle -->
  <div class="hero-body">
    <div class="container has-text-centered">
      <h1 class="title">
        Title
      </h1>
      <h2 class="subtitle">
        Subtitle
      </h2>
    </div>
  </div>
</section>

<section class="is-large">
  <div class="container box is-fluid">    
    <div class="columns is-multiline">
      <div class="card column is-half-tablet is-one-third-desktop" v-for="(entry, i) in entries">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <h1 class="title is-2">{{ entry.name }}</h1>
          <div class="content">
            {{ entry.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  
<div style="display: flex; justify-content: space-around;">
  <Testcomponent v-for="(test, i) in 8" :key="'test'+i" />
</div>

<Intro />

<Footer />



</div>
`
});
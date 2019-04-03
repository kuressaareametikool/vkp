import { parseSheet } from "./utils.js";

import Entries from "./components/Entries.js";
import Footer from "./components/Footer.js";
import Intro from "./components/Intro.js";
// import Map from "./components/Map.js";

Vue.config.devtools = true;

new Vue({
  el: "#app",
  components: {
    Entries,
    Footer,
    Intro,
    // Map
  },
  data: {
    entries: [],
    showNav: false
  },
  computed: {

  },
  methods: {
    
  },
  mounted() {
    // fetch(
    //   `https://spreadsheets.google.com/feeds/list/1hRFwFMnXvK47aTzgmCzTQ54gyyhA1jVFrILzWhhu0Dc/1/public/values?alt=json`
    // )
    //   .then(res => res.json())
    //   .then(res => {
    //     console.log(parseSheet(res));
    //     this.entries = parseSheet(res);
    //   });
  },
  
  template: `
<div>

  <Intro />
  <Entries />
  <!-- <Map /> -->
  <Footer />

</div>
`
});
import { parseSheet } from "../utils.js";

export default {
    props: [],
    data() {
        return {
        entries: [],
      }
    },
    methods: { parseSheet },
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
    
<section class="Entries is-large">
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

    `
  }
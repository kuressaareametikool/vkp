export default {
  data() {
    return {
      showNav: false
   }
  },
  template: `
    
    <section class="Intro hero is-primary is-medium">
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

    `
  }
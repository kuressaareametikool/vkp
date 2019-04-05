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
          <!-- <a class="navbar-item">
            <h1 class="title is-2">TEST</h1>
          </a> -->
          <span class="navbar-burger burger" data-target="navbarMenuHeroA" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <!-- <div id="navbarMenuHeroA" class="navbar-menu" :class="{ 'is-active': showNav }">
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
        </div> -->
      </div>
    </nav>
  </div>


  <!-- Hero content: will be in the middle -->
  <div class="hero-body">
    <div class="container">
      
      <div class="columns is-vcentered is-variable is-8">

        <div class="column is-one-quarter">
          <img src="/assets/vkp-logo_pysti.svg" />
        </div>

        <div class="column">
          <h1 class="title">
            EESTI VAIMSE KULTUURIPÄRANDI NIMISTU
          </h1>
          <h2 class="subtitle">
            Lorem ipsum dolor sit amet
          </h2>
        </div>

      </div>
      </div>

    </div>
  </div>
</section>

    `
  }
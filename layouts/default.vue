<template>
  <div id="wrapper">
    <div class="leaf is-hidden-mobile">
      <Leaf/>
    </div>
    <!-- PC表示 -->
    <nav class="navbar header has-shadow is-hidden-mobile" role="navigation" aria-label="main navigation">
      <div class="navbar-brand-center">
        <a href="/"><ImuratoTop /></a>
        <p class="navbar-text mt-4">コーヒーを飲みながらのマーケティング相談所、いつでも開催中。</p>
      </div>
    </nav>
    <!-- SP表示 -->
    <nav class="navbar-sp header has-shadow is-hidden-tablet" role="navigation" aria-label="main navigation">
      <div class="navbar-brand-center-sp is-hidden-tablet">
        <a href="/"><ImuratoTop width="100" height="60" /></a>
          <p class="navbar-text-sp">コーヒーを飲みながらのマーケティング相談所、いつでも開催中。</p>
      </div>
    </nav>
    <section class="main-content columns m-0 is-mobile">
      <div class="container is-fullhd">
        <Nuxt />
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import ImuratoTop from '../assets/imurato_top.svg'
import Leaf from '../assets/leaf.svg'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    ImuratoTop,
    Leaf,
    Footer,
  },
  data () {
    return {
    }
  },
  mounted() {
    console.log("-------------")
    console.log( this.$route.path )
    console.log("-------------")
  }
}
</script>

<style scoped>
#wrapper{
width:100%;
overflow-x: hidden !important;
}
.navbar {
  height: 217px;
  border-bottom: 217px solid #73644D;
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
}
.navbar-sp {
  height: 120px;
  border-bottom: 120px solid #73644D;
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
}
.navbar-brand-center {
  padding-top: 40px;
  text-align:center;
  margin: auto;
}
.navbar-brand-center-sp {
  padding-top: 10px;
  text-align:center;
  margin: auto;  
}
.navbar-text {
  color: #FAFAFA;
  letter-spacing: 3px;
}
.navbar-text-sp {
  color: #FAFAFA;
  letter-spacing: 3px;
  font-size: 12px;
}
.main-content {
  background-image: url("../assets/background.png");
  background-repeat: round;
}
.leaf {
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 1000;
}
.columns:not(:last-child) {
  margin-bottom: 0px;
}
</style>

<template>
  <div  class="member-card-layout">
    <nuxt-link :to="{ path: '/member/' + id }">
      <div class="column">
        <div class="card">
          <header class="card-header">
            <img :src="imgSrc" />
            <!-- <img src="../assets/man1.png" /> -->
          </header>
          <div class="card-content">
            <div class="content has-text-centered">
              <ul>
                <li>{{ division }}</li>
                <li>{{ occupation }} {{ position }}</li>
                <li>{{ name }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
    },
    name: {
      type: String,
      required: true
    },
    imagename: {
      type: String,
    },
    division: {
      type: String,
    },
    occupation: {
      type: String
    },
    position: {
      type: String
    }
  },
  computed: {
    imgSrc() {
      return require("../assets/" + this.imagename + ".png")
    }
  }
}
</script>

<style scoped>
.member-card-layout {
  width: 270px;
  margin: 0 auto;
}
</style>
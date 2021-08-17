<template>
  <div v-on:mouseover="mouseOverAction" v-on:mouseleave="mouseLeaveAction" class="member-card-layout px-2">
    <nuxt-link :to="{ path: '/member/' + id }">
      <div :style="{ backgroundImage: 'url(' + imgSrc + ')' }" class="svg">
        <CloseWindowSP class="" width="100%" height="100%" />
      </div>
      <div class="job-area">
        <span class="job-area-text"><b>{{ position }}</b></span>
      </div>
      <div class="name-area has-text-centered">
        <span class="name-area-text"><b>{{ name }}</b></span>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import OpenWindow from '../assets/openwindow.svg'
import CloseWindowSP from '../assets/closewindow-sp.svg'

export default {
  components: {
    OpenWindow,
    CloseWindowSP
  },
  data() {
    return {
      imgStyle: {
        backgroundImage: ""
      },
      hoverFlag: false,
    }
  },
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
    position: {
      type: String
    }
  },
  computed: {
    imgSrc() {
      return require("../assets/" + String(this.id) + "_" + this.imagename + "/" + this.imagename + "_正面.png")
    }
  },
  created() {
    this.imgStyle.backgroundImage = "";
  },
  methods: {
    mouseOverAction(){
        this.hoverFlag = true
    },
    mouseLeaveAction(){
        this.hoverFlag = false
    }    
  }
}
</script>

<style scoped>
.member-card-layout {
  width: 100%;
  margin: 0 auto;
  margin-top: 5px;
  margin-bottom: 5px;
}
.svg {
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius:80% 80% 15% 15%;
  margin: 0 auto;
  position: relative;
  font-size: 0;
}
.job-area {
	position: relative; /* 幅 */
	border-bottom: 18px solid #73644D; /* 高さ */
	border-left: 5px solid transparent; /* 左側下辺の伸び */
	border-right: 5px solid transparent; /* 右側下辺の伸び */
	box-sizing: border-box;
  width: 100%;
}
.job-area-text {
  color: white;
  font-size: 0.5em;
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
}
.name-area {
  width: 100%;
  height: 28px;
  border-bottom: 28px solid #62533D;
}
.name-area-text {
  color: white;
  font-size: 0.8em;
}
</style>
<template>
  <div v-on:mouseover="mouseOverAction" v-on:mouseleave="mouseLeaveAction" class="member-card-layout">
    <!-- <nuxt-link :to="{ path: '/member/' + id }"> -->
    <nuxt-link :to="{ path: pathname + '.html' }">
        <div :style="{ backgroundImage: 'url(' + imgSrc + ')' }" class="svg">
          <div v-show="hoverFlag == false">
            <CloseWindow />
          </div>
          <div v-show="hoverFlag == true" class="abs">
            <OpenWindow />
          </div>
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
import CloseWindow from '../assets/closewindow.svg'

export default {
  components: {
    OpenWindow,
    CloseWindow
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
    pathname: {
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
  width: 180px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
}
.svg {
  background-size: 175px 190px;
  background-position: center;
  background-repeat: no-repeat;
  border-radius:155px 155px 0 0;
  height: 205px;
  width:175px;
  margin: 0 auto;
  position: relative;
}
.abs {
  position: absolute;
  top:0px;
  left:-145px;
}
.member-image {
  width:158px;
  border-radius:135px 135px 0 0;
  /* border: 15px solid #73644D; */
  position: absolute;
  top: 15px;
  left: 95px;
  z-index: 2;
}
.job-area {
	position: relative; /* 幅 */
	height: 16px;
	border-bottom: 16px solid #73644D; /* 高さ */
	border-left: 5px solid transparent; /* 左側下辺の伸び */
	border-right: 5px solid transparent; /* 右側下辺の伸び */
	box-sizing: border-box;
  margin-top: -12.5px;
  margin-left: -3px;
  position: relative;
  width: 189px;
}
.job-area-text {
  color: white;
  font-size: 14px;
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
}
.name-area {
  width: 189px;
  height: 28px;
  margin-left: -3px;
  border-bottom: 28px solid #62533D;
}
.name-area-text {
  width: 100%;
  color: white;
  font-size: 16.5px;
}
</style>
<template>
<article>
  <div class="is-hidden-touch">
    <section class="section1">
      <div class="columns">
        <div class="profile-main-area column is-12">
          <img class="profile-image" :src="imgTop" alt="imurato_top">
          <div class="profile-box">
            <div class="profile-box-text-area columns is-vcentered is-gapless">
              <div class="column ml-5">
                <ul>
                  <li><span class="is-size-7 has-text-white">{{ position }}</span></li>
                  <li><span class="is-size-3 has-text-white"><b>{{ name }}</b></span></li>
                  <li><span class="is-size-7 has-text-white">得意分野：{{ specialty }}</span></li>
                </ul>
              </div>
            </div>
          </div>
          <img class="profile-handwritten" :src="imgHandWritten" alt="imurato_top">
          <div class="profile-vertical-text">
            <p>{{ romajiName }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section2">
      <div class="columns">
        <div class="column is-2"></div>
        <div class="imgwhole column is-4 mt-5">
          <img class="imgwholebody" :src="imgWholebody" alt="">
        </div>
        <div class="column is-5">
          <div class="text-area columns is-vcentered">
            <div class="column is-12 p-5">
              <p class="main-text mb-5">{{ mainText }}</p>
              <p class="sub-text mt-5">{{ subText }}</p>
            </div>
          </div>
        </div>
        <div class="column is-1"></div>
      </div>
    </section>
    <section class="section3">
      <div class="bou1"></div>
      <div class="bou2"></div>
      <div class="private-box">
        <div class="private-text">
          <Private />
        </div>
      </div>
      <div class="columns is-vcentered">
        <div class="column is-1"></div>
        <div class="column is-5">
          <div class="text-area columns is-vcentered">
            <div class="column is-12 p-5">
              <p class="private-main-text mb-5"><b>{{ privateMainText }}</b></p>
              <p class="private-sub-text mt-5">{{ privateSubText }}</p>
            </div>
          </div>
        </div>
        <div class="column is-5 has-text-centered">
          <img class="private-image" :src="imgPrivate" alt="" width=300px;>
        </div>
        <div class="column is-1"></div>
      </div>
    </section>
    <div class="columns my-5 has-text-centered">
      <div class="column">
        <button @click="goToReservation" class="reservation-button button mx-5">　<b>イムカフェご予約はこちら</b></button>
      </div>
    </div>
  </div>
  <div class="is-hidden-desktop">
    <section class="section1-sp">
      <div class="columns is-mobile">
        <div class="column is-11">
        <div class="profile-box-sp">
          <ul>
            <li><span class="is-size-6 has-text-white">{{ position }}</span></li>
            <li><span class="is-size-2 has-text-white"><b>{{ name }}</b></span></li>
            <li><span class="is-size6 has-text-white">得意分野：{{ specialty }}</span></li>
          </ul>
        </div>
        </div>
        <div class="column is-1">
          <div class="profile-vertical-text-sp">
            <p>{{ romajiName }}</p>
          </div>
        </div>
      </div>
      <div class="columns m-0 is-mobile">
        <div class="profile-handwritten-area-sp column is-12">
          <img class="profile-handwritten-sp" :src="imgHandWritten" alt="imurato_top">
        </div>
      </div>
      <img class="imgtopbody-sp" :src="imgTop" alt="">
      <div class="text-area-sp columns is-mobile">
        <div class="column is-4">
          <div class="imgwhole">
            <img class="imgwholebody-sp" :src="imgWholebody" alt="">
          </div>
        </div>
        <div class="column is-8">
          <p class="main-text">{{ mainText }}</p>
        </div>
      </div>
      <div class="sub-text-area-sp mx-1">
        <div class="column is-12">
          <p class="sub-text">{{ subText }}</p>
        </div>
      </div>
      <div class="private-text-area-sp">
        <div class="bou1"></div>
        <div class="bou2"></div>
        <div class="private-box">
          <div class="private-text">
            <Private />
          </div>
        </div>
        <div class="private-main">
          <p class="private-main-text-sp"><b>{{ privateMainText }}</b></p>
        </div>
        <div class="private-sub">
          <p class="private-sub-text-sp">{{ privateSubText }}</p>
        </div>
        <div class="columns has-text-centered mt-5">
          <div class="column is-12">
            <img class="private-image" :src="imgPrivate" alt="">
          </div>
        </div>
      </div>
    </section>
    <div class="columns my-5 has-text-centered">
      <div class="column">
        <button @click="goToReservation" class="reservation-button button mx-5">　<b>イムカフェ<br>ご予約はこちら</b></button>
      </div>
    </div>
  </div>
</article>
</template>

<script>
import allmembers from '@/assets/json/member.json'
import Private from '@/assets/private.svg'

export default {
  data() {
    return {
      allmemberData: [],
      memberData: {},
      name: "",
      romajiName: "",
      position: "",
      imagename: "",
      specialty: "",
      mainText: "",
      subText: "",
      privateMainText: "",
      privateSubText: "",
      id: 0,
    }
  },
  components: {
    Private
  },
  computed: {
    imgTop() {
      return require("@/assets/" + String(this.id) + "_" + this.imagename + "/" + this.imagename + "_横あき.png")
    },
    imgHandWritten() {
      return require("@/assets/" + String(this.id) + "_" + this.imagename + "/" + this.imagename + "_手書き.png")
    },
    imgWholebody() {
      return require("@/assets/" + String(this.id) + "_" + this.imagename + "/" + this.imagename + "_全身.png")
    },
    imgPrivate() {
      return require("@/assets/" + String(this.id) + "_" + this.imagename + "/" + this.imagename + "_プライベート.png")
    },
  },
  created() {
    var path = this.$route.path
    var pathArray = path.split("/")
    var id = pathArray[2]
    this.id = id
    this.allmemberData = allmembers
    this.allmemberData.forEach(member => {
      if (member.id == id) {
        this.memberData = member
        this.name = member.name
        this.imagename = member.imagename
        this.position = member.position
        this.specialty = member.specialty
        this.romajiName = member.romajiName
        this.mainText = member.mainText
        this.subText = member.subText
        this.privateMainText = member.privateMainText
        this.privateSubText = member.privateSubText
      }
    });
  },
  methods: {
    goToReservation() {
      const url = 'https://www.imurato.jp/cafe/'
      window.location.href = url
    }
  }
}
</script>

<style>
.section1 {
  margin-top: 100px;
}
.section2 {
  background-color: white;
  height: 472px;
}
.section2 .columns {
  height: 100%;
}
.section3 {
  background-color: #BAA272;
  border-bottom: 30px solid white;
  margin-bottom: 20px;
  height: 472px;
  position: relative;
  z-index:10;
}
.section3 .columns {
  height: 100%;
}
.profile-main-area {
  position: relative;
  padding-bottom: 0px;
}
.profile-main-area .profile-box {
  position: absolute;
  top: 100px;
  left: 50px;
  width: 430px;
  height: 160px;
  background-color: #BAA272;
}
.profile-box-text-area{
  height: 100%;
}
.profile-handwritten {
  position: absolute;
  top: 320px;
  left: 100px;
  width: 460px;
}
.profile-image {
  border-top: 10px solid #73644D;
}
.profile-vertical-text {
  position: absolute;
  top: 80px;
  right: 35px;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;  
  font-size: 48px;
  letter-spacing: 10px;
}
.text-area {
  height: 100%;
}
.main-text {
  font-size: 28px;
  font-weight: bold;
  color: #BAA272;
}
.sub-text {
  letter-spacing: 5px;
}
.private-main-text {
  font-size: 26px;
  color:#FAFAFA;
}
.private-sub-text {
  color:#FAFAFA;
}
.private-image {
  border: 10px solid #FFFFFF;
}
.reservation-button {
  background-color: #665039;
  color: white;
  width: 490px;
  height: 64px;
  font-size: 26px;
  font-family: "游ゴシック体";
}
.reservation-button {
  background-color: #665039;
  color: white;
  width: 80%;
  height: 64px;
  font-size: 26px;
  font-family: "游ゴシック体";
}
.imgwhole {
  position: relative;
}
.imgwholebody {
  position: absolute;
  width: 200px;
  top: 0px;
  left: 50px;
  z-index: 0;
}
.imgwholebody-sp {
  position: absolute;
  width: 100px;
  top: -130px;
  left: 10%;
  z-index: 0;
}
.bou1 {
  height: 5px;
  width: 27px;
  background-color: white;
  transform: rotate(90deg);
  position: absolute;
  top: 11px;
  left: 60px;
}
.bou2 {
  height: 5px;
  width: 27px;
  background-color: white;
  transform: rotate(90deg);
  position: absolute;
  top: 11px;
  left: 160px;
}
.private-box {
  height: 45px;
  width: 168px;
  background-color: white;
  position: absolute;
  top: 26px;
  left: 40px;  
}
.private-text {
  position: absolute;
  top: 13px;
  left: 39px;  
}

.section1-sp {
  background-color: white;
  width: 100%;
  height: auto;
  margin-top: 85px;
  border-top: 10px solid #73644D;
  position: relative;
}
.profile-box-sp {
  background-color: #BAA272;
  padding: 20px;
  width: 70%;
  margin-top: 30px;
  margin-left: 30px;
}
.profile-vertical-text-sp {
  position: absolute;
  top: 39px;
  right: 15px;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;  
  font-size: 1.5em;
  letter-spacing: 10px;
}
.profile-handwritten-area-sp {
  position: relative;
}
.profile-handwritten-sp {
  position: absolute;
  top: 0px;
  left: 30px;
  width: 70%;
  max-width: 350px;
}
.imgtopbody-sp {
  width: 100%;
  height: auto;
  object-fit: contain;
  margin-top: 20px;
}
.text-area-sp {
  margin-top: 5px;
}
.sub-text-area-sp {
  position: relative;
  padding-bottom: 130px;
  background-color: white;
  z-index: 10;
}
.private-text-area-sp {
  background-color: #BAA272;
  width: 100%;
  padding-top: 60px;
  padding-bottom: 30px;
  padding-left: 30px;
  padding-right: 30px;
  position: relative;
}
.private-main {
  margin-top: 50px;
}
.private-sub {
  margin-top: 30px;
}
.private-main-text-sp {
  font-size: 28px;
  color:#FAFAFA;
  letter-spacing: 5px;
}
.private-sub-text-sp {
  letter-spacing: 5px;
  color:#FAFAFA;
}
</style>
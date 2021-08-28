<template>
  <section class="section">
    <div class="columns is-mobile">
      <div class="column is-1">
      </div>
      <div class="column is-10 has-text-centered">
        <!-- PC表示 -->
        <div class="columns member-header is-hidden-mobile has-text-centered">
          <div class="column">
            <MemberHeader />
          </div>
        </div>
        <!-- SP表示 -->
        <div class="columns member-header-sp is-hidden-tablet has-text-centered">
          <div class="column is-12 pb-0">
            <MemberHeader width="250" height="100" />
          </div>
        </div>
        <!-- PC表示 -->
        <div class="columns p-0 is-mobile is-hidden-mobile">
          <div class="column is-12">
            <button v-if="tokyobuttonflag" @click="getMember(1)" class="menu-button-focus-pc button mx-5"><TokyoWhite width="100%" /></button>
            <button v-else @click="getMember(1)" class="menu-button-pc button mx-5"><Tokyo width="100%" /></button>
            <button v-if="osakabuttonflag" @click="getMember(2)" class="menu-button-focus-pc button mx-5"><OsakaWhite width="100%" /></button>
            <button v-else @click="getMember(2)" class="menu-button-pc button mx-5"><Osaka width="100%" /></button> 
            <button v-if="kitchenbuttonflag" @click="getMember(3)" class="menu-button-focus-pc button mx-5"><KitchenWhite width="100%" /></button>
            <button v-else @click="getMember(3)" class="menu-button-pc button mx-5"><Kitchen width="100%" /></button>                        
          </div>
        </div>
        <!-- SP表示 -->
        <div class="columns p-0 is-mobile is-hidden-tablet">
          <div class="column is-4">
            <button v-if="tokyobuttonflag" @click="getMember(1)" class="menu-button-focus button"><TokyoWhite width="100%" /></button>
            <button v-else @click="getMember(1)" class="menu-button button"><Tokyo width="100%" /></button>
          </div>
          <div class="column is-4">
            <button v-if="osakabuttonflag" @click="getMember(2)" class="menu-button-focus button"><OsakaWhite width="100%" /></button>
            <button v-else @click="getMember(2)" class="menu-button button"><Osaka width="100%" /></button>
          </div>
          <div class="column is-4">
            <button v-if="kitchenbuttonflag" @click="getMember(3)" class="menu-button-focus button"><KitchenWhite width="100%" /></button>
            <button v-else @click="getMember(3)" class="menu-button button"><Kitchen width="100%" /></button> 
          </div> 
        </div>
      </div>
      <div cvlass="column is-1">
      </div>
    </div>
    <transition-group appear name="items" tag="div" class="columns mt-5 is-hidden-mobile is-multiline">
      <div v-for="memberData of memberCount" :key="memberData.id" class="column is-3-desktop is-4-tablet">
        <Member :id="memberData.id" :name="memberData.name" :imagename="memberData.imagename"  :pathname="memberData.pathName" :position="memberData.position"></Member>
      </div>
    </transition-group>
    <transition-group appear name="items" tag="div" class="columns mx-3 mt-5 is-hidden-tablet is-mobile is-multiline">
      <div v-for="memberData of memberCount" :key="memberData.id" class="column is-6-mobile">
        <MemberSP :id="memberData.id" :name="memberData.name" :imagename="memberData.imagename" :pathname="memberData.pathName" :position="memberData.position"></MemberSP>
      </div>
    </transition-group>
    <!-- PC表示 -->
    <div class="columns mt-5 has-text-centered is-hidden-mobile">
      <div class="column is-12">
        <b-button @click="goToReservation" class="reservation-button button mx-5" icon-right="chevron-right"><b>イムカフェご予約はこちら</b></b-button>
      </div>
    </div>
    <!-- SP表示 -->
    <div class="columns mt-5 has-text-centered is-hidden-tablet">
      <div class="column is-1">
        <b-button @click="goToReservation" class="reservation-button-sp button mx-5" icon-right="chevron-right"><b>イムカフェ<br />ご予約はこちら</b></b-button>
      </div>
    </div>
    <div class="brick">
      <div class="brick-area">
      </div>
    </div>
  </section>
</template>

<script>
import Member from '../components/Member'
import MemberSP from '../components/MemberSP'
import allmembers from '../assets/json/member.json'
import MemberHeader from '../assets/memberHeader.svg'
import Tokyo from '../assets/tokyo.svg'
import Osaka from '../assets/osaka.svg'
import Kitchen from '../assets/kitchen.svg'
import TokyoWhite from '../assets/tokyo_white.svg'
import OsakaWhite from '../assets/osaka_white.svg'
import KitchenWhite from '../assets/kitchen_white.svg'

export default {
  data() {
    return {
      allmemberData: [],
      memberData: [],
      tokyobuttonflag: false,
      osakabuttonflag: false,
      kitchenbuttonflag: false,
    }
  },
  components: {
    Member,
    MemberSP,
    MemberHeader,
    Tokyo,
    Osaka,
    Kitchen,
    TokyoWhite,
    OsakaWhite,
    KitchenWhite
  },
  computed: {
    memberCount() {
      return this.memberData
    }
  },
  mounted() {
    this.allmemberData = allmembers
    this.memberData = allmembers
  },
  methods: {
    getMember(type) {
      switch (type){
        case 0:
          this.memberData = this.allmemberData
          break;
        case 1:
          this.tokyobuttonflag = true
          this.osakabuttonflag = false
          this.kitchenbuttonflag = false

          this.memberData = []
          this.allmemberData.forEach(member => {
            if (member.category == "TOKYO") {
              this.memberData.push(member)
            }
          });
          break;
        case 2:
          this.tokyobuttonflag = false
          this.osakabuttonflag = true
          this.kitchenbuttonflag = false

          this.memberData = []
          this.allmemberData.forEach(member => {
            if (member.category == "OSAKA") {
              this.memberData.push(member)
            }
          });
          break;
        case 3:
          this.tokyobuttonflag = false
          this.osakabuttonflag = false
          this.kitchenbuttonflag = true

          this.memberData = []
          this.allmemberData.forEach(member => {
            if (member.category == "KITCHEN") {
              this.memberData.push(member)
            }
          });
          break;
        default:
          break;
      }
    },
    goToReservation() {
      const url = 'https://www.imurato.jp/cafe/'
      window.location.href = url
    }
  }
}
</script>

<style scoped>
.member-header {
  margin-top: 30px;
}
.member-header-sp {
  margin-top: 10px;
}
.items-leave-active,
.items-enter-active {
  transition: opacity .5s, transform .5s ease;
}
.items-leave-to,
.items-enter {
  opacity: 0;
  transform: translateX(50px);
}
.items-leave,
.items-enter-to {
  opacity: 0;
}
.items-move {
  transition: transform .5s;
}
.menu-button-pc {
  width: 180px;
  height: 46px;
  font-size: 21.97px;
  color: #665039;
  padding-left: .2em;
  padding-right: .2em;
}
.menu-button-focus-pc {
  width: 180px;
  height: 46px;
  background-color: #665039;
  padding-left: .2em;
  padding-right: .2em;
}
.menu-button {
  width: 100%;
  height: 40px;
  font-size: 21.97px;
  color: #665039;
  padding-left: .2em;
  padding-right: .2em;
}
.menu-button-focus {
  width: 100%;
  height: 40px;
  background-color: #665039;
  padding-left: .2em;
  padding-right: .2em;
}
.reservation-button {
  background-color: #665039;
  color: white;
  width: 50%;
  max-width: 493px;
  font-size: 26px;
  font-family: "游ゴシック体";
  line-height: 1.2em;
  text-align: left;

}
.reservation-button-sp {
  background-color: #665039;
  color: white;
  width: 80%;
  max-width: 493px;
  height: 110px;
  font-size: 26px;
  font-family: "游ゴシック体";
  line-height: 1.2em;
  text-align: left
}
.brick {
  margin: 0 calc(50% - 50vw);
  margin-top: 50px;
  margin-bottom: 30px;
}
.brick-area {
  background-image: url("@/assets/brick.png");
  height: 65px;
}
.section {
  padding: 0px;
}
</style>
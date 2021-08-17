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
        <div class="columns p-0">
          <div class="column is-12">
            <button v-if="tokyobuttonflag" @click="getMember(1)" class="menu-button-focus button mx-5 my-2"><TokyoWhite /></button>
            <button v-else @click="getMember(1)" class="menu-button button mx-5 my-2"><Tokyo /></button>
            <button v-if="osakabuttonflag" @click="getMember(2)" class="menu-button-focus button mx-5 my-2"><OsakaWhite /></button>
            <button v-else @click="getMember(2)" class="menu-button button mx-5 my-2"><Osaka /></button>
            <button v-if="kitchenbuttonflag" @click="getMember(3)" class="menu-button-focus button mx-5 my-2"><KitchenWhite /></button>
            <button v-else @click="getMember(3)" class="menu-button button mx-5 my-2"><Kitchen /></button>          
          </div>
        </div>
      </div>
      <div cvlass="column is-1">
      </div>
    </div>
      <transition-group appear name="items" tag="div" class="columns mt-5 is-hidden-mobile is-multiline">
        <div v-for="memberData of memberCount" :key="memberData.id" class="column is-3-desktop is-4-tablet">
          <Member :id="memberData.id" :name="memberData.name" :imagename="memberData.imagename" :position="memberData.position"></Member>
        </div>
      </transition-group>
      <transition-group appear name="items" tag="div" class="columns mt-5 is-hidden-tablet is-mobile is-multiline">
        <div v-for="memberData of memberCount" :key="memberData.id" class="column is-6-mobile">
          <MemberSP :id="memberData.id" :name="memberData.name" :imagename="memberData.imagename" :position="memberData.position"></MemberSP>
        </div>
      </transition-group>
    <!-- <div class="columns mt-5 is-mobile has-text-centered">
      <div class="column is-12">
        <button @click="goToReservation" class="reservation-button button mx-5">　<b>イムカフェご予約はこちら</b></button>
      </div>
    </div> -->
    <div class="brick">
      <div class="brick-area">
      </div>
    </div>
  </section>
</template>

<script>
import Member from '~/components/Member'
import MemberSP from '~/components/MemberSP'
import allmembers from '@/assets/json/member.json'
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
      tokyobuttonflag: true,
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
.menu-button {
  width: 180px;
  height: 46px;
  font-size: 21.97px;
  color: #665039;
}
.menu-button-focus {
  width: 180px;
  height: 46px;
  background-color: #665039;
}
.reservation-button {
  background-color: #665039;
  color: white;
  width: 80%;
  height: 64px;
  font-size: 26px;
  font-family: "游ゴシック体";
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
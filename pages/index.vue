<template>
  <section class="section">
    <div class="columns is-mobile">
      <div class="column is-1">
      </div>
      <div class="column is-10 has-text-centered">
        <button @click="getMember(0)" class="button"><b-icon icon="github" type="is-primary"/>　全員</button>
        <button @click="getMember(1)" class="button"><b-icon icon="github" type="is-primary"/>　営業</button>
        <button @click="getMember(2)" class="button"><b-icon icon="github" type="is-primary"/>　クリエイティブ</button>
        <button @click="getMember(3)" class="button"><b-icon icon="github" type="is-primary"/>　経理</button>
      </div>
      <div cvlass="column is-1">
      </div>
    </div>
    <div class="columns is-mobile">
      <div class="column is-12">
        <hr />
      </div>
    </div>
      <transition-group appear name="items" tag="div" class="columns is-mobile is-multiline">
        <div v-for="memberData of memberCount" :key="memberData.id" class="column is-one-fourth-desktop is-one-fourth-tablet is-6-mobile p-1">
          <Member :id="memberData.id" :name="memberData.name" :imagename="memberData.imagename" :division="memberData.division" :occupation="memberData.occupation" :position="memberData.position"></Member>
        </div>
      </transition-group>
  </section>
</template>

<script>
import Member from '~/components/Member'
import allmembers from '@/assets/json/member.json'

export default {
  data() {
    return {
      allmemberData: [],
      memberData: [],
    }
  },
  components: {
    Member
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
          this.memberData = []
          this.allmemberData.forEach(member => {
            if (member.division == "営業部") {
              this.memberData.push(member)
            }
          });
          break;
        case 2:
          this.memberData = []
          this.allmemberData.forEach(member => {
            if (member.division == "クリエイティブ部") {
              this.memberData.push(member)
            }
          });
          break;
        case 3:
          this.memberData = []
          this.allmemberData.forEach(member => {
            if (member.division == "経理部") {
              this.memberData.push(member)
            }
          });
          break;
        default:
          break;
      }
    }
  }
}
</script>

<style scoped>
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
</style>
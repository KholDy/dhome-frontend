<script>
  import MainHeader from './components/MainHeader.vue'
  import House from './components/House.vue'

  export default {
    components: {MainHeader, House},

    data() {
      return {
        house: []
      }
    },

    methods: {
      getHouse() {
        fetch('http://localhost:8080/house')
          .then(response => response.json())
            .then(data => this.house = data)
      }
    },

    computed: {
      isHouseAvailable() {
        return this.house && this.house.length;
      }
    },

    created() {
      this.getHouse()
    }
  }
</script>

<template>
  <MainHeader />
  <div v-if="isHouseAvailable">
    <House :title="house[0].name"/>
  </div>
</template>

<style scoped>
</style>

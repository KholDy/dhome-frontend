<script>
import House from '@/components/House.vue'

export default {
  components: {House},

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
<div v-if="isHouseAvailable">
    <House :title="house[0].name"/>
</div>
</template>
<template>
  <div :class="{'drunk': drunk}">
    <p class="pack-count">Pack Count: {{packItensCount}}</p>
    <div class='pack' v-for='item in packItens' :key='item.id'>
      <bottle
        @buyBottle="buyBottle"
        @drinkBottle="drinkBottle"
        :item="item" />
    </div>
    </div>
  </template>
<script>
import { mapGetters, mapActions } from 'vuex'
import Bottle from '@/components/Bottle/Bottle'

export default {
  name: 'Pack',
  components: { Bottle },
  data () {
    return {
      packItens: [{
        type: 'breja',
        price: 3.29,
        size: 'latinha',
        brand: 'heineken',
        image: '/images/heineken.png',
        ammount: 2,
        drinking: 0
      }],
      drunk: false
    }
  },
  methods: {
    ...mapActions('pack', [ 'addPackItem' ]),
    buyBottle (ammount) {
      if (ammount > 6) this.addPackItem()
      return true
    },
    drinkBottle (drinking) {
      if (drinking >= 6) {
        this.drunk = true
      }
      return true
    }
  },
  computed: {
    ...mapGetters('pack', [ 'packItensCount' ])
  }
}
</script>
<style scoped lang="scss">
  .drunk {
    filter: blur(2px);
  }
</style>

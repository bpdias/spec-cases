<template>
  <div>
    <p>Pack Count: {{packItensCount}}</p>
    <div class='pack' v-for='item in packItens' :key='item.id'>
      <bottle @buyBottle="buyBottle" :item="item"></bottle> 1 </div>
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
        ammount: 2
      }]
    }
  },
  methods: {
    ...mapActions('pack', ['addPackItem']),
    buyBottle () {
      this.addPackItem()
      return true
    }
  },
  computed: {
    ...mapGetters('pack', ['packItensCount'])
  }
}
</script>

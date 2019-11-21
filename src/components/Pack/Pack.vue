<template>
  <div>
    <p>Bottle Count: </p>
    <div class='pack' @openBottle="removeBottle">
      <bottle v-for='item in packItens' :key='item.id'></bottle> 1 </div>
    </div>
  </template>
<script>
import { mapGetters } from 'vuex'
import Bottle from '@/components/Bottle/Bottle'

export default {
  name: 'Pack',
  components: { Bottle },
  data () {
    return {
      packItens: []
    }
  },
  methods: {
    removeBottle () {
      return true
    }
  },
  computed: {
    ...mapGetters('pack', ['packItensCount'])
  }
}
</script>

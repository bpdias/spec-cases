<template>
  <div class='pack'>
    <bottle v-for='item in packItens' :key='item.id'></bottle> 1 </div>
  </template>
<script>
import Bottle from '@/components/Bottle/Bottle'

export default {
  name: 'Pack',
  components: { Bottle },
  data () {
    return {
      packItens: []
    }
  }
}
</script>

<template>
  <bottle :item="item" />
</template>

<script>
import Bottle from '@/components/Bottle/Bottle'

export default {
  name: 'HelloWorld',
  components: {
    Bottle
  },
  data () {
    return {
      item: {
        type: 'breja',
        price: '3.29',
        size: 'latinha',
        brand: 'heineken',
        image: '/images/heineken.png',
        ammount: 2
      }
    }
  }
}
</script>

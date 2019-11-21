<template>
  <div class="bottle">
    <h2 class="red">{{item.brand}}</h2>
    <p>{{item.type}}</p>
    <p>{{item.size}}</p>
    <p>{{item.price}}</p>
    <img :src="item.image" alt="">
    <p>{{this.totalValue}}</p>

  </div>
</template>
<script>
export default {
  name: 'Botlle',
  props: ['item'],
  computed: {
    totalValue: function () {
      return this.item.price * this.item.ammount
    }
  }
}
</script>

<style scoped lang="scss">
  .red{
    color: red;
  }
</style>

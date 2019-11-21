<template>
  <div class="bottle">
    <h2 class="red">marca: {{item.brand}}</h2>
    <p>tipo: {{item.type}}</p>
    <p>tamanho: {{item.size}}</p>
    <p>preço: {{item.price}}</p>
    <p>quantidade: {{item.ammount}}</p>
    <img :src="item.image" alt="">
    <p>valor total: {{this.totalValue}}</p>
    <button @click="openBottle" id="b">Open the Bottle?</button>
  </div>
</template>
<script>
export default {
  name: 'Botlle',
  props: ['item'],
  computed: {
    totalValue: function () {
      return (this.item.price * this.item.ammount).toFixed(2)
    }
  },
  methods: {
    someMethod () {
      return 1
    },
    openBottle () {
      this.item.ammount += 1
      this.$emit('removeBottle')
    }
  }
}
</script>

<style scoped lang="scss">
  .red{
    color: red;
  }
</style>

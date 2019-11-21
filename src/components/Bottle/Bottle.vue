<template>
  <div class="bottle">
    <h2 class="red">marca: {{item.brand}}</h2>
    <p>tipo: {{item.type}}</p>
    <p>tamanho: {{item.size}}</p>
    <p>preço: {{item.price}}</p>
    <p>quantidade comprada: {{item.ammount}}</p>
    <p>quantidade bebida: {{item.drinking}}</p>
    <img :src="item.image" alt="">
    <p>valor total: {{this.totalValue}}</p>
    <button @click="buyBottle" id="b">Buy a Bottle?</button>
    <button @click="drinkBottle" id="b">Drink a Bottle?</button>
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
    buyBottle () {
      this.item.ammount += 1
      this.$emit('buyBottle', this.item.ammount)
    },
    drinkBottle () {
      if (this.item.ammount > this.item.drinking) {
        this.item.drinking += 1
        this.$emit('drinkBottle')
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .red{
    color: red;
  }
</style>

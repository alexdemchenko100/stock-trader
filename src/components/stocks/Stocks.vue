<template>
  <div class="container">
    <div class="row">
        <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
    </div>
  </div>
</template>

<script>
  import Stock from './Stock.vue'

  export default {
    data () {
      return {
        stocks: [
          { id: 1, name: 'BMW', price: 115 },
          { id: 2, name: 'Google', price: 180 },
          { id: 3, name: 'Apple', price: 235 },
          { id: 4, name: 'Twitter', price: 13 }
        ]
      }
    },
    components: {
      appStock: Stock
    }
  }
</script>

<template>
  <div class="col-sm-6 col-md-4">
    <div class="card border-success mb-3" >
      <div class="card-header ">
        {{ stock.name }}
        <small>(Price: {{ stock.price }})</small>
      </div>
      <div class="card-body text-success">
        <div class="float-left">
          <input
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
          >
        </div>
        <div class="float-right">
          <button
            class="btn btn-success"
            @click="buyStock"
            :disabled="quantity <= 0 || !Number.isInteger(+quantity)"
          >Buy</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['stock'],
    data () {
      return {
          quantity: 0
      }
    },
    methods: {
      buyStock () {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        }
        this.$store.dispatch('buyStock', order)
        this.quantity = 0
      }
    }
  }
</script>

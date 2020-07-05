<template>
  <div class="col-sm-6 col-md-4">
    <div class="card border-info mb-3" >
      <div class="card-header ">
        {{ stock.name }}
        <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
      </div>
      <div class="card-body text-info">
        <div class="float-left">
          <input
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
            :class="{danger: insufficientQuantity}"
          >
        </div>
        <div class="float-right">
          <button
            class="btn btn-info"
            @click="sellStock"
            :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(+quantity)"
          >{{ insufficientQuantity ? 'Not Enough' : 'Sell'}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .danger {
    border: 1px solid red;
  }
</style>

<script>
  import {mapActions} from 'vuex'

  export default {
    props: ['stock'],
    data () {
      return {
        quantity: 0
      }
    },
    computed: {
      insufficientQuantity() {
        return this.quantity > this.stock.quantity
      }
    },
    methods: {
      ...mapActions({
        placeSellOrder: 'sellStock'
      }),
      sellStock () {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        }
        this.placeSellOrder(order)
        this.quantity = 0
      }
    }
  }
</script>

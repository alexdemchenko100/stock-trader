<template>
  <div class="col-sm-6 col-md-4">
    <div class="card border-success mb-3" >
      <div class="card-header ">
        {{ stock.name }}
        <smal>(Price: {{ stock.price }})</smal>
      </div>
      <div class="card-body text-success">
        <div class="float-left">
          <input
            class="form-control"
            placeholder="Quantity"
            type="number"
            v-model="quantity"
          >
        </div>
        <div class="float-right">
          <button
            class="btn btn-success"
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
    }
  }
</script>

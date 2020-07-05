<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">Stock Trader</router-link>
      </div>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto nav-pills">
          <router-link to="/portfolio" activeClass="active" class="nav-item" tag="li"><a class="nav-link">Portfolio</a></router-link>
          <router-link to="/stocks" activeClass="active" class="nav-item" tag="li"><a class="nav-link">Stocks</a></router-link>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a class="nav-link" href="#" @click="endDay">End Day</a></li>
          <li class="nav-item dropdown">
            <a
                href="#"
                class="dropdown-toggle nav-link"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false">Save & Load <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a class="nav-link" href="#" @click="saveData">Save Data</a></li>
              <li><a class="nav-link" href="#" @click="loadData" >Load Data</a></li>
            </ul>
          </li>
        </ul>
        <strong class="nav-item navbar-text navbar-right">Funds: {{ funds | currency }}</strong>
      </div>
    </div>
  </nav>
</template>

<style>
  @media only screen and (min-width: 991px) {
    .navbar {
      padding-top: 0;
      padding-bottom: 0;
      border-style: solid;
      border-width: thin;
      border-color: #e8dede;
      margin-bottom: 20px;
    }

    .nav-pills .nav-link {
      padding-top: 15px;
      padding-bottom: 15px;
      border-radius: 0;
    }
  }
  .active {
    background-color: #e8dede;
  }
</style>

<script>
  import {mapActions} from 'vuex'

  export default {
    computed: {
      funds() {
        return this.$store.getters.funds
      }
    },
    methods: {
      ...mapActions({
        randomizeStocks: 'randomizeStocks',
        fetchData: 'loadData'
      }),
      endDay() {
        this.randomizeStocks()
      },
      saveData() {
        const data = {
          funds: this.$store.getters.funds,
          stockPortfolio: this.$store.getters.stockPortfolio,
          stocks: this.$store.getters.stocks
        }
        this.$http.put('data.json', data)
        console.log(data)
        console.log(this.$http.options.root)
      },
      loadData() {
        this.fetchData()
      }
    }
  }
</script>

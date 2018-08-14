<style lang="stylus" rel="stylesheet/stylus">
  @import 'common/stylus/index'
</style>

<template>
<div>
  <v-footer></v-footer>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</div>

</template>

<script>
import footer from 'components/footer/footer'
import axios from 'axios'

const ERR_OK = 0

export default {
  data() {
    return {
      seller: {}
    }
  },
  created() {
    axios.get('static/data.json').then((res) => {
      this.seller = res.data.seller
    })
  },
  components: {
    'v-footer': footer
  }
}

</script>

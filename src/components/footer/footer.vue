<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixin'
  body
    margin 0
    padding 0
  .tab
    max-width 100%
    width 100%
    height 50px
    position absolute
    bottom 0
    display flex 
    line-height 40px
    border-top solid 1px rgba(7,17,27,0.1)
    z-index 200
    .tab-item
      flex 1
      text-align:center
      a
        display:block
        font-size:14px
        color rgb(77,85,93)
        &.active
          font-size 14px
          color rgb(240,20,20)
</style>

<template>

<div v-if="$store.state.logged_in" class="tab">
  <div class="tab-item">
    <router-link to="/recent">热门</router-link>
  </div>
  <div class="tab-item">
    <router-link to="/guess">竞猜</router-link>
  </div>
  <div class="tab-item">
    <router-link to="/mine">我的</router-link>
  </div>
</div>

</template>

<script>

export default {

}

</script>

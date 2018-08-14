<template lang="html">
  <div class="mine">
    <ul class="mine-wrapper">
      <li class="mine-item mine-profile">信息</li>
      <li class="mine-item mine-wallet">钱包</li>
      <li class="mine-item mine-guess">竞猜</li>
      <li class="mine-item mine-help">帮助</li>
      <li class="mine-item mine-help">设置</li>
    </ul>
  </div>
</template>

<script>
export default {
}

</script>

<style lang="stylus">
@import '../../common/stylus/mixin'
  .mine
    display flex
    width 100%
    height 100%
    .mine-wrapper
      width 100%
      height 100%
      .mine-item
        position relative
        display table
        height 54px
        width 100%
        line-height 54px
        padding 0 30px
        box-sizing border-box
        border-bottom: 1px solid rgba(7,17,27,0.1)
        &:last-child
          border-bottom none
</style>

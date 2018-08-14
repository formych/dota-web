<template>
  <div>
      <!-- <h1>这是竞猜列表</h1> -->
    <div class="guess-tab">
      <div class="guess-tab-item">即将到来</div>
      <div class="guess-tab-item">进行中</div>
      <div class="guess-tab-item">已结束</div>
      <div class="guess-tab-item">已结算</div>
    </div>
    <div class="guess-list">
        <ul>
          <li class="guess-list-header">
            <span class="span-item">日期</span>
            <span class="span-item">队伍</span>
            <span class="span-item">类型</span>
            <span class="span-item">赔率</span>
            <span class="span-item">支持</span>
            <span class="span-item">资金池</span>
          </li>
          <li class="guess-list-item">
            <span class="span-item">
              <span class="date">06-01</span>
              <span class="date">12:00</span>
            </span>
            <span class="span-item">
              <span class="date">LGD</span>
              <span class="date">IG</span>
            </span>
            <span class="span-item">比分</span>
            <span class="span-item">
              查看
            </span>
            <span class="span-item">100001111</span>
          </li>
        </ul>
      </div>
  </div>

</template>

<script>
export default {

}
</script>
<style lang='stylus'>
@import '../../common/stylus/mixin'
  .content
    width 100%
    height 100%
    position absolute
    top 0
    bottom 50px
    overflow-y auto
    z-index 100
  .guess-tab
    max-width 100%
    width 100%
    height 50px
    position absolute
    top 0
    display flex
    line-height 40px
    border-bottom solid 1px rgba(7,17,27,0.1)
    z-index 200
  .guess-tab-item
    flex 1
    text-align center
  .guess-list
    margin-top 55px
    overflow-y auto
    .guess-list-header, .guess-list-item
      line-height 50px
      margin-left 10px
      border-bottom 1px solid rgba(7,17,27,0.1)
      .span-item
        width 15%
        display inline-block
      .date
        height 12px
        line-height 12px
        font-size 8px
        display block
  .vs
    width 20px
    height 50px
    line-height 50px
    margin 0
    font-size 14px
    text-align center
  .team-wrapper
    display flex
    width 80%
    height 50px
    margin-left 10px
    font-size 1.2em
    .select-team
      width 60px
      margin 5px
      margin-left 10px
      outline none
      border none

  #option-box
    width 80%
    margin 0 auto
    vertical-align middle
</style>

<template lang='html'>
  <div class="content">
    <div class='guess-form'>
      <div class='common-wrapper guess-input-wrapper'>
        <label for='name'>竞猜名字</label>
        <input v-model='name' id='name' class='input-item' placeholder="Na'vi vs Wings" required>
      </div>
      <div class='common-wrapper guess-input-wrapper'>
        <label>比赛队伍</label>
        <div class='team-wrapper'>
          <select v-model='teamA' id='team-a' class='select-team ' required>
            <option v-for="(item, index) in teamList" v-bind:value=item.id>{{item.name}}</option>
          </select>
          <span class="vs">VS</span>
          <select v-model='teamB' id='team-b' class='select-team' required>
            <option v-for="(item, index) in teamList" v-bind:value=item.id>{{item.name}}</option>
          </select>
        </div>
      </div>
        <div class='common-wrapper guess-input-wrapper'>
          <label for='guess-type'>竞猜类型</label>
          <select v-model='guessTypeId' id='guess-type' class='input-item' @change="toggleOption($event)">
            <option v-for="(item, index) in guessTypeList" v-bind:value=item.id>{{item.name}}</option>
          </select>
        </div>
        <div id='option-box'>
          <div v-for="(item, index) in guessTypeList[guessTypeId-1].options" class='option-wrapper'>
              <label for='option-name'>{{item.name}}</label>
              <input type='checkbox' class="option-item" v-bind:value=item.value v-bind:name=item.name>
          </div>
        </div>
        <div class='common-wrapper guess-input-wrapper'>
          <label for='settle-type'>结算类型</label>
          <select v-model='settleTypeId' id='settle-type' class='input-item' required>
            <option v-for="(item, index) in settleTypeList" v-bind:value=item.id>{{item.name}}</option>
          </select>
        </div>
        <div class='common-wrapper guess-input-wrapper'>
          <label for='chip-type'>筹码类型</label>
          <select v-model='chipTypeId' id='chip-type' class='input-item' required>
            <option v-for="(item, index) in chipTypeList" v-bind:value=item.id>{{item.name}}</option>
          </select>
        </div>
        <div class='common-wrapper guess-input-wrapper'>
          <label for='start-time'>开始时间</label>
          <input v-model='startTime' id='start-time' class='input-item time' type='datetime-local' placeholder='开始时间' required>
        </div>
        <div class='common-wrapper guess-input-wrapper'>
          <label for='end-time'>结束时间</label>
          <input v-model='endTime' id='end-time' class='time input-item' type='datetime-local' placeholder='最晚结算时间' required>
        </div>
    </div>
    <div class='common-wrapper button-wrapper'>
      <button id='button-submit' class='button-submit' @click='summit($event)'>提交</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

const CodeOK = 200
export default {
  data() {
    return {
      guessTypeList: '',
      teamList: '',
      settleTypeList: '',
      chipTypeList: '',
      options: [],
      name: '',
      teamA: 1,
      teamB: 2,
      guessTypeId: 1,
      settleTypeId: 1,
      chipTypeId: 1,
      startTime: '',
      endTime: ''
    }
  },
  created() {
    this.guessTypeList = result.data
    this.settleTypeList = settleTypeList.data
    this.chipTypeList = chipTypeList.data
    axios.get('http://localhost/v1/team/list', {
      withCredentials: true
    }).then((res) => {
      if (res.data.code === CodeOK) {
        this.teamList = res.data.data
      } else {
        alert(res.data.msg)
      }
    })
  },
  methods: {
    toggleOption(event) {
      this.options = []
      this.guessTypeId = event.target.value
    },
    summit(event) {
      event.preventDefault()
      // document.getElementById('button-submit').setAttribute('disabled', 'disabled')
      let items = document.getElementsByClassName('option-item')
      this.options = []
      for (let i = 0; i < items.length; i++) {
        if (items[i].checked) {
          let option = {
            name: items[i].name,
            value: +items[i].value
          }
          this.options.push(option)
        }
      }
      let info = {
        teams: [+this.teamA, this.teamB],
        options: this.options
      }
      axios.post('http://localhost/v1/guess/add', {
        name: this.name,
        guess_type_id: this.guessTypeId,
        settle_type_id: this.settleTypeId,
        chip_type_id: this.chipTypeId,
        info: info,
        start_time: this.startTime,
        end_time: this.endTime
      }, {
        withCredentials: true
      }).then((res) => {
        if (res.data.code === CodeOK) {
          localStorage.setItem('logged_in', true)
          this.$store.state.logged_in = true
          this.$router.push('guess')
        } else {
          alert(res.data.msg)
        }
      })
    }
  }
}
var settleTypeList = {
  'code': 200,
  'msg': '成功',
  'data': [
    {
      'id': 1,
      'name': '同注分彩法'
    }
  ]
}
var chipTypeList = {
  'code': 200,
  'msg': '成功',
  'data': [
    {
      'id': 1,
      'name': '豆子'
    }
  ]
}

var result = {
  'code': 200,
  'msg': '成功',
  'data': [
    {
      'id': 1,
      'name': '胜负',
      'type': 1,
      'options': [
        {
          'type': 1,
          'name': '有平局',
          'value': 1
        }
      ]
    },
    {
      'id': 2,
      'type': 2,
      'name': '十杀',
      'options': []
    },
    {
      'id': 3,
      'type': 2,
      'name': '一血时间',
      'options': [
        {
          'type': 2,
          'name': '1min内',
          'value': 1
        },
        {
          'type': 2,
          'name': '6min内',
          'value': 1
        },
        {
          'type': 2,
          'name': '10min内',
          'value': 2
        },
        {
          'type': 2,
          'name': '10min内',
          'value': 2
        },
        {
          'type': 2,
          'name': '10min内',
          'value': 3
        },
        {
          'type': 2,
          'name': '10min内',
          'value': 4
        },
        {
          'type': 2,
          'name': '10min内',
          'value': 1
        },
        {
          'type': 2,
          'name': '10min内',
          'value': 1
        }
      ]
    },
    {
      'id': 4,
      'type': 2,
      'name': '一血方',
      'options': []
    },
    {
      'id': 5,
      'type': 3,
      'name': '比分',
      'options': [
        {
          'value': 1,
          'type': 2,
          'name': '1:0'
        },
        {
          'value': 2,
          'type': 2,
          'name': '2:0'
        },
        {
          'value': 3,
          'type': 2,
          'name': '3:0'
        }
      ]
    }
  ]
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
  .common-wrapper
    display flex
    height 50px
    width 90%
    margin 0 auto
    vertical-align middle
  .guess-input-wrapper
    border-bottom 1px solid rgba(7,17,27,0.1)
    label
      height 50px
      width 25%
      margin-left 10px
      line-height 50px
      display inline-block
    .input-item
      width 150px
      margin 5px
      margin-left: 10px
      outline none
      border none
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
    margin-left: 10px
    font-size 1.2em
    .select-team
      width 60px
      margin: 5px
      margin-left: 10px
      outline none
      border none

  #option-box
    width 80%
    margin 0 auto
    vertical-align middle
  .option-wrapper
    display flex    
    height 40px
    line-height 40px
    margin 0 auto
    label
      width 30%
    .option-item
      width 20px
      height 38px
      line-height 38px
      vertical-align middle
  .button-wrapper
    width 100%
    margin 20px 0
    .button-submit
      width 90%
      margin 0 auto
      outline none
      cursor pointer
      font-size 1.3em
      border-radius: 30px
      border 0
      background-color #f70
  .time
    background-color white
    width 55% !important
</style>

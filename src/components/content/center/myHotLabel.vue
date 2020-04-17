<template>
  <el-card class="box-card" shadow="hover">
    <div slot="header" class="hotLabelTitle">
      <span>{{$t('hot.PopularTags')}}</span>
    </div>
    <div class="hotLabelInfo">
      <div v-for="(o,ind) in 4" :key="ind" @mouseenter="mouseIn(ind)" @mouseleave="mouseOut(ind)" class="hotLabel">
        <el-tag :type="currMoveNum === ind ? '':'info'" style="width: 100px;">
          <div class="labelText">
            {{o === 1?'java':'设计模式sdfsfsfsd'}}
          </div>
        </el-tag>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'myHotLabel',
  data () {
    return {
      labelType: 'info',
      currMoveNum: -1
    }
  },
  methods: {
    mouseIn (val) {
      this.currMoveNum = val
    },
    mouseOut (val) {
      this.currMoveNum = -1
    }
  }
}
</script>

<style scoped>
  .hotLabelTitle{
    display: -webkit-flex;
    display: flex;
  }
  .hotLabelInfo{
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .hotLabel{
    margin: 10px 0;
    cursor: pointer;
  }
  .labelText{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .hotLabel:hover{
  }
</style>

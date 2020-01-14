<template>
  <div class="my-avatar" @click="showDrawer">
    <el-avatar class="head-img" icon="el-icon-user-solid" :src=headPath></el-avatar>
    <i class="el-icon-caret-right"></i>
  </div>
</template>

<script>
import constantVar from '@/tools/constantVar.js'
export default {
  name: 'myAvatar',
  data () {
    return {
      headPath: constantVar.headPath
    }
  },
  methods: {
    showDrawer () {
      this.$store.commit('changeDrawer', true)
    }
  }
}
</script>

<style scoped>
  .my-avatar{
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    margin: 0 20px;
  }
  .my-avatar:hover{
    color: #1b65d6;
  }
</style>

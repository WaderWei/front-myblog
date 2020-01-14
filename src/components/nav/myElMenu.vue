<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">模块1</el-menu-item>
      <el-submenu index="2">
        <template slot="title">模块2</template>
        <el-menu-item index="2-1">模块2-1</el-menu-item>
        <el-menu-item index="2-2">模块2-2</el-menu-item>
        <el-menu-item index="2-3">模块2-3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">模块2-4</template>
          <el-menu-item index="2-4-1">模块2-4-1</el-menu-item>
          <el-menu-item index="2-4-2">模块2-4-2</el-menu-item>
          <el-menu-item index="2-4-3">模块2-4-3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"><a href="#" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: 'myElMenu',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
  .el-menu.el-menu--horizontal{
    border-bottom: 0;
  }
</style>

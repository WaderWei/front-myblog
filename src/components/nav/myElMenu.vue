<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" :class="{phoneStyle:classPhone}" :mode="modePhoneMenu"
             @select="handleSelect">
      <el-menu-item index="1">
        <i class="el-icon-location" v-if="classPhone"></i>
        <span>导航一</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu" v-if="classPhone"></i>
          <span slot="title">导航二</span>
        </template>
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
      <el-menu-item index="3">
        <i class="el-icon-menu" v-if="classPhone"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-menu" v-if="classPhone"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
    <div class="line" v-if="classPhone"></div>
  </div>
</template>

<script>
export default {
  name: 'myElMenu',
  props: {
    modePhoneMenu: {
      type: String,
      default: 'horizontal'
    },
    classPhone: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
      if (this.classPhone) {
        this.$store.commit('changePhoneDrawer', false)
      }
    }
  }
}
</script>

<style scoped>
  .el-menu.el-menu--horizontal {
    border-bottom: 0;
  }

  .phoneStyle {
    margin-top: 40px;
  }
</style>

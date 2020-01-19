<template>
  <div>
    <el-drawer
      :visible.sync="$store.state.drawer"
      :direction="direction"
      :before-close="handleCloseWithDrawer"
      :with-header="false"
      :size="$store.state.isPhone ? '50%':'18%'">
      <div>
        <div class="drawer-head">
          <el-avatar class="head-img" :size="100" icon="el-icon-user-solid" :src=headPath></el-avatar>
          <span>weiqiyou</span>
        </div>
        <div class="drawer-menu">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @select="handleSelect"
            @open="handleOpenWithMenu"
            @close="handleCloseWithMenu">
            <el-menu-item index="1" class="item">
              <i class="el-icon-user-solid"></i>
              <span slot="title">个人主页</span>
            </el-menu-item>
            <el-menu-item index="2" class="item">
              <i class="el-icon-edit"></i>
              <span slot="title">写博客</span>
            </el-menu-item>
            <el-menu-item index="3" class="item">
              <i class="el-icon-star-on"></i>
              <span slot="title">我的收藏</span>
            </el-menu-item>
            <el-menu-item index="4" class="item">
              <el-badge :value="$store.state.unReadMsg" :is-dot="$store.state.unReadMsg > 999" class="badgeMsg">
                <i class="el-icon-chat-dot-round"></i>
              </el-badge>
              <span slot="title">消息中心</span>
            </el-menu-item>
            <el-menu-item index="5" class="item">
              <i class="el-icon-turn-off"></i>
              <span slot="title">退出</span>
            </el-menu-item>
          </el-menu>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import constantVar from '@/tools/constantVar.js'
export default {
  name: 'myDrawer',
  data () {
    return {
      // drawer: this.$store.state.drawer,
      headPath: constantVar.headPath,
      direction: 'rtl'
    }
  },
  created () {
  },
  mounted () {
  },
  watch: {
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
      this.$store.commit('changeDrawer', false)
    },
    handleCloseWithDrawer (done) {
      this.$store.commit('changeDrawer', false)
    },
    handleOpenWithMenu (key, keyPath) {
      console.log(key, keyPath)
    },
    handleCloseWithMenu (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
  .drawer-head{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
  }
  .drawer-head > span{
    font-size: x-large;
    font-weight: bold;
    margin-top: 20px;
  }
  .drawer-menu .item{
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid gainsboro;
  }
  .drawer-menu .item:first-child {
    margin-top: 30px;
  }
  .drawer-menu .item:last-child {
    border-bottom: 1px solid gainsboro;
  }
  .badgeMsg{
    display: flex;
  }
</style>

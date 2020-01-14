<template>
  <div>
    <el-drawer
      :visible.sync="$store.state.phoneDrawer"
      :direction="direction"
      :before-close="handleCloseWithDrawer"
      :with-header="false"
      :size="$store.state.isPhone ? '50%':'18%'">
      <div>
        <div class="drawer-menu">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
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
export default {
  name: 'myPhoneDrawer',
  data () {
    return {
      direction: 'ltr'
    }
  },
  created () {
  },
  mounted () {
  },
  watch: {
  },
  methods: {
    handleCloseWithDrawer (done) {
      this.$store.commit('changePhoneDrawer', false)
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
    margin-top: 50px;
  }
  .drawer-menu .item:last-child {
    border-bottom: 1px solid gainsboro;
  }
</style>

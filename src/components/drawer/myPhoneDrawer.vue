<template>
  <el-drawer class="phone-drawer"
             :visible.sync="$store.state.phoneDrawer"
             :direction="direction"
             :before-close="handleCloseWithDrawer"
             :with-header="false"
             :size="$store.state.isPhone ? '50%':'18%'">
    <div>
      <my-el-menu mode-phone-menu="vertical" :class-phone="true"/>
    </div>
  </el-drawer>
</template>

<script>
import myElMenu from '../nav/myElMenu'

export default {
  name: 'myPhoneDrawer',
  components: {
    myElMenu
  },
  data () {
    return {
      direction: 'ltr'
    }
  },
  created () {
  },
  mounted () {
  },
  watch: {},
  methods: {
    handleCloseWithDrawer (done) {
      this.$store.commit('changePhoneDrawer', false)
    }
  }
}
</script>

<style scoped>
  .drawer-head {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
  }

  .drawer-head > span {
    font-size: x-large;
    font-weight: bold;
    margin-top: 20px;
  }

  .drawer-menu .item {
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

  .phone-drawer {
  }
</style>

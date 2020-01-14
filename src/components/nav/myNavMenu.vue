<template>
  <div>
    <div class="allNav">
      <el-row>
        <el-col :span="4" class="col-logo">
          <!--title-->
          <div class="logo">
            <my-logo/>
          </div>
        </el-col>
        <el-col :span="14" class="hidden-sm-and-down">
          <!--nav menu-->
          <div class="menu">
            <my-el-menu/>
            <div class="nav-left">
              <!--search-->
              <div class="search">
                <el-input
                  @blur="searchBlur"
                  @focus="searchFocus"
                  placeholder="请输入要查找的内容"
                  v-model="searchKey">
                  <i slot="prefix" class="el-input__icon el-icon-search" :class="{ searchFocus:isFocus }"></i>
                </el-input>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="nav-right">
            <my-msg/>
            <my-avatar/>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css'
import myLogo from './myLogo'
import myElMenu from './myElMenu'
import myAvatar from './myAvatar.vue'
import myMsg from './myMsg.vue'

export default {
  name: 'myNavMenu',
  components: {
    myElMenu,
    myAvatar,
    myMsg,
    myLogo
  },
  data () {
    return {
      searchKey: '',
      isFocus: false
    }
  },
  methods: {
    searchBlur () {
      this.isFocus = false
    },
    searchFocus () {
      this.isFocus = true
    }
  }
}
</script>

<style scoped>
  .allNav {
    margin: 15px 0;
  }

  .col-logo {
    display: block;
  }

  .allNav .menu {
    display: flex;
    align-items: center;
  }
  .allNav .nav-left{
    margin-left: 18px;
  }
  .allNav .nav-right {
    display: flex;
    align-items: center;
    position: absolute;
    right: 10px;
    top: 15px;
  }

  .line {
    border: 1px solid #ebebeb;
  }

  .searchFocus {
    color: #3487f1;
  }
</style>

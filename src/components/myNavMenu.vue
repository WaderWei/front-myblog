<template>
  <div>
    <div class="allNav">
      <div class="nav-left">
        <!--title-->
        <div class="logo">
          <my-logo/>
        </div>
        <!--nav menu-->
        <div>
          <my-el-menu/>
        </div>
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
      <div class="nav-center">

      </div>
      <div class="nav-right">
        <my-msg/>
        <my-avatar/>
      </div>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
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
  .allNav{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
  }
  .allNav > .nav-left{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .allNav > .nav-left > .logo{
    margin: 0 40px 0 20px;
  }
  .allNav > .nav-left > .search{
    margin: 0 20px 0 40px;
    cursor: pointer;
  }
  .allNav > .nav-right{

  }
  .allNav > .nav-right{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
  .line{
    border:1px solid #ebebeb;
  }
  .searchFocus{
    color: #3487f1;
  }
</style>

<template>
  <div class="myMain">
    <my-phone-drawer/>
    <left-main class="left-main"/>
    <center-main class="center-main"/>
    <right-main class="right-main"/>
    <my-drawer class="my-drawer"/>
  </div>
</template>

<script>
import leftMain from './leftMain'
import centerMain from './centerMain'
import rightMain from './rightMain'
import myDrawer from './myDrawer'
import myPhoneDrawer from './myPhoneDrawer'

export default {
  name: 'myMain',
  components: {
    leftMain,
    centerMain,
    rightMain,
    myDrawer,
    myPhoneDrawer
  }
}
</script>

<style scoped>
  .myMain {
    display: flex;
    flex-direction: row;
  }
  .left-main{
    flex-grow: 1;
  }
  .center-main{
    flex-grow: 8;
  }
  .right-main{
    flex-grow: 1;
  }
</style>

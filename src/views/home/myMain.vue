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
import leftMain from '@/components/content/leftMain'
import centerMain from '@/components/content/centerMain'
import rightMain from '@/components/content/rightMain'
import myDrawer from '@/components/drawer/myDrawer'
import myPhoneDrawer from '@/components/drawer/myPhoneDrawer'

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
    flex-grow: 2;
  }
  .center-main{
    flex-grow: 8;
  }
  .right-main{
    flex-grow: 2;
  }
</style>

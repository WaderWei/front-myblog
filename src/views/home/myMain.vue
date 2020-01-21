<template>
  <div class="myMain">
    <left-main class="left-main"/>
    <center-main class="center-main"/>
    <right-main class="right-main"/>
  </div>
</template>

<script>
import leftMain from '@/components/content/leftMain'
import centerMain from '@/components/content/centerMain'
import rightMain from '@/components/content/rightMain'

export default {
  name: 'myMain',
  components: {
    leftMain,
    centerMain,
    rightMain
  }
}
</script>

<style scoped>
  .myMain {
    display: flex;
    flex-direction: row;
  }
  .left-main{
    flex-grow: 4;
  }
  .center-main{
    flex-grow: 8;
  }
  .right-main{
    flex-grow: 4;
  }
</style>

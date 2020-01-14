<template>
  <div class="contain">
    <my-nav-menu class="nav"/>
    <my-main class="main"/>
    <my-footer class="footer"/>
  </div>
</template>

<script>
import myNavMenu from '@/components/nav/myNavMenu'
import myMain from '@/components/content/myMain'
import myFooter from '@/components/foot/myFooter'
export default {
  name: 'index',
  components: {
    myNavMenu,
    myMain,
    myFooter
  }
}
</script>

<style scoped>
  .contain{
    display: flex;
    flex-direction: column;
  }
  .nav{

  }
  .main{
    flex-grow: 2;
  }
  .footer{

  }
</style>

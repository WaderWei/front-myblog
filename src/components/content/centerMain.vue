<template>
  <div class="container">
    <div>
      <my-carousel/>
    </div>
    <!--分割线-->
    <div class="dividing-line"></div>
    <div>
      <my-hot-article/>
    </div>
  </div>
</template>

<script>
import myCarousel from './center/myCarousel'
import myHotArticle from './center/myHotArticle'
export default {
  name: 'centerMain',
  components: {
    myCarousel,
    myHotArticle
  }
}
</script>

<style scoped>
  .container {
    margin-top: 20px;
  }
  .dividing-line{
    border-bottom: 10px solid #f9f9f9;
  }
</style>

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
    <div class="dividing-line"></div>
    <div>
      <my-home-article/>
    </div>
  </div>
</template>

<script>
import myCarousel from '../../components/content/center/myCarousel'
import myHotArticle from '../../components/content/center/myHotArticle'
import myHomeArticle from '../../components/content/center/myHomeArticle'
export default {
  name: 'centerMain',
  components: {
    myCarousel,
    myHotArticle,
    myHomeArticle
  },
  created () {
  }
}
</script>

<style scoped>
  .container {
    margin-top: 20px;
    width: 700px;
  }
  .dividing-line{
    border-bottom: 10px solid #f9f9f9;
  }
</style>

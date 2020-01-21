<template>
  <!--走马灯-->
  <div class="carousel animated fadeInDown">
    <el-carousel :interval="3000" type="card">
      <el-carousel-item>
        <img :src="require('@/assets/2.jpg')" class="img">
      </el-carousel-item>
      <el-carousel-item>
        <img :src="require('@/assets/3.jpg')" class="img">
      </el-carousel-item>
      <el-carousel-item>
        <img :src="require('@/assets/4.jpg')" class="img">
      </el-carousel-item>
      <el-carousel-item>
        <img :src="require('@/assets/5.jpg')" class="img">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'myCarousel'
}
</script>

<style scoped>
  .carousel{
  }
  .carousel .img{
    object-fit: fill;
    height:100%;
    width:100%;
  }
  .carousel .title{
    position: absolute;
    left: 10px;
    bottom: 10px;
  }
</style>

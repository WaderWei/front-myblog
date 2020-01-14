<template>
  <div class="container">
    <!--走马灯-->
    <div class="carousel">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item>

        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'centerMain'
}
</script>

<style scoped>
  .container {
    margin-top: 20px;
  }
</style>

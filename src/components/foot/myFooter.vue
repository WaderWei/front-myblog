<template>
  <div class="footer">
    <div class="line"></div>
    <div class="container">
      <span>不负好时光 Copyright © 2020</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myFooter'
}
</script>

<style scoped>
  .footer{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .footer .line{
    border: 1px solid gainsboro;
  }

  .footer .container{
    margin: 20px 0;
    font-family: "Sitka Banner";
  }

</style>

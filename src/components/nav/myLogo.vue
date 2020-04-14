<template>
  <div class="blog-title"  @click="backHome">
    <img :src="logoPath">
  </div>
</template>

<script>
import constantVar from '@/tools/constantVar.js'
export default {
  name: 'myLogo',
  data () {
    return {
      logoPath: constantVar.logoPath
    }
  },
  methods: {
    backHome () {
      this.$router.replace({ path: '/' })
    }
  }
}
</script>

<style scoped>
  .blog-title{
    cursor: pointer;
  }
  .blog-title > img{
    margin-top: 3px;
    width: 160px;
  }
</style>

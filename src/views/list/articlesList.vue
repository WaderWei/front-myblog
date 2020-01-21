<template>
  <div class="article-container">
    {{keyWord}}-
    {{chineseKeyWord}}
  </div>
</template>

<script>
import constantVar from '@/tools/constantVar.js'
export default {
  name: 'articlesList',
  data () {
    return {
      keyWord: '',
      chineseKeyWord: ''
    }
  },
  created () {
    this.keyWord = this.$route.query.keyWord
    this.chineseKeyWord = constantVar.menuValues.get(this.keyWord)
  },
  watch: {
    /* 监听路由的变化 */
    $route () {
      this.keyWord = this.$route.query.keyWord
      this.chineseKeyWord = constantVar.menuValues.get(this.keyWord)
    }
  }
}
</script>

<style scoped>
  .article-container{
   height: 100%;
  }
</style>

<template>
  <div class="article-container">
    <div class="article-head">
      <div>面包屑</div>
      <div>分类</div>
      <div>排序</div>
    </div>
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
    max-width: 1200px;
    background: orange;
    margin: 0 auto;
  }
  .article-head{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .article-head > div {
    border-bottom: 1px solid gray;
  }
</style>

<template>
  <div class="hot-article-contain animated zoomIn">
    <div class="header">
        <span>
          {{$t('hot.HotRecommendation')}}
        </span>
      <el-link :underline="false">
        {{$t('blog.more')}}
        <i class="el-icon-arrow-right el-icon--right"></i>
      </el-link>
    </div>
    <div class="hot-contain" :class="{'phoneArticleNowrap': $store.state.isPhone,'pcArticleWrap':!$store.state.isPhone}">
      <el-card v-for="(item,index) in 4" :key="index" shadow="hover" :body-style="{ padding: '0px' }" :class="{'phoneImageWidth': $store.state.isPhone,'pcImageWidth':!$store.state.isPhone}">
        <a href="#">
          <img :src="require('@/assets/3.jpg')" style="width: 100%;height: 100%"
                alt="springboot+maybatis搭建多模块应用" title="springboot+maybatis搭建多模块应用"/>
        </a>
        <div class="article-info">
          <div><el-link href="#" :underline="false" class="article-title">springboot+maybatis搭建多模块应用</el-link></div>
          <div class="article-date"><i class="el-icon-date"></i>{{new Date().toDateString()}}</div>
          <div><el-link type="primary" :underline="false" icon="el-icon-s-custom">weiqiyou</el-link></div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myHotArticle',
  data () {
    return {
      isPhone: false
    }
  },
  created () {
    this.isPhone = this.$store.state.isPhone
  }
}
</script>

<style scoped>
  .hot-article-contain .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 20px;
    border-bottom: 1px solid gainsboro;
  }

  .hot-article-contain .header > span {
    font-size: x-large;
  }

  .hot-article-contain .hot-contain {
    display: flex;
    justify-content: space-between;
    margin: 10px;
  }
  .phoneArticleNowrap{
    flex-wrap: wrap;
  }
  .pcArticleWrap{
    flex-wrap: nowrap;
  }
  .article-title{
    font-weight: bold;
    font-family: "Sitka Banner";
  }
  .article-info{
    text-align: left;
    display: flex;
    flex-direction: column;
  }
  .article-info > div{
    margin: 3px 5px;
  }
  .article-info > div:last-child{
    text-align: right;
    margin-right: 10px;
    margin-bottom: 5px;
  }
  .article-date{
    margin: 10px;
    font-size: 13px;
    color: #808082;
  }
  .article-date > i{
    margin-right: 8px;
  }
  .phoneImageWidth {
    width: 160px;
    margin: 10px 0px;
  }
  .pcImageWidth {
    width: 260px;
    margin: 10px 0px;
  }
</style>

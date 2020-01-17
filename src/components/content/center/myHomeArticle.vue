<template>
  <div class="home-article-container">
    <div class="home-article-item">
      <el-row class="item-row" :class="{'phoneRowMargin': $store.state.isPhone,'pcRowMargin':!$store.state.isPhone}">
        <el-col :class="{'phoneImageWidth': $store.state.isPhone,'pcImageWidth':!$store.state.isPhone}">
          <div class="item-img-container">
            <a href="#">
              <el-image :src="require('@/assets/3.jpg')" class="item-image" style="width:100%;height: 100%;object-fit: contain"
                        alt="springboot+maybatis搭建多模块应用" title="springboot+maybatis搭建多模块应用"/>
            </a>
          </div>
        </el-col>
        <el-col class="item-right">
          <div>
            <el-link href="#" :underline="false" class="article-title">
              springboot+maybatis搭建多模
            </el-link>
          </div>
          <div class="article-content" v-if="$store.state.isPhone">
            <span>
              springboot+maybatis搭建多模块应用搭建多模块应用搭建多模块应用搭建多模块应用
              搭建多模块应用搭建多模块应用搭建多模块应用搭建多模块应用 搭建多模块应用搭建多模块应用搭建多模块应用搭建多模块应用
              搭建多模块应用搭建多模块应用搭建多模块应用搭建多模块应用 搭建多模块应用搭建多模块应用搭建多模块应用搭建多
            </span>
          </div>
          <div>
            <el-link type="primary" :underline="false" icon="el-icon-s-custom">weiqiyou</el-link>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myHomeArticle',
  data () {
    return {}
  }
}
</script>

<style scoped>
  .home-article-item {
    height: 120px;
  }
  .item-img-container{
    width: 120px;
    height: 100px;
    background-color: lightblue;
  }
  .item-row{
    display: flex;
    flex-direction: row;
  }
  .item-row .item-right{
    text-align: left;
  }
  .article-title{
    font-size: 16px;
    font-weight: bold;
    font-family: "Sitka Banner";
    position:relative;
    line-height:1.4em;
    height:2.8em;
    overflow:hidden;
  }
  .article-content{
    max-height: 32px;
    font-size: 12px;
    position:relative;
    line-height:1.4em;
    height:2.8em;
    overflow:hidden;
  }
  .article-content::after{
    content:"...";
    font-weight:bold;
    position:absolute;
    bottom:0;
    right:0;
    padding-left:20px;
    background: -webkit-linear-gradient(left, transparent, #fff 62%);
    background: -o-linear-gradient(right, transparent, #fff 62%);
    background: -moz-linear-gradient(right, transparent, #fff 62%);
    background: linear-gradient(to right, transparent, #fff 62%);
  }
  .phoneImageWidth {
    width: 120px;
    margin-right: 16px;
  }
  .pcImageWidth {
    width: 220px;
    margin-right: 40px;
  }
  .phoneRowMargin {
    margin: 10px 24px;
  }
  .pcRowMargin {
    margin: 20px 0 20px 20px;
  }
</style>

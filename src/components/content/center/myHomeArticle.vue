<template>
  <div class="home-article-container">
    <div class="home-article-item-container">
      <div v-for="(item,index) in 10" :key="index">
        <div class="home-article-item">
          <el-row class="item-row" :class="{'phoneRowMargin': $store.state.isPhone,'pcRowMargin':!$store.state.isPhone}">
            <el-col :class="{'phoneImageWidth': $store.state.isPhone,'pcImageWidth':!$store.state.isPhone}">
              <div class="item-img-container">
                <a href="#">
                  <el-image :src="require('@/assets/3.jpg')" class="item-image"
                            style="width:100%;height: 100%;object-fit: contain"
                            alt="springboot+maybatis搭建多模块应用" title="springboot+maybatis搭建多模块应用"/>
                </a>
              </div>
            </el-col>
            <el-col class="item-right">
            <div>
            <el-link href="#" :underline="false" class="article-title">
            springboot+maybatis搭建多模搭建多模搭建多模
            </el-link>
            </div>
              <div class="article-content">
              <span>
                  springboot+maybatis搭建多模块应用搭建多模块应用搭建多模块应用搭建多模块应用
                  搭建多模块应用搭建多模块应用搭建多模块应用搭建多模块应用搭建多模块应用搭建多模块应用搭建多模块应用搭建多模块应用
                  搭建多模块应用搭建多模块应用搭建多模块应用搭建多模块应用搭建多模块应用搭建多模块应用搭建多模块应用搭建多
                  搭建多模块应用搭建多模块应用搭建多模块应用搭建多模块应用搭建多模块应用搭建多模块应用搭建多模块应用搭建多模块应用
                  搭建多模块应用搭建多模块应用搭建多模块应用搭建多模块应用搭建多模块应用搭建多模块应用搭建多模块应用搭建多
              </span>
              </div>
              <div class="article-foot">
              <div class="foot-left" v-if="!$store.state.isPhone">
              <div>
              <el-link type="primary" :underline="false" icon="el-icon-s-custom">weiqiyou</el-link>
              </div>
                <div class="article-date">
                <i class="el-icon-date"></i>{{new Date().toDateString()}}
                </div>
              </div>

                <div class="foot-right">
                  <div>
                    <el-link :underline="false" icon="el-icon-view">0</el-link>
                  </div>
                  <div>
                    <el-link :underline="false" icon="el-icon-chat-dot-square">0</el-link>
                  </div>
                  <div>
                    <el-link :underline="false" icon="el-icon-star-on">0</el-link>
                  </div>
                </div>

              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div class="dividing-line" v-if="!$store.state.isPhone"></div>
    <div class="home-other" v-if="!$store.state.isPhone">
      <my-calendar/>
    </div>
  </div>
</template>

<script>
import myCalendar from './myCalendar'
export default {
  name: 'myHomeArticle',
  components: {
    myCalendar
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
  .home-article-container {
    display: flex;
    flex-direction: row;
  }

  .home-article-item-container {
    max-width: 1200px;
    flex-grow: 3;
  }

  .home-other {
    flex-grow: 1;
  }

  .dividing-line {
    border-left: 10px solid #f9f9f9;
  }

  .home-article-item {
    height: 120px;
  }

  .item-img-container {
    width: 120px;
    height: 100px;
    background-color: lightblue;
  }

  .item-row {
    display: flex;
    flex-direction: row;
  }

  .item-row .item-right {
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 3px;
  }

  .foot-right > div {
    margin-right: 10px;
  }

  .article-title {
    font-size: 16px;
    font-weight: bold;
    font-family: "Sitka Banner";
    position: relative;
    overflow: hidden;
  }

  .article-content {
    max-height: 32px;
    font-size: 12px;
    color: #a5a5a5;
    margin-bottom: 5px;
    position: relative;
    line-height: 1.4em;
    height: 2.8em;
    overflow: hidden;
  }

  .article-content::after {
    content: "...";
    font-weight: bold;
    position: absolute;
    bottom: 0;
    right: 0;
    padding-left: 20px;
    background: -webkit-linear-gradient(left, transparent, #fff 62%);
    background: -o-linear-gradient(right, transparent, #fff 62%);
    background: -moz-linear-gradient(right, transparent, #fff 62%);
    background: linear-gradient(to right, transparent, #fff 62%);
  }

  .home-article-item .article-foot {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 3px;
  }

  .article-foot .foot-left {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .article-foot .foot-right {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 5px;
  }

  .article-date {
    font-size: 13px;
    color: #808082;
    margin-left: 10px;
    margin-top: 2px;
  }
  .article-date > i{
    margin-right: 6px;
  }
  .phoneImageWidth {
    width: 120px;
    margin-right: 16px;
  }

  .pcImageWidth {
    width: 160px;
  }

  .phoneRowMargin {
    margin: 10px 24px;
  }

  .pcRowMargin {
    margin: 20px 0 20px 20px;
  }
</style>

<template>
  <div class="hot-article-contain">
    <div class="header">
        <span>
          热门推荐
        </span>
      <el-link :underline="false">
        更多
        <i class="el-icon-arrow-right el-icon--right"></i>
      </el-link>
    </div>
    <div class="hot-contain">
      <el-card>
        <a href="#">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
               class="image" alt="axios请求相应拦截器" title="axios请求相应拦截器"/>
        </a>
        <div>
          <span>weiqiyou</span>
        </div>
      </el-card>
      <el-card>
        <a href="#">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
               class="image" alt="axios请求相应拦截器" title="axios请求相应拦截器"/>
        </a>
        <div>
          <span>weiqiyou</span>
        </div>
      </el-card>
      <el-card>
        <a href="#">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
               class="image" alt="axios请求相应拦截器" title="axios请求相应拦截器"/>
        </a>
        <div>
          <span>weiqiyou</span>
        </div>
      </el-card>
      <el-card>
        <a href="#">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
               class="image" alt="axios请求相应拦截器" title="axios请求相应拦截器"/>
        </a>
        <div>
          <span>weiqiyou</span>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myHotArticle'
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
  .hot-article-contain .hot-contain{
    display: flex;
    justify-content: space-around;
  }
</style>

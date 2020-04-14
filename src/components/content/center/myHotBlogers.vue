<template>
  <el-card class="box-card" shadow="hover">
    <div slot="header" class="hotBlogUsersTitle">
      <span>热门博主</span>
      <el-button type="text">更多</el-button>
    </div>
    <div v-for="o in 4" :key="o" class="hotBloger">
      <div class="blogerImg">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      </div>
      <div class="blogerInfo">
        <div class="blogerName"><el-link :underline="false"><span style="font-weight: bolder;font-size: 16px">wadewei</span></el-link></div>
        <div class="blogerArticle">
          <div class="blogsNum"><span>2000篇文章</span></div>
          <div class="blogsAccess"><span>112000次访问</span></div>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'myHotBlogers'
}
</script>

<style scoped>
  .hotBlogUsersTitle{
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 10px;
  }
  .hotBloger{
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 15px;
  }
  .blogerInfo{
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  }
  .blogerName{
    align-self: flex-start;
    margin-bottom: 10px;
  }
  .blogerArticle{
    display: -webkit-flex;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    color: gray;
    font-size: 12px;
  }
  .blogsNum{
    margin-right: 10px;
  }
</style>

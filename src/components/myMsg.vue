<template>
  <div class="msg-container">
    <el-popover
      placement="top-start"
      width="160"
      trigger="hover">
      <div class="msg-list-div">
        <el-link type="primary">消息中心</el-link>
      </div>
      <i slot="reference" class="el-icon-chat-dot-round"></i>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: 'myMsg',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  .msg-container{
    margin: 0 10px;
  }
  .msg-list-div{

  }
  .el-icon-chat-dot-round{
    font-size: 25px !important;
    color: cadetblue;
  }
</style>

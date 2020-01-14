<template>
  <div class="msg-container">
    <el-badge :value="12" class="item">
    <el-popover
      placement="top-start"
      width="160"
      trigger="hover">
      <div class="msg-list-div">
        <el-link type="primary">消息中心</el-link>
      </div>
      <i slot="reference" class="el-icon-chat-dot-round"></i>
    </el-popover>
    </el-badge>
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
    margin: 0 20px;
  }
  .msg-list-div{

  }
  .el-icon-chat-dot-round{
    font-size: 25px !important;
    color: cadetblue;
  }
</style>

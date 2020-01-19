<template>
  <div class="myCalendar">
    <el-calendar v-model="value">
    </el-calendar>
  </div>
</template>

<script>
export default {
  name: 'myCalendar',
  data () {
    return {
      value: new Date()
    }
  }
}
</script>

<style scoped>
  .myCalendar{
  }
</style>

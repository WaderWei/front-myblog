<template>
  <div>

  </div>
</template>

<script>
export default {
  name: 'RepairLang',
  created () {
    let that = this
    let name = this.$route.query.name
    setTimeout(function () {
      that.$router.replace({ name: name })
    }, 0)
  }
}
</script>

<style scoped>

</style>

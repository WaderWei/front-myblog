<template>
  <el-dropdown trigger="click" class="international" @command="handleSetLanguage">
  <span class="el-dropdown-link">
    {{language === 'zh' ? '中文' : 'English'}}<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item :disabled="language==='zh'" command="zh">中文</el-dropdown-item>
      <el-dropdown-item :disabled="language==='en'" command="en">English</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  data () {
    return {
      language: Cookies.get('language') || 'zh'
    }
  },
  methods: {
    handleSetLanguage (lang) {
      this.language = lang
      this.$i18n.locale = lang
      this.$store.dispatch('SET_LANGUAGE', lang)
      // 切换语言时，刷新一下当前页面，解决form中错误提示语言无法切换问题,效果很不好，可以跳转到其他页面立刻再调回来
      this.$router.replace({ name: 'repairLang', query: { name: this.$route.name } })
    }
  }
}
</script>

<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" :class="{phoneStyle:classPhone}" :mode="modePhoneMenu"
             @select="handleSelect">
      <el-menu-item index="main">
        <i class="el-icon-s-home" v-if="classPhone"></i>
        <span>首<span style="visibility: hidden" v-if="classPhone">占位</span>页</span>
      </el-menu-item>
      <el-submenu index="technology">
        <template slot="title">
          <i class="el-icon-s-promotion" v-if="classPhone"></i>
          <span slot="title">技术分享</span>
        </template>
        <el-submenu index="tech-front">
          <template slot="title">前端</template>
          <el-menu-item index="tech-front-basic" style="margin-left: 20px">基础</el-menu-item>
          <el-menu-item index="tech-front-frame" style="margin-left: 20px">框架</el-menu-item>
          <el-menu-item index="tech-front-other" style="margin-left: 20px">其它</el-menu-item>
        </el-submenu>
        <el-submenu index="tech-back">
          <template slot="title">后端</template>
          <el-menu-item index="tech-back-basic" style="margin-left: 20px">基础</el-menu-item>
          <el-menu-item index="tech-back-frame" style="margin-left: 20px">框架</el-menu-item>
          <el-menu-item index="tech-back-other" style="margin-left: 20px">其它</el-menu-item>
        </el-submenu>
        <el-submenu index="tech-other">
          <template slot="title">其它</template>
          <el-menu-item index="tech-other-other" style="margin-left: 20px">其它</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="life">
        <i class="el-icon-s-operation" v-if="classPhone"></i>
        <span slot="title">生活分享</span>
      </el-menu-item>
      <el-menu-item index="others">
        <i class="el-icon-mic" v-if="classPhone"></i>
        <span slot="title">其它分享</span>
      </el-menu-item>
      <el-menu-item index="write-blog">
        <i class="el-icon-edit" v-if="classPhone"></i>
        <span slot="title">写博客</span>
      </el-menu-item>
    </el-menu>
    <div class="line" v-if="classPhone"></div>
  </div>
</template>

<script>
export default {
  name: 'myElMenu',
  props: {
    modePhoneMenu: {
      type: String,
      default: 'horizontal'
    },
    classPhone: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      activeIndex: 'main',
      currentIndex: '首页'
    }
  },
  created () {
    this.setCurrentIndex()
  },
  methods: {
    handleSelect (key, keyPath) {
      // 如果是手机样式则选择后关闭
      if (this.classPhone) {
        this.$store.commit('changePhoneDrawer', false)
      }
      // 点击当前页面无效
      if (key === this.currentIndex) {
        return
      }
      if (key === 'main') {
        this.$router.push({ path: '/' })
      } else if (key === 'write-blog') {
        // 判断是否登录
        this.$router.push({ name: 'writeBlog', query: { keyWord: key } })
      } else {
        window.scrollTo(0, 0)
        this.$router.push({ name: 'articlesList', query: { keyWord: key } })
      }
      this.currentIndex = key
    },
    setCurrentIndex () {
      let keyWord = this.$route.query.keyWord
      if (!keyWord) {
        this.currentIndex = 'main'
      } else if (keyWord.indexOf('tech') === 0) {
        this.activeIndex = 'tech-back-basic'
      } else if (keyWord === 'life') {
        this.activeIndex = 'life'
      } else if (keyWord === 'others') {
        this.activeIndex = 'others'
      } else if (keyWord === 'write-blog') {
        this.activeIndex = 'write-blog'
      } else {
        this.currentIndex = 'main'
      }
    }
  },
  watch: {}
}
</script>

<style scoped>
  .el-menu.el-menu--horizontal {
    border-bottom: 0;
  }

  .phoneStyle {
    margin-top: 40px;
  }
</style>

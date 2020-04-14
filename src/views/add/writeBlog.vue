<template>
  <div class="white-blog-contain">
    <div class="blog-head">
      <el-form :model="ruleBlog" :rules="rules" ref="ruleBlog" label-width="100px" @submit.native.prevent>
        <el-form-item label="文章名称" prop="blogTitle" required>
          <el-input type="text" v-model="ruleBlog.blogTitle" placeholder="文章标题，字数控制在100字以内"
                    maxlength="100" show-word-limit></el-input>
        </el-form-item>
        <el-form-item label="文章分类" prop="blogCategory" required>
          <el-cascader placeholder="请选择文章分类"
                       v-model="ruleBlog.blogCategory"
                       :options="categoryOptions"
                       @change="handleChange"></el-cascader>
        </el-form-item>
        <el-form-item label="文章类型" required prop="blogType">
          <el-select v-model="ruleBlog.blogType" placeholder="请选择活动区域">
            <el-option label="原创" value="original"></el-option>
            <el-option label="转载" value="reproduced"></el-option>
            <el-option label="翻译" value="translation"></el-option>
          </el-select>
        </el-form-item>
        <mavon-editor v-model="value" class="blog-editor"/>
        <el-form-item label="文章标签" style="margin-top: 20px">
          <div style="display: -webkit-flex;display: flex">
            <el-popover
              placement="bottom"
              width="300"
              offset="0.6"
              v-model="labelPopover">
              <div class="closePopover" @click="labelPopover = false">
                <i class="el-icon-close"></i>
              </div>
              <el-input type="text" v-model="labelTitle" placeholder="Enter键入可添加自定义标签"
                        @keyup.enter.native="selfLabel(labelTitle)" clearable maxlength="10" show-word-limit></el-input>
              <div class="hotLabel">
                <span>热门推荐</span>
                <div class="hotLabelList">
                  <el-tag v-for="i in 10" class="tag" type="info" :key="i" @click="selectTag(i)">{{i}}</el-tag>
                  <el-link :underline="false" style="margin-left: 20px">更多</el-link>
                </div>
              </div>
              <div style="text-align: right; margin: 10px 0">
                <el-button size="mini" type="text" @click="labelPopover = false">取消</el-button>
                <el-button type="primary" size="mini" @click="labelPopover = false">确定</el-button>
              </div>
              <el-button type="text" slot="reference">
                <i class="el-icon-circle-plus-outline" style="margin-right: 10px"></i>选择标签</el-button>
            </el-popover>
            <div style="margin-left: 30px">
              <el-tag class="tag"
                      v-for="tag in selectTagArr"
                      :key="tag"
                      closable
                      @close="closeThatTag(tag)">
                {{tag}}
              </el-tag>
            </div>
            <span v-if="selectTagArr.length == 0 && $store.state.isPhone" style="color: green;margin-left: 20px">最多只能添加5个标签</span>
            <div v-if="!$store.state.isPhone">
              <span v-if="selectTagArr.length <= 2" style="color: green;margin-left: 20px">还能添加{{5-selectTagArr.length}}个标签</span>
              <span v-else-if="selectTagArr.length <= 4" style="color: orange;margin-left: 20px">还能添加{{5-selectTagArr.length}}个标签</span>
              <span v-else-if="selectTagArr.length = 5" style="color: red;margin-left: 20px">已经不能再添加标签了</span>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="发布形式" prop="blogPermission">
          <el-radio-group v-model="ruleBlog.blogPermission">
            <el-radio label="公开"></el-radio>
            <el-radio label="私密"></el-radio>
            <el-radio label="VIP可见"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="postArticle('ruleBlog')">发布文章</el-button>
          <el-button @click="saveArticle('ruleBlog')">保存草稿</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import constantVar from '@/tools/constantVar.js'

export default {
  name: 'writeBlog',
  data () {
    return {
      ruleBlog: {
        blogTitle: '',
        blogCategory: '',
        labelTitle: '',
        blogType: '',
        blogPermission: ''
      },
      rules: {
        blogTitle: [
          { required: true, message: '请输入文章标题', trigger: 'blur' },
          { min: 1, max: 100, message: '长度在 1 到 100 个字符', trigger: 'blur' }
        ],
        blogCategory: [
          { required: true, message: '请选择文章分类', trigger: 'change' }
        ],
        labelTitle: [
          { required: true, message: '请选择文章标签', trigger: 'blur' },
          { min: 1, max: 100, message: '长度在 1 到 10 个字符', trigger: 'blur' }
        ],
        blogType: [
          { required: true, message: '请选择文章类型', trigger: 'change' }
        ],
        blogPermission: [
          { required: true, message: '请选择活发布形式', trigger: 'change' }
        ]
      },
      categoryOptions: constantVar.blogCategory,
      value: '',
      blogTitle: '',
      labelPopover: false,
      labelTitle: '', /* 自定义标签名称 */
      selectTagArr: []
    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
    },
    choseLabel () {
      this.labelPopover = true
    },
    selectTag (val) {
      // 最多只能添加5个
      if (!this.selectTagArr.includes(val) && this.selectTagArr.length < 5) { this.selectTagArr.push(val) }
    },
    selfLabel (val) {
      if (!this.selectTagArr.includes(val) && this.selectTagArr.length < 5) { this.selectTagArr.push(val) }
    },
    closeThatTag (val) {
      this.selectTagArr.splice(this.selectTagArr.indexOf(val), 1)
    },
    postArticle (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    saveArticle (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
  .white-blog-contain {
    height: 100%;
    width: 700px;
    text-align: left;
  }

  .blog-head {
    margin: 10px 10px 5px 5px;
  }

  .blog-editor {
    min-height: 600px;
    height: 100%;
  }
  .closePopover{
    text-align: right;
    margin-bottom: 10px;
  }
  .closePopover:hover{
    color: cornflowerblue;
    cursor: pointer;
  }
  .hotLabel{
    margin: 10px 0;
  }
  .hotLabelList{
    display: -webkit-flex;
    display: flex;
    flex-wrap: wrap;
  }
  .tag{
    margin: 5px;
  }
  .tag:hover{
    cursor: pointer;
    color: cornflowerblue;
    border:1px solid cornflowerblue ;
    background: rgba(98, 170, 255, 0.19);
  }
  .lbl-title {
    text-align: left;
  }

  label.lbl-title:after {
    content: '*';
    color: red;
  }
</style>

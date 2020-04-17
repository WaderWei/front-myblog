<template>
  <div class="white-blog-contain">
    <div class="blog-head">
      <el-form :model="ruleBlog" :rules="rules" ref="ruleBlog" label-width="100px" @submit.native.prevent>
        <el-form-item :label="$t('blog.title')" prop="blogTitle" required>
          <el-input type="text" v-model="ruleBlog.blogTitle" :placeholder="$t('blog.titlePlaceholder')"
                    maxlength="100" show-word-limit></el-input>
        </el-form-item>
        <el-form-item :label="$t('blog.category')" prop="blogCategory" required style="white-space: nowrap">
          <el-cascader :placeholder="$t('blog.categoryPlaceholder')"
                       v-model="ruleBlog.blogCategory"
                       :options="categoryOptions"
                       @change="handleChange"></el-cascader>
        </el-form-item>
        <el-form-item :label="$t('blog.type')" required prop="blogType">
          <el-select v-model="ruleBlog.blogType" :placeholder="$t('blog.typePlaceholder') ">
            <el-option :label="$t('blog.original')" value="original"></el-option>
            <el-option :label="$t('blog.reproduced')" value="reproduced"></el-option>
            <el-option :label="$t('blog.translation')" value="translation"></el-option>
          </el-select>
        </el-form-item>
        <mavon-editor v-model="editorValue" class="blog-editor"/>
        <el-form-item :label="$t('blog.tags')" style="margin-top: 20px">
          <div style="display: -webkit-flex;display: flex">
            <el-popover
              placement="bottom"
              width="300"
              offset="0.6"
              v-model="labelPopover">
              <div class="closePopover" @click="labelPopover = false">
                <i class="el-icon-close"></i>
              </div>
              <el-input type="text" v-model="labelTitle" :placeholder="$t('blog.labelPh')"
                        @keyup.enter.native="selfLabel(labelTitle)" clearable maxlength="10" show-word-limit></el-input>
              <div class="hotLabel">
                <span>{{$t('blog.HotRecommendation')}}</span>
                <div class="hotLabelList">
                  <el-tag v-for="i in 10" class="tag" type="info" :key="i" @click="selectTag(i)">{{i}}</el-tag>
                  <el-link :underline="false" style="margin-left: 20px">{{$t('blog.more')}}</el-link>
                </div>
              </div>
              <div style="text-align: right; margin: 10px 0">
                <el-button size="mini" type="text" @click="labelPopover = false">{{$t('blog.cancel')}}</el-button>
                <el-button type="primary" size="mini" @click="labelPopover = false">{{$t('blog.confirm')}}</el-button>
              </div>
              <el-button type="text" slot="reference">
                <i class="el-icon-circle-plus-outline" style="margin-right: 10px"></i>{{$t('blog.choose')}}</el-button>
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
            <span v-if="selectTagArr.length == 0 && $store.state.isPhone" style="color: green;margin-left: 20px">{{$t('blog.choseTagTip1')}}5{{$t('blog.choseTagTip2')}}</span>
            <div v-if="!$store.state.isPhone">
              <span v-if="selectTagArr.length <= 2" style="color: green;margin-left: 20px">{{$t('blog.choseTagTip1')}}{{5-selectTagArr.length}}{{$t('blog.choseTagTip2')}}</span>
              <span v-else-if="selectTagArr.length <= 4" style="color: orange;margin-left: 20px">{{$t('blog.choseTagTip1')}}{{5-selectTagArr.length}}{{$t('blog.choseTagTip2')}}</span>
              <span v-else-if="selectTagArr.length = 5" style="color: red;margin-left: 20px">{{$t('blog.choseTagTip3')}}</span>
            </div>
          </div>
        </el-form-item>
        <el-form-item :label="$t('blog.releaseWay')" prop="blogPermission">
          <el-radio-group v-model="ruleBlog.blogPermission" >
            <el-radio :label="1" >{{$t('blog.public')}}</el-radio>
            <el-radio :label="2">{{$t('blog.private')}}</el-radio>
            <el-radio :label="3">{{$t('blog.vip')}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="postArticle('ruleBlog')">{{$t('blog.releaseBtn')}}</el-button>
          <el-button @click="saveArticle('ruleBlog')">{{$t('blog.saveBtn')}}</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'writeBlog',
  data () {
    return {
      ruleBlog: {
        blogTitle: '',
        blogCategory: '',
        labelTitle: '',
        blogType: '',
        blogPermission: 1 // 1 public 2 private 3 vip
      },
      rules: {
        blogTitle: [
          { required: true, message: this.$t('blog.titleEmptyTip'), trigger: 'blur' },
          { min: 1, max: 100, message: this.$t('blog.titleLengthTip'), trigger: 'blur' }
        ],
        blogCategory: [
          { required: true, message: this.$t('blog.categoryEmptyTip'), trigger: 'change' }
        ],
        labelTitle: [
          { required: true, message: this.$t('blog.tagEmptyTip'), trigger: 'blur' },
          { min: 1, max: 100, message: this.$t('blog.tagLengthTip'), trigger: 'blur' }
        ],
        blogType: [
          { required: true, message: this.$t('blog.typeEmptyTip'), trigger: 'change' }
        ],
        blogPermission: [
          { required: true, message: this.$t('blog.releaseTip'), trigger: 'change' }
        ]
      },
      categoryOptions: [{
        value: 'technology',
        label: this.$t('nav.tech.index'),
        children: [{
          value: 'tech-front',
          label: this.$t('nav.tech.front'),
          children: [{
            value: 'tech-front-basic',
            label: this.$t('nav.tech.basic')
          },
          {
            value: 'tech-front-frame',
            label: this.$t('nav.tech.framework')
          }, {
            value: 'tech-front-other',
            label: this.$t('nav.tech.other')
          }
          ]
        },
        {
          value: 'tech-back',
          label: this.$t('nav.tech.back'),
          children: [{
            value: 'tech-back-basic',
            label: this.$t('nav.tech.basic')
          },
          {
            value: 'tech-back-frame',
            label: this.$t('nav.tech.framework')
          }, {
            value: 'tech-back-other',
            label: this.$t('nav.tech.other')
          }
          ]
        },
        {
          value: 'tech-other',
          label: this.$t('nav.tech.other'),
          children: [ {
            value: 'tech-other-other',
            label: this.$t('nav.tech.other')
          }
          ]
        }] },
      {
        value: 'life',
        label: this.$t('nav.life')
      },
      {
        value: 'others',
        label: this.$t('nav.other')
      }
      ],
      editorValue: '',
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

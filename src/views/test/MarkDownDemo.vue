<template>
  <div>
    <mavon-editor v-model="content"
                  ref="md"
                  @change="change"
                  @imgAdd="$imgAdd"
                  style="min-height: 400px; height: 100%"></mavon-editor>
    <button @click="submit">提交</button>
    <button @click="open" class="open-btn">开</button>
      <div class="aside-item noback" v-show="catalogShow">
        <div class="wx_navigation">
          <div class="navigator-item">
            目录
          </div>
        </div>
        <div
          id="navigation"
          class="wx_navigation"
        />
    </div>
  </div>
</template>

<script>
// 导入组件 及 组件样式
export default {
  components: {},
  name: 'MarkDownDemo',
  data () {
    return {
      content: '', // 输入的markdown
      html: '', // 及时转的html,
      catalogShow: false
    }
  },
  methods: {
    // 将图片上传到服务器，返回地址替换到md中
    $imgAdd (pos, $file) {
      let formdata = new FormData()

      this.$upload.post('/上传接口地址', formdata).then(res => {
        console.log(res.data)
        this.$refs.md.$img2Url(pos, res.data)
      }).catch(err => {
        console.log(err)
      })
    },
    // 所有操作都会被解析重新渲染
    change (value, render) {
      // render 为 markdown 解析后的结果[html]
      this.html = render
    },
    // 提交
    submit () {
      this.buildNavigation()
    },
    open () {
      this.catalogShow = !this.catalogShow
    },
    buildNavigation () {
      let a = document.getElementById('navigation')
      a.innerHTML = this.html // mavmon根据marodown内容生成的dom

      const nodes = a.children
      let newDoms = []

      if (nodes.length) {
        for (let i = 0; i < nodes.length; i++) {
          const id = (nodes[i].children && nodes[i].children.length) ? nodes[i].children[0].id : ''
          judageH(nodes[i], i, nodes, id)
        }
      }

      function judageH (node, i, nodes, domId) {
        const reg = /^H[1-6]{1}$/
        if (!reg.exec(node.tagName)) { // 把不是h标签的都过滤掉
          node.style.display = 'none'
        } else {
          node.classList.add('navigator-item')
          const nodeArr = node.innerHTML.split('</a>')

          // const id = nodeArr[0].replace(/[^0-9]+/g, '')
          const id = domId
          const content = nodeArr[1]

          var childs = node.childNodes
          for (var index = childs.length - 1; index >= 0; index--) {
            node.removeChild(childs[index])
          }

          const a = document.createElement('a')

          a.id = id
          a.innerHTML = content
          node.appendChild(a)
          // console.log(id, content, node.tagName)
          node.onclick = function () {
            window.location.replace('#' + this.children[0].id)
          }
          newDoms.push(node)
        }
      }

      const sliceDoms = [] // 归类好的节点树

      newDoms.forEach((dom, i) => { // 把标题归类 每部分的标题组合到一起
        const level = dom.tagName.substr(1)
        const upLevel = newDoms[i - 1] ? newDoms[i - 1].tagName.substr(1) : ''

        if (upLevel) {
          if (level > upLevel) {
            sliceDoms[sliceDoms.length - 1].push(dom)
          } else if (level > sliceDoms[sliceDoms.length - 1][0].tagName.substr(1)) {
            sliceDoms[sliceDoms.length - 1].push(dom)
          } else {
            sliceDoms.push([dom])
          }
        } else {
          sliceDoms.push([dom])
        }
      })
      sliceDoms.forEach(doms => {
        const thisTitleMaxId = doms[0].tagName.substr(1)
        doms.forEach(dom => {
          const domHeadingLevel = dom.tagName.substr(1) - thisTitleMaxId + 1
          dom.classList.add('heading_' + domHeadingLevel)
        })
      })
    }
  }
}
</script>

<style>

  /** navigatior*/
  .wx_navigation {
    position: fixed;
    top: 0;
    z-index: 4000;
    background-color: aliceblue;
    height: 80%;
    padding: 0 20px 0 0;
    text-align: left;
  }

  .open-btn{
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 4000;
  }

  .wx_navigation::before {
    content: "";
    position: absolute;
    top: 0;
    left: 2px;
    bottom: 0;
    width: 2px;
    background-color: #ebedef;
    opacity: 0.5;
  }

  .wx_navigation > .navigator-item {
    cursor: pointer;
    margin: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.3;
    color: #333;
    white-space: nowrap;
    width: 180px;
    padding: 4px 0 4px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    position: relative;
  }

  .wx_navigation > .navigator-item > a {
    padding-left: 10px;
    color: #1b65d6;
    position: relative;
    display:block;
    overflow:hidden;
    word-break:keep-all;
    white-space:nowrap;
    text-overflow:ellipsis;
  }

  .navigator-item.heading_1 {
    font-weight: 600;
    color: #000;
  }

  .navigator-item.heading_2 {
    padding-left: 20px;
  }

  .navigator-item.heading_3 {
    padding-left: 40px;
  }

  .navigator-item.heading_4 {
    padding-left: 60px;
  }

  .navigator-item.heading_5 {
    padding-left: 80px;
  }

  .navigator-item.heading_6 {
    padding-left: 100px;
  }

  .wx_navigation > .navigator-item > a::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: -2px;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 50%;
  }
  .wx_navigation > .navigator-item > a:hover {
    text-decoration: underline;
    color: #838d9f;
  }
  .wx_navigation > .navigator-item.heading_1 > a::before {
    margin-top: -3px;
    width: 6px;
    height: 6px;
  }

</style>

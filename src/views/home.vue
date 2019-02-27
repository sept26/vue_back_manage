<template>
  <div class="home">
    <top-bar></top-bar>
    <el-menu :collapse="collapse" :default-active="onRoutes" class="sider-bar" background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
      <side-bar :menus="menus"></side-bar>
    </el-menu>
    <div :class="{'content-collapse':collapse,'content-box': !collapse}">
      <div class="content">
        <transition name="move" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import topBar from './topBar'
import sideBar from './sideBar'
import bus from '@/common/bus'
export default {
  data () {
    return {
      collapse: false,
      menus: [
        {
          icon: 'el-icon-location',
          index: 'dashboard',
          title: '系统首页'
        },
        {
          icon: 'el-icon-menu',
          index: 'table',
          title: '基础表格'
        },
        {
          icon: 'el-icon-tickets',
          index: 'tabs',
          title: 'tab选项卡'
        },
        {
          icon: 'el-icon-date',
          index: '3',
          title: '表单相关',
          subs: [
            {
              index: 'form',
              title: '基本表单'
            },
            {
              index: '3-2',
              title: '三级菜单',
              subs: [
                {
                  index: 'editor',
                  title: '富文本编辑器'
                },
                {
                  index: 'markdown',
                  title: 'markdown编辑器'
                }
              ]
            },
            {
              index: 'upload',
              title: '文件上传'
            }
          ]
        },
        {
          icon: 'el-icon-edit-outline',
          index: 'icon',
          title: '自定义图标'
        },
        {
          icon: 'el-icon-star-off',
          index: 'charts',
          title: 'schart图表'
        },
        {
          icon: 'el-icon-rank',
          index: '6',
          title: '拖拽组件',
          subs: [
            {
              index: 'drag',
              title: '拖拽列表'
            },
            {
              index: 'dialog',
              title: '拖拽弹框'
            }
          ]
        },
        {
          icon: 'el-icon-warning',
          index: '7',
          title: '错误处理',
          subs: [
            {
              index: 'permission',
              title: '权限测试'
            },
            {
              index: '404',
              title: '404页面'
            }
          ]
        }
      ]
    }
  },
  computed: {
    onRoutes () {
      return this.$route.path.replace('/', '')
    }
  },
  components: {
    'top-bar': topBar,
    'side-bar': sideBar
  },
  created () {
    bus.$on('collapse', msg => {
      this.collapse = msg
    })
  }
}
</script>
<style lang="less" scoped>
.sider-bar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: auto;
}
.side-bar::-webkit-scrollbar{
  width: 0;
}
.sider-bar:not(.el-menu--collapse){
  width: 250px;
}

.sidebar > ul {
  height:100%;
}
.content-collapse {
  left: 65px;
  position: absolute;
  right: 0;
  top: 70px;
  bottom: 0;
  padding-bottom: 30px;
  -webkit-transition: left .3s ease-in-out;
  transition: left .3s ease-in-out;
  background: #f0f0f0;
}
.content-box {
  position: absolute;
  left: 250px;
  right: 0;
  top: 70px;
  bottom: 0;
  padding-bottom: 30px;
  -webkit-transition: left .3s ease-in-out;
  transition: left .3s ease-in-out;
  background: #f0f0f0;
}
.content {
  width: auto;
  height: 100%;
  padding: 10px;
  overflow-y: auto;
  box-sizing: border-box;
}
</style>

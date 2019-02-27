<template>
  <div class="top-bar">
    <div class="collapse-btn" @click="collapseChange">
      <i class="el-icon-menu"></i>
    </div>
    <div class="logo">后台管理系统</div>
    <div class="top-bar-right">
      <div class="btn-fullscreen" @click="handleFullScreen">
        <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
          <i class="el-icon-rank"></i>
        </el-tooltip>
      </div>
      <el-dropdown class="user-name" trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          {{username}} <i class="el-icon-caret-bottom"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item divided  command="loginout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      username: 'admin',
      collapse: false,
      fullscreen: false
    }
  },
  methods: {
    collapseChange () {
      this.collapse = !this.collapse
      this.$store.commit('CONTROL_COLLAPSE', this.collapse)
    },
    handleCommand (command) {
      if (command === 'loginout') {
        localStorage.removeItem('userName')
        this.$router.push('login')
      }
    },
    // 全屏事件
    handleFullScreen () {
      let element = document.documentElement
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen()
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen()
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen()
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen()
        }
      }
      this.fullscreen = !this.fullscreen
    }
  },
  mounted () {
    if (document.body.clientWidth < 1500) {
      this.collapseChange()
    }
  }
}
</script>
<style lang='less' scoped>
.top-bar {
  background-color: #242f42;
  color: #fff;
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  font-size: 22px;
  position: relative;
  box-sizing: border-box;
  padding-right: 50px;
  .collapse-btn {
    flex: 1;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }
  .log {
    flex: 4;
    text-align: center;
  }
  .top-bar-right {
    display: flex;
    flex: 16;
    align-items: center;
    justify-content: flex-end;
    .btn-fullscreen {
      margin-right: 20px;
      i {
        transform: rotate(45deg);
        font-size: 24px;
      }
    }
    .user-name {
      color: #fff;
    }
  }
}
</style>

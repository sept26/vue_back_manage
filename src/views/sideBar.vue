<template>
  <div class="side-bar">
    <template v-for="menu in menus">
      <el-submenu  :index="menu.index" :key="menu.index" v-if="menu.subs">
        <template slot="title">
          <i :class="menu.icon"></i>
          <span slot="title">{{menu.title}}</span>
        </template>
        <side-bar
          :menus="menu.subs"
        >
        </side-bar>
      </el-submenu>
      <el-menu-item v-else :index="menu.index" :key="menu.index">
        <i :class="menu.icon"></i>
        <span slot="title">{{menu.title}}</span>
      </el-menu-item>
    </template>
  </div>
</template>
<script>
import SideBar from './sideBar'
export default {
  name: 'side-bar',
  props: ['menus'],
  data () {
    return {

    }
  },
  components: {
    SideBar
  }
}
</script>
<style lang='less' scoped>

</style>

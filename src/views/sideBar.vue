<template>
  <div>
    <template v-for="menu in menus">
      <el-submenu  :index="menu.index" :key="menu.index" v-if="menu.subs">
        <template slot="title" v-if="menu.index.length === 1">
          <i :class="menu.icon"></i>
          <span v-show="!collapse" slot="title">{{menu.title}}</span>
        </template>
        <template v-else slot="title">
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
import {mapState} from 'vuex'
export default {
  name: 'side-bar',
  props: ['menus'],
  data () {
    return {
    }
  },
  components: {
    SideBar
  },
  computed: mapState({
    collapse: state => state.simple.collapse
  })
}
</script>

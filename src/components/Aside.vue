<template>
    <!-- 左侧页签部分 -->
    <div class="sidebar">
      <el-menu class="sidebar-el-menu" :default-active="onRoutes"
        :collapse="collapse"  background-color="#324157" text-color="#bfcbd9"
        active-text-color="#20a0ff" unique-opened router >
        <template v-for="(item,key) in items" >
          <template v-if="item.children">
            <el-submenu :index="item.key" :key="key">
              <template slot="title">
                <i :class="item.icon"></i>{{item.title}}
              </template>
              <el-menu-item-group>
                <el-menu-item v-for="(childrenItem,key) in item.children" :key="key" :index="childrenItem.key">
                  <i :class="childrenItem.icon"></i>{{childrenItem.title}}
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </template>
          <template v-else>
            <el-menu-item :index="item.key" :key="key">
              <i :class="item.icon"></i>
              <span slot="title">{{item.title}}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </div>
</template>

<script>
import menuConfig from '../config/menuConfig.js'
export default {
	data() {
		return {
			collapse: false,
			items: []
		};
	},
	computed: {
			onRoutes() {
					return this.$route.path.replace('/', '');
			}
	},
	created() {
		this.$globalEventBus.$on('collapse', msg => {
				this.collapse = msg;
				this.$globalEventBus.$emit('collapse-content', msg);
		});
        this.items = menuConfig
	}
};
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}
.sidebar > ul {
    height: 100%;
}
</style>

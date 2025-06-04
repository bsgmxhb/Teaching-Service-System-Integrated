<script setup>
import { RouterView } from 'vue-router'
import { ref, provide, onMounted } from 'vue';
import TopBar from './components/TopBar.vue'
import BottomBar from './components/BottomBar.vue'
import SideBar from './components/SideBar.vue'

// TODO: get user info from other modules
const user = ref('teacher');
const user_name = ref('用户名');
const user_avatar = ref('https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png');
const is_homepage = ref(true);
const is_sidebar_visible = ref(false);
const activeModule = ref('courseSelection');

// 从localStorage读取保存的状态
onMounted(() => {
  const savedHomepage = localStorage.getItem('is_homepage');
  if (savedHomepage !== null) {
    is_homepage.value = savedHomepage === 'true';
  }
  const savedActiveModule = localStorage.getItem('activeModule');
  if (savedActiveModule !== null) {
    activeModule.value = savedActiveModule;
  }
});

// 监听is_homepage变化并保存到localStorage
function updateIsHomepage(value) {
  is_homepage.value = value;
  localStorage.setItem('is_homepage', value);
}

// 新增：监听activeModule变化并保存到localStorage
function updateActiveModule(value) {
  activeModule.value = value;
  localStorage.setItem('activeModule', value);
}

// 新增：设置侧边栏可见性
function setSidebarVisible(value) {
  is_sidebar_visible.value = value;
}

// 新增：切换侧边栏显示状态
function toggleSidebar() {
  is_sidebar_visible.value = !is_sidebar_visible.value;
}

provide('user', user);
provide('user_name', user_name);
provide('user_avatar', user_avatar);
provide('is_homepage', { 
  get: () => is_homepage.value,
  set: updateIsHomepage
});
provide('is_sidebar_visible', {
  get: () => is_sidebar_visible.value,
  set: setSidebarVisible,
  toggle: toggleSidebar
});
provide('activeModule', {
  get: () => activeModule.value,
  set: updateActiveModule
});

</script>

<template>
  <div>
    <TopBar />
    <SideBar />
    <!-- 渲染当前路由的组件 -->
    <RouterView style="margin-top: 80px; padding-bottom: 70px;"/>
    <BottomBar />
  </div>
</template>
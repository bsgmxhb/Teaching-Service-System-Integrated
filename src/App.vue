<script setup>
import { RouterView } from 'vue-router'
import { ref, provide, onMounted, watchEffect } from 'vue';
import TopBar from './components/TopBar.vue'
import BottomBar from './components/BottomBar.vue'
import SideBar from './components/SideBar.vue'
import { useuserLoginStore } from './store/userLoginStore';

// Initialize with a state indicating user is not yet known or logged out
const user = ref(''); // e.g., 's', 't', 'a', or empty if not logged in
const user_name = ref('未登录'); // Default to "Not logged in"
const user_avatar = ref('https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'); // Default avatar
const is_homepage = ref(true);
const is_sidebar_visible = ref(false);
const activeModule = ref('courseSelection');

const loginStore = useuserLoginStore();

// Watch for changes in login store and update App.vue's state
watchEffect(() => {
  // Assuming loginStore.loginUser holds the user data and isLogin indicates login status
  // You might need to adjust property names based on your store's actual structure
  if (loginStore.isLogin && loginStore.loginUser) {
    user.value = loginStore.loginUser.role || '';
    user_name.value = loginStore.loginUser.name || loginStore.loginUser.account || '用户'; // Fallback
    user_avatar.value = loginStore.loginUser.avatar || 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png';
  } else {
    user.value = '';
    user_name.value = '未登录';
    user_avatar.value = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png';
    // Potentially reset other states like is_homepage or activeModule if user logs out
    // For now, just resetting user info
  }
});

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
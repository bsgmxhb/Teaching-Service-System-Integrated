<template>
    <div class="show-result-teacher container">
      <el-card class="result-card">
        <template #header>
          <div class="card-header">
            <h2>教师选课情况</h2>
          </div>
        </template>

        <p v-if="!loading && tableData.length > 0 && currentFetchedTeacherId" style="text-align: center; margin-bottom: 15px;">
          以下是您的所授课程学生选课情况
        </p>

        <el-table :data="tableData" style="font-size: 15px;" v-loading="loading">
          <el-table-column prop="course_name" label="课程名称" />
          <el-table-column prop="course_time" label="上课时间" />
          <el-table-column prop="course_classroom" label="上课教室" />
          <el-table-column label="学生名单">
            <template #default="scope">
              <div v-if="scope.row.student_list && scope.row.student_list.length">
                <div v-for="stu in scope.row.student_list" :key="stu.ID">
                  {{ stu.ID }} - {{ stu.name }}
                </div>
              </div>
              <div v-else>暂无学生</div>
            </template>
          </el-table-column>
        </el-table>

        <el-empty v-if="!loading && tableData.length === 0 && hasFetched && currentFetchedTeacherId" description="该教师暂无课程选课数据或ID对应教师不存在" />
        <el-empty v-if="!loading && !currentFetchedTeacherId && !hasFetched" description="正在等待教师信息加载..." />
      </el-card>
    </div>
  </template>

  <script setup>
  import { ref, inject, watch } from 'vue'; // 引入 inject 和 watch
  import { ElMessage } from 'element-plus'; 
  import { teacherAPI } from '../../../api/course_selection/teacher';

  const injectedTeacherId = inject('user_id');

  // const teacherId = ref(''); 
  const currentFetchedTeacherId = ref(''); 
  const tableData = ref([]); 
  const loading = ref(false); 
  const hasFetched = ref(false); // 标记是否已执行过至少一次查询 

  const fetchResult = async () => {
    // 使用 injectedTeacherId.value
    if (!injectedTeacherId.value) {
      ElMessage.warning('教师ID无效，请确保已登录或ID已正确注入。');
      tableData.value = []; // 清空之前的结果
      hasFetched.value = false;
      currentFetchedTeacherId.value = '';
      return;
    }
    loading.value = true; 
    hasFetched.value = true; 
    currentFetchedTeacherId.value = injectedTeacherId.value; // 记录当前查询的ID

    try {
      // 确保 teacherId 是数字
      const response = await teacherAPI.getTeacherCourseResults(Number(injectedTeacherId.value));
      if (response.code === '200' || response.code === 200 || response.code === 'success') { 
        if (response.data && response.data.course_list) {
          tableData.value = response.data.course_list.map(item => { 
            let studentListArray = [];
            if (item.student_list) {
              if (Array.isArray(item.student_list)) {
                studentListArray = item.student_list; 
              } else {
                // 如果不是数组但有值，包装成单元素数组
                studentListArray = [item.student_list]; 
              }
            }
            return { // 
              ...item,
              student_list: studentListArray
            };
          });
        } else {
          tableData.value = []; 
        }
      } else {
        ElMessage.error(response.message || '获取选课数据失败'); 
        tableData.value = []; 
      }
    } catch (error) {
      ElMessage.error(error.message || '网络错误，无法获取选课数据'); 
      tableData.value = []; 
      console.error('获取教师选课数据时出错:', error); 
    } finally {
      loading.value = false; 
    }
  };

  // 监听 injectedTeacherId 的变化，并在其有效时获取数据
  watch(injectedTeacherId, (newId) => {
    if (newId) {
      fetchResult();
    } else {
      // 如果注入的ID变为空 (例如用户登出)，则清空数据
      tableData.value = [];
      currentFetchedTeacherId.value = '';
      hasFetched.value = false;
    }
  }, { immediate: true }); // immediate: true 确保在组件初始加载时，如果 injectedTeacherId 已有值，也会执行一次

  </script>

  <style scoped>
  .show-result-teacher {
    max-width: 1200px; 
    margin: 0 auto; 
    padding: 20px; 
  }
  .container {
    display: flex; 
    flex-direction: column; 
    gap: 20px; 
  }
  .result-card {
    width: 95%; 
    margin: 0px auto 20px auto; 
  }
  .card-header {
    display: flex; 
    flex-direction: column; 
    align-items: center; 
  }
  </style>
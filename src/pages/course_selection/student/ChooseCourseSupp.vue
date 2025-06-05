<template>
  <div class="choose-course-supp container">
    <el-card class="form-card">
      <template #header>
        <div class="card-header-center">
          <h2>课程补选申请</h2>
        </div>
      </template>
      
      <el-form :model="formData" label-width="100px" class="input-form">
        <el-form-item label="开课ID">
          <el-input v-model.number="formData.section_id" placeholder="请输入开课ID" type="number" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitApplication" :loading="submitting">
            提交补选申请
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card class="applications-card">
      <template #header>
        <div class="card-header-flex">
          <h2>补选申请记录</h2>
          <el-button type="primary" @click="refreshApplications" :loading="refreshing">
            刷新补选状态
          </el-button>
        </div>
      </template>

      <el-table v-if="applications.length > 0" :data="applications" style="width: 100%">
        <el-table-column prop="section_id" label="开课ID" width="120" />
        <el-table-column prop="course_name" label="课程名称" />
        <el-table-column prop="teacher_name" label="教师姓名" />
        <el-table-column prop="class_time" label="上课时间" />
        <el-table-column prop="classroom" label="上课地点" />
        <el-table-column prop="credit" label="学分数" />
        <el-table-column prop="result" label="补选状态" width="120">
          <template #default="scope">
            <el-tag :type="getStatusType(scope.row.result)">{{ scope.row.result }}</el-tag>
          </template>
        </el-table-column>
      </el-table>

      <el-empty v-if="applications.length === 0 && !refreshing" description="暂无补选申请记录" />

    </el-card>

  </div>
</template>

<script setup>
import { ref, reactive, inject, onMounted } from 'vue';
import { ElMessage } from 'element-plus';
import { chooseCourseSupp, getSuppResult } from '../../../api/course_selection/student';

const studentId = inject('user_id');

const formData = reactive({
  section_id: ''
});

const submitting = ref(false);
const refreshing = ref(false);
const applications = ref([]);

// 提交补选申请
const submitApplication = async () => {
  if (!studentId.value) {
    ElMessage.warning('学生ID无效，请重新登录');
    return;
  }
  if (!formData.section_id) {
    ElMessage.warning('请输入开课ID');
    return;
  }

  submitting.value = true;

  try {
    const params = {
      student_id: studentId.value,
      section_id: formData.section_id
    };
    
    const response = await chooseCourseSupp(params);
    
    if (response.code === '200') {
      ElMessage.success('补选申请提交成功');
      formData.section_id = ''; // Clear input after successful submission
      await refreshApplications();
    } else {
      ElMessage.error(response.message || '提交失败');
    }
  } catch (error) {
    ElMessage.error('提交补选申请失败');
    console.error(error);
  } finally {
    submitting.value = false;
  }
};

// 刷新补选申请状态
const refreshApplications = async () => {
  if (!studentId.value) {
    // No warning message here, as this can be called on mount before ID is available
    // or if the user is not logged in.
    // applications.value will remain empty, showing the empty state.
    applications.value = [];
    return;
  }

  try {
    refreshing.value = true;
    const response = await getSuppResult(studentId.value);
    
    if (response.code === '200') {
      if (response.data && response.data.result_list) {
        applications.value = response.data.result_list.map(item => ({
          student_id: studentId.value,
          section_id: item.course_id,
          course_name: item.course_name,
          teacher_name: item.teacher_name,
          class_time: item.class_time,
          classroom: item.classroom,
          credit: item.credit,
          result: reflectResult(item.result)
        }));
        if (applications.value.length > 0) {
          ElMessage.success('刷新补选状态成功');
        } else {
          ElMessage.info('暂无补选申请记录');
        }
      } else {
        applications.value = [];
        ElMessage.info('暂无补选申请数据');
      }
    } else {
      applications.value = [];
      ElMessage.error(response.message || '刷新补选状态失败');
    }
  } catch (error) {
    applications.value = [];
    ElMessage.error('刷新补选状态失败');
    console.error(error);
  } finally {
    refreshing.value = false;
  }
};

const reflectResult = (result) => {
  switch (result) {
    case '0':
      return '待审核';
    case '1':
      return '补选成功';
    case '2':
      return '补选失败';
    default:
      return '未知';
  }
}

// 获取状态对应的标签类型
const getStatusType = (status) => {
  switch (status) {
    case '补选成功':
      return 'success';
    case '补选失败':
      return 'danger';
    case '待审核':
    default:
      return 'info';
  }
};

onMounted(() => {
  refreshApplications();
});

</script>

<style scoped>
.choose-course-supp {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center; /* Center cards */
  gap: 20px;
}

.form-card {
  width: 95%;
  margin: 0px auto 20px auto;
}

.applications-card {
  width: 95%;
  margin: 0 auto;
}

.card-header-center {
  display: flex;
  justify-content: center; /* Center title */
  align-items: center;
}

.card-header-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-header-flex h2 {
  margin: 0;
}

.input-form {
  max-width: 400px; /* Adjusted for better centering within card */
  margin: 0 auto;
}

/* .empty-container is not used in the provided template, can be removed if not needed elsewhere */
</style>
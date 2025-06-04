<template>
  <div>
    <!-- 信息管理模块 -->
    <div v-if="activeModule.get() === 'infoManagement'">
      <div class="module-content-placeholder">信息管理模块正在建设中...</div>
    </div>

    <!-- 课程安排模块 -->
    <div v-if="activeModule.get() === 'courseArrangement'">
      <div class="module-content-placeholder">课程安排模块正在建设中...</div>
    </div>
    
    <!-- 课程选择模块 -->
    <div v-if="activeModule.get() === 'courseSelection'">
      <div style="display: flex;flex-wrap: wrap; justify-content: start;">
        <!-- 学生的界面 -->
        <el-button class="cardBox" @click="goToChooseCurriculum()" v-if="user == 'student'">
          <div>
            <div style="font-size: 28px;font-weight: bold;">定制培养方案</div>
            <el-divider />
            <el-icon size="150px" color="info">
              <Edit />
            </el-icon>
          </div>
        </el-button>

        <el-button class="cardBox" @click="goToShowCurriculum()" v-if="user == 'student'">
          <div>
            <div style="font-size: 28px;font-weight: bold;">查看培养方案</div>
            <el-divider />
            <el-icon size="150px" color="black">
              <InfoFilled />
            </el-icon>
          </div>
        </el-button>

        <el-button class="cardBox" @click="goToSearchCourse()" v-if="user == 'student'">
          <div>
            <div style="font-size: 28px;font-weight: bold;">搜索课程信息</div>
            <el-divider />
            <el-icon size="150px" color="#409EFF">
              <Search />
            </el-icon>
          </div>
        </el-button>

        <el-button class="cardBox" @click="goToChooseCourse()" v-if="user == 'student'">
          <div>
            <div style="font-size: 28px;font-weight: bold;">课程初选</div>
            <el-divider />
            <el-icon size="150px" color="#67C23A">
              <Calendar />
            </el-icon>
          </div>
        </el-button>

        <el-button class="cardBox" @click="goToChooseCourseSupp()" v-if="user == 'student'">
          <div>
            <div style="font-size: 28px;font-weight: bold;">课程补选</div>
            <el-divider />
            <el-icon size="150px" color="pink">
              <Collection />
            </el-icon>
          </div>
        </el-button>

        <el-button class="cardBox" @click="goToShowResult()" v-if="user == 'student'">
          <div>
            <div style="font-size: 28px;font-weight: bold;">查看选课结果</div>
            <el-divider />
            <el-icon size="150px" color="#E6A23C">
              <Tickets />
            </el-icon>
          </div>
        </el-button>

        <!-- 老师的界面 -->
        <el-button class="cardBox" @click="goToShowResultTeacher()" v-if="user == 'teacher'">
          <div>
            <div style="font-size: 26px;font-weight: bold;">查看选课结果<br>（教师端）</div>
            <el-divider />
            <el-icon size="150px" color="#E6A23C">
              <Tickets />
            </el-icon>
          </div>
        </el-button>

        <!-- 管理员的界面 -->
        <el-button class="cardBox" @click="goToManage()" v-if="user == 'admin'">
          <div>
            <div style="font-size: 28px;font-weight: bold;">课程选择管理</div>
            <el-divider />
            <el-icon size="150px" color="#F56C6C">
              <Tools />
            </el-icon>
          </div>
        </el-button>

        <el-button class="cardBox" @click="goToManualChoose()" v-if="user == 'admin'">
          <div>
            <div style="font-size: 28px;font-weight: bold;">手动选择课程</div>
            <el-divider />
            <el-icon size="150px" color="#info">
              <SetUp />
            </el-icon>
          </div>
        </el-button>

        <el-button class="cardBox" @click="goToSetCurriculum()" v-if="user == 'admin'">
          <div>
            <div style="font-size: 28px;font-weight: bold;">制订培养方案</div>
            <el-divider />
            <el-icon size="150px" color="#409EFF">
              <List />
            </el-icon>
          </div>
        </el-button>

        <el-button class="cardBox" @click="goToManageSupp()" v-if="user == 'admin'">
          <div>
            <div style="font-size: 28px;font-weight: bold;">课程补选管理</div>
            <el-divider />
            <el-icon size="150px" color="#E6A23C">
              <EditPen />
            </el-icon>
          </div>
        </el-button>
      </div>
    </div>

    <!-- 在线测验模块 -->
    <div v-if="activeModule.get() === 'onlineQuiz'">
      <div class="module-content-placeholder">在线测验模块正在建设中...</div>
    </div>

    <!-- 课程资源共享模块 -->
    <div v-if="activeModule.get() === 'resourceSharing'">
      <div class="module-content-placeholder">课程资源共享模块正在建设中...</div>
    </div>

  </div>
</template>

<script setup>
import { inject } from 'vue'; // Removed ref as activeModule is now injected
import { useRouter } from 'vue-router';

const activeModule = inject('activeModule'); // Injected activeModule
const user = inject('user');
const router = useRouter();
const is_homepage = inject('is_homepage');

function goToChooseCurriculum() {
  is_homepage.set(false);
  router.push('/course_selection/chooseCurriculum');
}
function goToShowCurriculum() {
  is_homepage.set(false);
  router.push('/course_selection/showCurriculum');
}
function goToSearchCourse() {
  is_homepage.set(false);
  router.push('/course_selection/searchCourse');
}
function goToChooseCourse() {
  is_homepage.set(false);
  router.push('/course_selection/chooseCourse');
}
function goToShowResult() {
  is_homepage.set(false);
  router.push('/course_selection/showResult');
}
function goToShowResultTeacher() {
  is_homepage.set(false);
  router.push('/course_selection/showResultTeacher');
}
function goToManage() {
  is_homepage.set(false);
  router.push('/course_selection/manage');
}
function goToManualChoose() {
  is_homepage.set(false);
  router.push('/course_selection/manualChoose');
}
function goToSetCurriculum() {
  is_homepage.set(false);
  router.push('/course_selection/setCurriculum');
}
function goToChooseCourseSupp() {
  is_homepage.set(false);
  router.push('/course_selection/chooseCourseSupplementary');
}
function goToManageSupp() {
  is_homepage.set(false);
  router.push('/course_selection/manageSupplementary');
}
</script>

<style scoped>
.cardBox {
    height: 300px;
    width: 200px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
    margin-top: 40px;
    margin-left: 50px;
    margin-right: 25px;
    margin-bottom: 20px;
    padding: 7.5px;
    padding-right: 10px;
    padding-top: 15px;
    border-radius: 15px;
}

.cardBox:hover {
  transform: translateY(-7px);
  transition: transform 0.3s ease;
}

/* Removed .module-tabs styles as el-tabs is no longer used */

.module-content-placeholder {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  font-size: 20px;
  color: #909399;
  margin: 20px; /* Added margin for consistency */
}
</style>
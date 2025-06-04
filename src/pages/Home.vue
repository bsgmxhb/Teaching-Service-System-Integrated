<template>
  <div>
    <!-- 信息管理模块 -->
    <div v-if="activeModule.get() === 'infoManagement'">
      <div style="display: flex;flex-wrap: wrap; justify-content: start;">
        <el-button class="cardBox" @click="goToProfile()">
          <div>
            <div style="font-size: 28px;font-weight: bold;">个人信息</div>
            <el-divider />
            <el-icon size="150px" color="#67C23A"><Calendar /></el-icon>
          </div>
        </el-button>

        <el-button class="cardBox" @click="goToQueryGrades()" v-if="user == 'student'">
          <div>
            <div style="font-size: 28px;font-weight: bold;">成绩查询</div>
            <el-divider />
            <el-icon size="150px" color="#67C23A"><Calendar /></el-icon>
          </div>
        </el-button>

        <el-button class="cardBox" @click="goToQueryGradeAnalysis()" v-if="user == 'student'">
          <div>
            <div style="font-size: 28px;font-weight: bold;">学情分析</div>
            <el-divider />
            <el-icon size="150px" color="#67C23A"><Calendar /></el-icon>
          </div>
        </el-button>

        <el-button class="cardBox" @click="goToUserManagement()" v-if="user == 'admin'">
          <div>
            <div style="font-size: 28px;font-weight: bold;">用户管理</div>
            <el-divider />
            <el-icon size="150px" color="#67C23A"><Calendar /></el-icon>
          </div>
        </el-button>
        
        <el-button class="cardBox" @click="goToCourseManagement()" v-if="user == 'admin'">
          <div>
            <div style="font-size: 28px;font-weight: bold;">课程管理</div>
            <el-divider />
            <el-icon size="150px" color="#67C23A"><Calendar /></el-icon>
          </div>
        </el-button>

        <el-button class="cardBox" @click="goToApproveGradeChange()" v-if="user == 'admin'">
          <div>
            <div style="font-size: 28px;font-weight: bold;">审核成绩修改</div>
            <el-divider />
            <el-icon size="150px" color="#67C23A"><Calendar /></el-icon>
          </div>
        </el-button>

        <el-button class="cardBox" @click="goToSubmitGrades()" v-if="user == 'teacher'">
          <div>
            <div style="font-size: 28px;font-weight: bold;">提交成绩</div>
            <el-divider />
            <el-icon size="150px" color="#67C23A"><Calendar /></el-icon>
          </div>
        </el-button>

        <el-button class="cardBox" @click="goToTaughtCourses()" v-if="user == 'teacher'">
          <div>
            <div style="font-size: 28px;font-weight: bold;">我的课程</div>
            <el-divider />
            <el-icon size="150px" color="#67C23A"><Calendar /></el-icon>
          </div>
        </el-button>

        <el-button class="cardBox" @click="goToEditCourse()" v-if="user == 'teacher'">
          <div>
            <div style="font-size: 28px;font-weight: bold;">修改课程信息</div>
            <el-divider />
            <el-icon size="150px" color="#67C23A"><Calendar /></el-icon>
          </div>
        </el-button>

        <el-button class="cardBox" @click="goToRequestGradeChange()" v-if="user == 'teacher'">
          <div>
            <div style="font-size: 28px;font-weight: bold;">修改已提交成绩</div>
            <el-divider />
            <el-icon size="150px" color="#67C23A"><Calendar /></el-icon>
          </div>
        </el-button>

        <el-button class="cardBox" @click="goToCourseGradeAnalysis()" v-if="user == 'teacher'">
          <div>
            <div style="font-size: 28px;font-weight: bold;">课程成绩分析</div>
            <el-divider />
            <el-icon size="150px" color="#67C23A"><Calendar /></el-icon>
          </div>
        </el-button>
        
      </div>
    </div>

    <!-- 课程安排模块 -->
    <div v-if="activeModule.get() === 'courseArrangement'">
      <div style="display: flex;flex-wrap: wrap; justify-content: start;">

      <el-button class="cardBox" @click="goToClassroomBrowseAdmin()" v-if="user == 'admin'">
        <div>
          <div style="font-size: 28px;font-weight: bold;">浏览教室信息<br>（管理员端）</div>
          <el-divider />
          <el-icon size="150px" color="#67C23A"><Calendar /></el-icon>
        </div>
      </el-button>

      <el-button class="cardBox" @click="goToClassroomBrowseTeacher()" v-if="user == 'teacher'">
        <div>
          <div style="font-size: 28px;font-weight: bold;">浏览教室信息<br>（教师端）</div>
          <el-divider />
          <el-icon size="150px" color="#67C23A"><Calendar /></el-icon>
        </div>
      </el-button>

      <el-button class="cardBox" @click="goToClassroomAddition()" v-if="user == 'admin'">
        <div>
          <div style="font-size: 28px;font-weight: bold;">添加教室</div>
          <el-divider />
          <el-icon size="150px" color="info"><Edit /></el-icon>
        </div>
      </el-button>

      <el-button class="cardBox" @click="goToClassroomModify()" v-if="user == 'admin'">
        <div>
          <div style="font-size: 28px;font-weight: bold;">修改教室信息</div>
          <el-divider />
          <el-icon size="150px" color="black"><InfoFilled /></el-icon>
        </div>
      </el-button>

      <el-button class="cardBox" @click="goToClassroomDeletion()" v-if="user == 'admin'">
        <div>
          <div style="font-size: 28px;font-weight: bold;">删除教室</div>
          <el-divider />
          <el-icon size="150px" color="pink"><Collection /></el-icon>
        </div>
      </el-button>

      <el-button class="cardBox" @click="goToCourseAutoArrange()" v-if="user == 'admin'">
        <div>
          <div style="font-size: 28px;font-weight: bold;">自动排课</div>
          <el-divider />
          <el-icon size="150px" color="#E6A23C"><Tickets /></el-icon>
        </div>
      </el-button>

      <el-button class="cardBox" @click="goToCourseArrangement()" v-if="user == 'admin'">
        <div>
          <div style="font-size: 26px;font-weight: bold;">手动调整课程</div>
          <el-divider />
          <el-icon size="150px" color="#409EFF"><Search /></el-icon>
        </div>
      </el-button>

      <el-button class="cardBox" @click="goToCourseArrangementQueryClassroom()" v-if="user == 'teacher'">
        <div>
          <div style="font-size: 28px;font-weight: bold;">教室课表查询</div>
          <el-divider />
          <el-icon size="150px" color="#F56C6C"><Tools /></el-icon>
        </div>
      </el-button>

      <el-button class="cardBox" @click="goToCourseArrangementQueryTeacher()" v-if="user == 'teacher'">
        <div>
          <div style="font-size: 28px;font-weight: bold;">教师课表查询</div>
          <el-divider />
          <el-icon size="150px" color="#info"><SetUp /></el-icon>
        </div>
      </el-button>

      </div>
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
      <div style="display: flex;flex-wrap: wrap; justify-content: start;">
        <!-- 学生的界面 -->
        <el-button class="cardBox" @click="goToSearchTest()" v-if="user == 'student'">
          <div>
            <div style="font-size: 28px;font-weight: bold;">考试查询</div>
            <el-divider />
            <el-icon size="150px" color="info">
              <Search />
            </el-icon>
          </div>
        </el-button>

        <el-button class="cardBox" @click="goToSearchResult()" v-if="user == 'student'">
          <div>
            <div style="font-size: 28px;font-weight: bold;">成绩查询</div>
            <el-divider />
            <el-icon size="150px" color="#409EFF">
              <DocumentChecked />
            </el-icon>
          </div>
        </el-button>      

        <!-- 老师的界面 -->
        <el-button class="cardBox" @click="goToSetQuestionBank()" v-if="user == 'teacher'">
          <div>
            <div style="font-size: 26px;font-weight: bold;">题库管理</div>
            <el-divider />
            <el-icon size="150px" color="info">
              <Tools />
            </el-icon>
          </div>
        </el-button>

        <el-button class="cardBox" @click="goToManageTest()" v-if="user == 'teacher'">
          <div>
            <div style="font-size: 28px;font-weight: bold;">考试管理</div>
            <el-divider />
            <el-icon size="150px" color="#E6A23C">
              <DocumentAdd />
            </el-icon>
          </div>
        </el-button>

        <el-button class="cardBox" @click="goToSearchAnalysis()" v-if="user == 'teacher'">
          <div>
            <div style="font-size: 28px;font-weight: bold;">成绩查询分析</div>
            <el-divider />
            <el-icon size="150px" color="#409EFF">
              <Search />
            </el-icon>
          </div>
        </el-button>

      </div>
    </div>

    <!-- 课程资源共享模块 -->
    <div v-if="activeModule.get() === 'resourceSharing'">
            <div style="display: flex;flex-wrap: wrap; justify-content: start;">

          
      <el-button class="cardBox" @click="goToUploadResource()" v-if="user == 'student'">
        <div>
          <div style="font-size: 28px;font-weight: bold;">课程资源上传</div>
          <el-divider />
          <el-icon size="150px" color="pink"><Collection /></el-icon>
        </div>
      </el-button>
      <el-button class="cardBox" @click="goToviewResource()" v-if="user == 'student'">
        <div>
          <div style="font-size: 28px;font-weight: bold;">课程资源查看</div>
          <el-divider />
          <el-icon size="150px" color="pink"><Collection /></el-icon>
        </div>
      </el-button>
      <el-button class="cardBox" @click="goToHomework()" v-if="user == 'student'">
        <div>
          <div style="font-size: 28px;font-weight: bold;">作业</div>
          <el-divider />
          <el-icon size="150px" color="pink"><Collection /></el-icon>
        </div>
      </el-button>

      <el-button class="cardBox" @click="goToHomeworkTeacher()" v-if="user == 'teacher'">
        <div>
          <div style="font-size: 28px;font-weight: bold;">作业（教师端）</div>
          <el-divider />
          <el-icon size="150px" color="pink"><Collection /></el-icon>
        </div>
      </el-button>

      <el-button class="cardBox" @click="goToAttendance()" v-if="user == 'teacher'">
        <div>
          <div style="font-size: 28px;font-weight: bold;">考勤（教师端）</div>
          <el-divider />
          <el-icon size="150px" color="pink"><Collection /></el-icon>
        </div>
      </el-button>
      </div>
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
function goToClassroomBrowseAdmin() {
  is_homepage.set(false);
  router.push('/course_schedule/classroomBrowseAdmin');
}
function goToClassroomBrowseTeacher() {
  is_homepage.set(false);
  router.push('/course_schedule/classroomBrowseTeacher');
}
function goToClassroomAddition() {
  is_homepage.set(false);
  router.push('/course_schedule/classroomAddition');
}
function goToClassroomModify() {
  is_homepage.set(false);
  router.push('/course_schedule/classroomModify');
}
function goToClassroomDeletion() {
  is_homepage.set(false);
  router.push('/course_schedule/classroomDeletion');
}
function goToCourseAutoArrange() {
  is_homepage.set(false);
  router.push('/course_schedule/courseAutoArrange');
}
function goToCourseArrangement() {
  is_homepage.set(false);
  router.push('/course_schedule/courseArrangement');
}
function goToCourseArrangementQueryClassroom() {
  is_homepage.set(false);
  router.push('/course_schedule/courseArrangementQueryClassroom');
}
function goToCourseArrangementQueryTeacher() {
  is_homepage.set(false);
  router.push('/course_schedule/courseArrangementQueryTeacher');
}
function goToSetQuestionBank() {
  is_homepage.set(false);
  router.push('/online_test/setQuestionBank');
}
function goToManageTest() {
  is_homepage.set(false);
  router.push('/online_test/manageTest');
}
function goToSearchAnalysis() {
  is_homepage.set(false);
  router.push('/online_test/searchAnalysis');
}
function goToSearchResult() {
  is_homepage.set(false);
  router.push('/online_test/searchResult');
}
function goToSearchTest() {
  is_homepage.set(false);
  router.push('/online_test/searchTest');
}
function goToUploadResource() {
  is_homepage.set(false);
  router.push('/resource_sharing/uploadResource');
}
function goToviewResource() {
  is_homepage.set(false);
  router.push('/resource_sharing/viewResource');
}
function goToHomework() {
  is_homepage.set(false);
  router.push('/resource_sharing/homework');
}
function goToHomeworkTeacher() {
  is_homepage.set(false);
  router.push('/resource_sharing/homeworkTeacher');
}
function goToAttendance() {
  is_homepage.set(false);
  router.push('/resource_sharing/attendance');
}
// TODO: 信息管理模块跳转
function goToProfile() {
  is_homepage.set(false);
  router.push('/info_manage/profile');
}
function goToQueryGrades() {
  is_homepage.set(false);
  router.push('/info_manage/queryGrades');
}
function goToQueryGradeAnalysis() {
  is_homepage.set(false);
  router.push('/info_manage/queryGradeAnalysis');
}
function goToUserManagement() {
  is_homepage.set(false);
  router.push('/info_manage/userManagement');
}
function goToCourseManagement() {
  is_homepage.set(false);
  router.push('/info_manage/courseManagement');
}
function goToApproveGradeChange() {
  is_homepage.set(false);
  router.push('/info_manage/approveGradeChange');
}
function goToSubmitGrades() {
  is_homepage.set(false);
  router.push('/info_manage/submitGrades');
}
function goToTaughtCourses() {
  is_homepage.set(false);
  router.push('/info_manage/taughtCourses');
}
function goToEditCourse() {
  is_homepage.set(false);
  router.push('/info_manage/editCourse');
}
function goToRequestGradeChange() {
  is_homepage.set(false);
  router.push('/info_manage/requestGradeChange');
}
function goToCourseGradeAnalysis() {
  is_homepage.set(false);
  router.push('/info_manage/courseGradeAnalysis');
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
import { createRouter, createWebHistory } from 'vue-router'
// 课程选择
import ChooseCurriculum from '../pages/course_selection/student/ChooseCurriculum.vue'
import ShowCurriculum from '../pages/course_selection/student/ShowCurriculum.vue'
import SearchCourse from '../pages/course_selection/student/SearchCourse.vue'
import ChooseCourse from '../pages/course_selection/student/ChooseCourse.vue'
import ChooseCourseSupp from '../pages/course_selection/student/ChooseCourseSupp.vue'
import ShowResult from '../pages/course_selection/student/ShowResult.vue'
import ShowResultTeacher from '../pages/course_selection/teacher/ShowResultTeacher.vue'
import Manage from '../pages/course_selection/admin/Manage.vue'
import ManualChoose from '../pages/course_selection/admin/ManualChoose.vue'
import SetCurriculum from '../pages/course_selection/admin/SetCurriculum.vue'
import ManageSupp from '../pages/course_selection/admin/ManageSupp.vue'
// 课程安排
import ClassroomBrowseAdmin from '../pages/course_schedule/admin/ClassroomBrowseAdmin.vue'
import ClassroomAddition from '../pages/course_schedule/admin/ClassroomAddition.vue'
import ClassroomDeletion from '../pages/course_schedule/admin/ClassroomDeletion.vue'
import ClassroomModify from '../pages/course_schedule/admin/ClassroomModify.vue'
import CourseArrangement from '../pages/course_schedule/admin/CourseArrangement.vue'
import CourseAutoArrange from '../pages/course_schedule/admin/CourseAutoArrange.vue'
import ClassroomBrowseTeacher from '../pages/course_schedule/teacher/ClassroomBrowseTeacher.vue'
import CourseArrangementQueryClassroom from '../pages/course_schedule/teacher/CourseArrangementQueryClassroom.vue'
import CourseArrangementQueryTeacher from '../pages/course_schedule/teacher/CourseArrangementQueryTeacher.vue'
// 在线测验
import SetQuestionBank from '../pages/online_test/teacher/SetQuestionBank.vue'
import ManageTest from '../pages/online_test/teacher/ManageTest.vue'
import SearchAnalysis from '../pages/online_test/teacher/SearchAnalysis.vue'
import SearchResult from '../pages/online_test/student/SearchResult.vue'
import SearchTest from '../pages/online_test/student/SearchTest.vue'
// 资源共享
import UploadResource from '../pages/resource_share/student/UploadResource.vue'
import Homework from '../pages/resource_share/student/Homework.vue'
import ViewResource from '../pages/resource_share/student/ViewResource.vue'
import HomeworkTeacher from '../pages/resource_share/teacher/HomeworkTeacher.vue'
import Attendance from '../pages/resource_share/teacher/Attendance.vue'
// 信息管理
import AdminDashboard from "../pages/info_manage/admin/Admin_Dashboard.vue";
import AdminCourseManagement from "../pages/info_manage/admin/Admin_CourseManagement.vue";
import AdminUserManagement from "../pages/info_manage/admin/Admin_UserManagement.vue";
import AdminProfile from "../pages/info_manage/admin/Admin-Profile.vue";
import StudentDashboard from "../pages/info_manage/student/Student_Dashboard.vue";
import StudentGradeAnalysis from "../pages/info_manage/student/Student_GradeAnalysis.vue";
import StudentProfile from "../pages/info_manage/student/Student_Profile.vue";
import StudentQueryGrades from "../pages/info_manage/student/Student_QueryGrades.vue";
import StudentSelectedCourses from "../pages/info_manage/student/Student_SelectCourses.vue";
import TeacherSubmitGrades from "../pages/info_manage/teacher/Teacher_SubmitGrades.vue";
import TeacherCourseGradeAnalysis from "../pages/info_manage/teacher/Teacher_CourseGradeAnalysis.vue";
import TeacherDashboard from "../pages/info_manage/teacher/Teacher_Dashboard.vue";
import TeacherEditCourse from "../pages/info_manage/teacher/Teacher_EditCourse.vue";
import TeacherProfile from "../pages/info_manage/teacher/Teacher_Profile.vue";
import TeacherRequestGradeChange from "../pages/info_manage/teacher/Teacher_RequestGradeChange.vue";
import TeacherTaughtCourses from "../pages/info_manage/teacher/Teacher_TaughtCourses.vue";

import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import ChangePassword from '../pages/ChangePassword.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/home', component: Home },
        { path: '/login', component: Login },
        { path: '/changePassword', component: ChangePassword },
        { path: '/course_selection/chooseCurriculum', component: ChooseCurriculum },
        { path: '/course_selection/showCurriculum', component: ShowCurriculum },
        { path: '/course_selection/searchCourse', component: SearchCourse },
        { path: '/course_selection/chooseCourse', component: ChooseCourse },
        { path: '/course_selection/chooseCourseSupplementary', component: ChooseCourseSupp },
        { path: '/course_selection/showResult', component: ShowResult },
        { path: '/course_selection/showResultTeacher', component: ShowResultTeacher },
        { path: '/course_selection/manage', component: Manage },
        { path: '/course_selection/manualChoose', component: ManualChoose },
        { path: '/course_selection/setCurriculum', component: SetCurriculum },
        { path: '/course_selection/manageSupplementary', component: ManageSupp },
        // TODO: add other modules
        { path: '/course_schedule/classroomBrowseAdmin', component: ClassroomBrowseAdmin },
        { path: '/course_schedule/classroomAddition', component: ClassroomAddition },
        { path: '/course_schedule/classroomDeletion', component: ClassroomDeletion },
        { path: '/course_schedule/classroomModify', component: ClassroomModify },
        { path: '/course_schedule/courseArrangement', component: CourseArrangement },
        { path: '/course_schedule/courseAutoArrange', component: CourseAutoArrange },
        { path: '/course_schedule/classroomBrowseTeacher', component: ClassroomBrowseTeacher },
        { path: '/course_schedule/courseArrangementQueryClassroom', component: CourseArrangementQueryClassroom },
        { path: '/course_schedule/courseArrangementQueryTeacher', component: CourseArrangementQueryTeacher },

        {  path: '/online_test/setQuestionBank', component: SetQuestionBank },
        {  path: '/online_test/manageTest', component: ManageTest },
        {  path: '/online_test/searchAnalysis', component: SearchAnalysis },
        { path: '/online_test/searchResult', component: SearchResult},
        { path: '/online_test/searchTest', component: SearchTest},

        { path: '/resource_sharing/uploadResource', component: UploadResource },
        { path: '/resource_sharing/homework', component: Homework },
        { path: '/resource_sharing/viewResource', component: ViewResource },
        { path: '/resource_sharing/homeworkTeacher', component: HomeworkTeacher },
        { path: '/resource_sharing/attendance', component: Attendance },

        { path: '/info_manage/admin/Admin_Dashboard', component: AdminDashboard },
        { path: '/info_manage/admin/Admin_CourseManagement', component: AdminCourseManagement },
        { path: '/info_manage/admin/Admin_UserManagement', component: AdminUserManagement },
        { path: '/info_manage/admin/Admin_Profile', component: AdminProfile },
        { path: '/ChangePassword', component: ChangePassword },
        { path: '/info_manage/student/Student_Dashboard', component: StudentDashboard },
        { path: '/info_manage/student/Student_GradeAnalysis', component: StudentGradeAnalysis },
        { path: '/info_manage/student/Student_Profile', component: StudentProfile },
        { path: '/info_manage/student/Student_QueryGrades', component: StudentQueryGrades },
        { path: '/info_manage/student/Student_SelectCourses', component: StudentSelectedCourses },
        { path: '/info_manage/teacher/Teacher_SubmitGrades', component: TeacherSubmitGrades },
        { path: '/info_manage/teacher/Teacher_CourseGradeAnalysis', component: TeacherCourseGradeAnalysis },
        { path: '/info_manage/teacher/Teacher_Dashboard', component: TeacherDashboard },
        { path: '/info_manage/teacher/Teacher_EditCourse', component: TeacherEditCourse },
        { path: '/info_manage/teacher/Teacher_Profile', component: TeacherProfile },
        { path: '/info_manage/teacher/Teacher_RequestGradeChange', component: TeacherRequestGradeChange },
        { path: '/info_manage/teacher/Teacher_TaughtCourses', component: TeacherTaughtCourses },
    ]
})

export default router
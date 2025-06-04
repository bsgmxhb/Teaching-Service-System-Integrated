import { createRouter, createWebHistory } from 'vue-router'
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
// TODO: import pages from other modules
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/home', component: Home },
        { path: '/login', component: Login },
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
    ]
})

export default router
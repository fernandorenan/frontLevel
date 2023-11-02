import { createRouter, createWebHashHistory } from 'vue-router';
import HomeInitial from '@/components/HomeInitial.vue';
import PatientList from '@/components/PatientList.vue';
import CreatePatient from '@/components/CreatePatient.vue';
import EditPatient from '@/components/EditPatient.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeInitial,
  },
  {
    path: '/patients',
    name: 'PatientList',
    component: PatientList,
  },
  {
    path: '/patients/new',
    name: 'CreatePatient',
    component: CreatePatient,
  },
  {
    path: '/patients/:id/edit',
    name: 'EditPatient',
    component: EditPatient,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
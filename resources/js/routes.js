import All from './components/All.vue';
import Create from './components/Create.vue';
import Edit from './components/Edit.vue';

export const routes = [{
  name: 'home',
  path: '/',
  component: All
},
  {
    name: 'create',
    path: '/create',
    component: Create
  },
  {
    name: 'edit',
    path: '/edit/:id',
    component: Edit
  }
];
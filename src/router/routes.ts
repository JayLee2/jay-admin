import { Route } from './route';

import Layout from '@pages/layout';
import User from '@pages/user';
import Project from '@pages/project';
import Dashboard from '@pages/dashboard';

const routes: Route[] = [
  {
    path: '/',
    component: Layout,
    routes: [
      {
        path: '/',
        component: Dashboard,
        exact: true,
        hidden: true,
      },
      {
        name: '用户管理',
        routes: [
          {
            name: '小年糕用户管理',
            path: '/user',
            component: User,
          },
          {
            name: '对唱用户管理',
            path: '/project',
            component: Project,
          },
        ],
      },
      {
        name: '项目管理',
        routes: [
          {
            name: '标签',
            path: '/label',
            component: User,
          },
          {
            name: '算法',
            path: '/math',
            component: Project,
          },
        ],
      },
      {
        name: '管理员管理',
        path: '/admin',
        component: Project,
      },
    ],
  },
];
export default routes;

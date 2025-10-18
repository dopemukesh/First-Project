import React from 'react';
// import AdminUser from './Pages/Users/AdminUser';
import AdminUser2 from './Pages/Users/AdminUser2';
import Overview from './Pages/Overview/Overview';
import CreateClass from './Pages/CreateClass/CreateClass';

const adminPages = [
  { name: 'Overview', id: 'overview', component: Overview },
  { name: 'Users', id: 'users', component: AdminUser2 },
  { name: 'Classes', id: 'classes', component: CreateClass },
  { name: 'Settings', id: 'settings' },
  { name: 'Reports', id: 'reports' },
  { name: 'Notifications', id: 'notifications' },
  { name: 'Payments', id: 'payments' },
  { name: 'Integrations', id: 'integrations' },
  { name: 'Roles', id: 'roles' },
  { name: 'Logs', id: 'logs' },
  { name: 'Support', id: 'support' },
];

export default adminPages;

export const topBarLinks = [
  { name: 'Overview', id: 'overview', component: Overview  },
  { name: 'Users', id: 'users', component: AdminUser2 },
  { name: 'Jobs', id: 'jobs' },
  { name: 'Classes', id: 'classes', component: CreateClass },
  { name: 'Notifications', id: 'notifications' },
];
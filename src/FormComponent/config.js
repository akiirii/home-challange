import { OPTIONS } from '../constants';

export default [
  {
    name: 'name',
    label: 'Full Name',
    type: 'text',
    component: 'Input',
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    component: 'Input',
  },
  {
    name: 'phone',
    label: 'Phone number',
    type: 'text',
    component: 'Input',
  },
  {
    name: 'salary',
    label: 'Salary indicatior',
    type: 'text',
    component: 'Radio',
    options: OPTIONS,
  },
];

import { OPTIONS } from '../constants';

export const FORM_CONFIG = [
  {
    name: 'name',
    label: 'Full Name',
    component: 'Input',
  },
  {
    name: 'email',
    label: 'Email',
    component: 'Input',
  },
  {
    name: 'phone',
    label: 'Phone number',
    component: 'Input',
  },
  {
    name: 'salary',
    label: 'Salary indicatior',
    component: 'Radio',
    options: OPTIONS,
  },
];

export const DONE_CONFIG = [
  {
    component: 'Done',
    options: FORM_CONFIG.map((filed) => ({ name: filed.name, label: filed.label })),
  },
];

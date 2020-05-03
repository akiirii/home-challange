import { OPTIONS } from '../constants';

export const FORM_CONFIG = [
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

export const DONE_CONFIG = [
  {
    component: 'Done',
    options: FORM_CONFIG.map((filed) => ({ name: filed.name, label: filed.label })),
  },
];

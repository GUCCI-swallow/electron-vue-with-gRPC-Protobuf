import TOP from 'components/Top';

export default [
  {
    path: '/',
    name: 'top',
    component: TOP,
  },
  {
    path: '*',
    redirect: '/',
  },
];

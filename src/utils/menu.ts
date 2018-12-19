import { getLocalStorage } from './utils';

/**
 * {
 *  id
 *  mpid: 在哪个菜单栏显示 不显示为-1
 *  bpid: 关联父级菜单
 * }
 */

console.log(getLocalStorage('storeMenu'));
const database: any = [
  {
    id: 1,
    name: '菜单',
    icon:'home',
    bpid: 0,
    mpid: 0,
    authority: ['create', 'delete', 'edit', 'view'],
  },
  {
    id: 2,
    name: '菜单2',
    route: '/index/index',
    bpid: 1,
    mpid: 1,
    authority: ['create', 'delete', 'edit', 'view'],

  },
];
// console.log(database)
export default database;
// export default getLocalStorage('storeMenu').lists;

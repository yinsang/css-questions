import Loadable from 'react-loadable';
import Layout from '../components/Layout';
import Loading from '../components/Loading';
import PageA from '../views/subpage-a/index';

// 异步加载二级页面
const PageB = Loadable({
  loader: () => import('../views/subpage-b/index'),
  loading: Loading
});

export default [{
  component: Layout,
  routes: [{
    path: `${ROUTE_BASE_PATH}`,
    component: PageA,
    exact: true
  }, {
    path: `${ROUTE_BASE_PATH}/subpage-b`,
    component: PageB,
    exact: true
  }]
}];

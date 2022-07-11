import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    // { path: '/', component: '@/pages/user/login/index' },
    { path: '/', component: '@/pages/Modal' },
  ],
  fastRefresh: {},
});

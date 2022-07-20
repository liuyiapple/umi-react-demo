import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    // { path: '/', component: '@/pages/user/login/index' },
    // { path: '/', component: '@/pages/Modal' },
    // {path:"/",component:"@/pages/ListPages"}
    // {path:"/",component:"@/pages/FormDemo"}
    // {path:"/",component:"@/pages/Canvas"}
    // {path:"/",component:"@/pages/Hooks/useCallback"}
    {path:"/",component:"@/pages/GlobalImageInModal"}
  ],
  fastRefresh: {},
});

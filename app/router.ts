import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.get('/welcome', controller.home.list);
  router.get('/detail/', controller.home.detail);
};

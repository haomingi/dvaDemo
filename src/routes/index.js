/**
 * Created by 001758 on 2017/7/19.
 */
const cached = {};
function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
}

const defaultRouter = [
  {
    path: '/',
    name: 'IndexPage',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./modules/IndexPage'));
      });
    },
  },
  {
    path: '/products',
    name: 'Products',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        registerModel(cached.app, require('../models/products'));
        cb(null, require('./modules/Products'));
      });
    },
  },
];

export default function (app) {
  cached.app = app
  return Array.prototype.concat(defaultRouter)
}

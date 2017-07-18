import dva from 'dva';
import { useRouterHistory } from 'dva/router';
import { createHashHistory } from 'history';
import createLoading from 'dva-loading';
//import createLogger from 'redux-logger';
//import option from './loggerOptions'
import { message } from 'antd'
import model from './model'
import './index.css';

// 1. Initialize
const app = dva({
  initialState: {
    //products: [
    //  {name: 'dva', id: 1, key: 1},
    //  {name: 'antd', id: 2, key: 2},
    //]
  },
  history: useRouterHistory(createHashHistory)({ queryKey: false }),
  //onAction: createLogger(option),
  onError(e) {
    message.error(e.message, /* duration */3);
  },
});

// 2. Plugins
// app.use({});
app.use(createLoading());

// 3. Model
// app.model(require('./models/example'));
//app.model(require('./models/products'));
model(app);

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');

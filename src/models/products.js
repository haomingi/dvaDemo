/**
 * Created by 001758 on 2017/7/14.
 */
import dva from 'dva'
//import request from '../utils/request'
import { getUser, editUser } from '../services/products'

export default {
  namespace: 'products',
  state: [],
  reducers: {
    'delete' (state, { payload: id}) {
      return state.filter(item => item.id !== id)
    },
    'add' (state, { payload: result}) {
      //console.log(result)
      return result
    }
  },
  effects: {
    *fetch({ payload: page }, { put, call }) {
      try {
        //const result = yield call(request, '/hm')
        //yield put({type: 'add', payload: result.data})
        //例子中的分页数据不存在
        //const { data } = yield call(request, '/api/users?_page=' + page + '&_limit=5')
        const { data } = yield call(getUser)
        console.log(data)
        yield put({type: 'add', payload: data})
      } catch(e) {
        console.log(e.message);
      }
    },
    *patch ({ payload: { id, values } }, { select, call, put }) {
      yield call(editUser, id, values)
    }
  },
  subscriptions: {
    setup ({ dispatch, history }, done) {
      //console.log('11')
      //此方法页面进入时候调用，但是页面切换时不会调用，history绑定路由监控，name=products时运行
      history.listen(({ pathname, query }) => {
        if (pathname === '/products') {
          dispatch({
            type: 'fetch'
          })
        }
      })
      done()
    },
    cc () {
      console.log('test')
    }
  },
}

// import { routerRedux } from 'dva/router'
// import { parse } from 'qs'
import { config } from '../utils'
// import { getService } from 'services/app'
// import { parse } from 'query-string'

const { prefix } = config

export default {
  namespace: 'app',
  state: {
    siderFold: window.localStorage.getItem(`${prefix}siderFold`) === 'true',
    darkTheme: window.localStorage.getItem(`${prefix}darkTheme`) === 'true',
    isNavbar: document.body.clientWidth < 769,
    navOpenKeys: JSON.parse(window.localStorage.getItem(`${prefix}navOpenKeys`)+'') || [],
  },
  subscriptions: {

    setup ({ dispatch }: any) {
    },

  },
  reducers: {
    updateState (state: any, { payload }: any) {
      return {
        ...state,
        ...payload,
      }
    },

    switchSider (state: any) {
      window.localStorage.setItem(`${prefix}siderFold`, !state.siderFold+ '')
      return {
        ...state,
        siderFold: !state.siderFold,
      }
    },

    handleNavOpenKeys (state: any, { payload: navOpenKeys }: any) {
      return {
        ...state,
        ...navOpenKeys,
      }
    },
    logout (state: any) {
      window.localStorage.clear();
      window.location.href = '/'
    },
  },
  effects: {

  },
}

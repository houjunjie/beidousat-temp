import modelExtend from 'dva-model-extend'
import { ICommonState } from '@/interfaces/common'

export const model = {
  reducers: {
    updateState (state: any, { payload }: any) {
      return {
        ...state,
        ...payload,
      }
    },
  },
}
export const pageModel = modelExtend(model, {

  state: {
    list: [],
    pagination: {
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: (total: string) => `共 ${total} 条数据`,
      current: 1,
      total: 0,
      pageSize: 10,
    },
    searchValue: '',
  },

  reducers: {
    querySuccess (state: ICommonState, { payload }: any) {
      const { list, pagination } = payload
      return {
        ...state,
        list,
        pagination: {
          ...state.pagination,
          ...pagination,
        },
      }
    },
  },

})


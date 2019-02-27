import * as types from './../types'
const state = {
  collapse: false
}

const mutations = {
  [types.CONTROL_COLLAPSE] (state, res) {
    state.collapse = res
  }
}

export default {
  state,
  mutations
}

import { Module } from 'vuex'
import state, { State } from './state'
import { State as RootState } from '../state'
import { mutations } from './mutations'
import { getters } from './getters'
import { actions } from './actions'

const module: Module<State, RootState> = {
  state,
  actions,
  getters,
  mutations,
}

export default module

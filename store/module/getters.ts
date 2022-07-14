import { GetterTree } from 'vuex'
import { State } from './state'
import { State as RootState } from '../state'

export type Getters = {
  // loggedIn(state: State): boolean
}

export const getters: GetterTree<State, RootState> & Getters = {
  // loggedIn: state => state.access_token != null && state.user.id != null
}

export default getters

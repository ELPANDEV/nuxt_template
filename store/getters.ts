import { GetterTree } from 'vuex'
import { State } from './state'

export type Getters = {
  // loggedIn(state: State): boolean
}

export const getters: GetterTree<State, State> & Getters = {
  // loggedIn: state => state.access_token != null && state.user.id != null
}

export default getters

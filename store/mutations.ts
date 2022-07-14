import { MutationTree } from 'vuex'
import { State } from './state'

export enum AppMutationTypes {
  // USERS_FILL         = 'USERS_FILL',
}

export type Mutations<S = State> = {
  // [DBMutationTypes.USERS_FILL]        (state: S, payload: Array<User>)       : void
}

export const mutations: MutationTree<State> & Mutations = {
  // [DBMutationTypes.USERS_FILL](state, users) {
  //   state.users = users
  // },
}

export default mutations
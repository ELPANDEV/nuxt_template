import Vue from 'vue'
import Vuex, {
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
} from 'vuex'
import { State, state } from './state'
import { Actions, actions } from './actions'
import { Getters, getters } from './getters'
import { Mutations, mutations } from './mutations'
import module from './module'
import { State     as ModuleState     } from './module/state'
import { Actions   as ModuleActions   } from './module/actions'
import { Getters   as ModuleGetters   } from './module/getters'
import { Mutations as ModuleMutations } from './module/mutations'

Vue.use(Vuex)

export const store = new VuexStore({
  state,
  actions,
  getters,
  mutations,
  modules: {
    module
  }
})

type AppState     = State     & { auth: ModuleState }
type AppActions   = Actions   & ModuleActions
type AppGetters   = Getters   & ModuleGetters
type AppMutations = Mutations & ModuleMutations

export type Store = Omit<
  VuexStore<AppState>,
  'commit'|'getters'|'dispatch'
> &
{
  dispatch<K extends keyof AppActions>(
    key: K,
    payload?: Parameters<AppActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<AppActions[K]>
} & {
  commit<K extends keyof AppMutations, P extends Parameters<AppMutations[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<AppMutations[K]>
} &
{
  getters: {
    [K in keyof AppGetters]: ReturnType<AppGetters[K]>
  }
}

export const strict = false

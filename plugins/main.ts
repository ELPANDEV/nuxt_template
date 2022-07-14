import Vue from 'vue'
import UUID, { uuid } from 'vue-uuid'
import mixin_uuid from '@/mixins/mixin_uuid';
import { Store, store } from '~/store';

//#region plugins

Vue.use(UUID as any)
Vue.mixin(mixin_uuid)

//#endregion
//#region proptotypes

Vue.prototype.store = store

//#endregion
//#region types

declare module 'vue/types/vue' {
  interface Vue {
    uuid:  string
    $uuid: typeof uuid
    store: Store
  }
}
//#endregion

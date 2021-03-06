// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire';
import Firebase from 'firebase';
import App from './App'
import router from './router'
import Quasar from 'quasar-framework'

import 'quasar-extras/roboto-font';
import 'quasar-extras/material-icons';
import 'quasar-framework/dist/quasar.ios.css';

import { QModal, QPopover, QCardActions, QCardSeparator, QItemMain, QRadio, QItemSeparator, QSpinnerDots, QInput, QCard, QTooltip, QBtn, QCheckbox, QIcon, QToolbar, QToolbarTitle, QTooltipQCard, QCardTitle, ListEntry, QField, QList, QItem, QItemSide, QItemTile  } from 'quasar-framework';
import apolloProvider from './apollo';

Vue.config.productionTip = false

Vue.use(VueFire);
Vue.use(Quasar, {
  components: {
    QBtn,
    QCheckbox,
    QIcon,
    QToolbar,
    QToolbarTitle,
    QTooltip,
    QCard,
    QCardTitle,
    QField,
    QList,
    QItem,
    QItemSide,
    QItemTile,
    QInput,
    QSpinnerDots,
    QItemSeparator,
    QRadio,
    QItemMain,
    QCardSeparator,
    QCardActions,
    QPopover,
    QModal
  }
})
// Vue.prototype.$foo = "bar";
// Vue.prototype.$closeOverlay = CloseOverlay
/* eslint-disable no-new */

// const FirebaseApp = Firebase.initializeApp({
//   apiKey: "AIzaSyC25drYCmzu1DGeAievytu-OlBF6IOGjrA",
//   authDomain: "vue-to-do-list.firebaseapp.com",
//   databaseURL: "https://vue-to-do-list.firebaseio.com",
//   projectId: "vue-to-do-list",
//   storageBucket: "vue-to-do-list.appspot.com",
//   messagingSenderId: "226681440867"
// });
//
// const db = FirebaseApp.database()


new Vue({
  el: '#app',
  apolloProvider,
  // firebase: {
  //   todoArray: db.ref('1')
  // },
  router,
  components: { App },
  template: '<App/>',
  // props: ['random']
  // render: h => h(App),
})

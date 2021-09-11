import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'

Vue.config.productionTip = false;
Vue.component('LikeNumber', LikeNumber);
// Vue.directive('border', {
//   bind(el, binding, vnode) {
//     // 初めて対象に紐づいた時
//   },
//   inserted(el, binding, vnode) {
//     // 親Nodeに挿入された時
//   },
//   update(el, binding, oldVnode) {
//     // コンポーネントが更新されるたび。子が更新される前
//   },
//   componentUpdated(el, binding, oldVnode) {
//     // コンポーネントが更新されるたび。子が更新された後
//   },
//   unbind(el, binding, vnode) {
//     // ディレクティブが紐づいている要素から取り除かれた時
//   },
// });

// main.jsへ移植
// Vue.directive('border', function(el, binding) {
//   el.style.borderWidth = binding.value.width; // valueはオブジェクトを取得
//   el.style.color = binding.value.color; // valueはオブジェクトを取得
//   el.style.borderStyle = binding.arg; // argは引数を取得
//   if (binding.modifiers.round) { // modifiersは引数の後ろにある文字列を確認 boolを返す
//     el.style.borderRadius = '1rem';
//   }
//   if (binding.modifiers.shadow) { // modifiersは引数の後ろにある文字列を確認 boolを返す
//     el.style.boxShadow = '5px 5px 5px rgba(0, 0, 0, 0.46)'
//   }
// });

Vue.filter('upperCase', function(value) {
  console.log('フィルタが実行される時');
  return value.toUpperCase();
});
Vue.mixin({
  created() {
    console.log('global mixin');
  }
})

new Vue({
  render: h => h(App)
}).$mount('#app')

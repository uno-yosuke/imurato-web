import Vue from 'vue'

Vue.directive('animation', {
  bind(el, binding) {
    if (!binding.arg) return

    // Moduleを動的に読み込む
    const Module = require(`../assets/js/anime/${binding.arg}`).default
    // bindingにインスタンスをぶら下げる
    binding.customAnime = new Module(el, binding.value)
    const f = binding.customAnime.anime()
  },
  inserted: function (el, binding) {
    const f = function() {
      if (binding?.customAnime) binding.customAnime.anime()
    }
  }

})
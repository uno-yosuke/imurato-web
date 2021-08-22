import TweenMax from 'gsap'

export default class {
  constructor(el) {
    this.el = el
    this.init()
  }

  init() {
    TweenMax.set(this.el, {
      alpha: 0,
      y: 100,
    })
  }

  anime() {
    TweenMax.to(this.el, 2, {
      alpha: 1,
      y: 0,
    })
    // const f =  function(){
    //   console.log("横スクロール：" + window.scrollX);
    //   console.log("縦スクロール：" + window.scrollY);
    //   if (window.scrollY >= 200) {
    //     TweenMax.to(this.el, 2, {
    //       alpha: 1,
    //       y: 0,
    //     })
    //     // スクロールイベント解除
    //     window.removeEventListener('scroll',f)
    //   }
    // }
    // window.addEventListener('scroll',f);
  }
}
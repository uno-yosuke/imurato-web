import TweenMax from 'gsap'
export default class {
  constructor(el, value) {
    this.el = el
    this.delay = value.delay
    this.init()
  }

  init() {
    TweenMax.set(this.el, {
      alpha: 0,
      x: -200,
    })
  }

  anime() {
    const tween = TweenMax.to(this.el, this.delay, {
      alpha: 1,
      x: 0,
    })
    window.addEventListener('load', tween)
  }
}
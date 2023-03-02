<<<<<<< HEAD
import { prepareRunChecker } from "../../../../lib/shared/util.js";

const { shouldRun: scrollShouldRun } = prepareRunChecker({ timerDelay: 450 });
const { shouldRun: clickShouldRun } = prepareRunChecker({ timerDelay: 80 });
export default class HandGestureController {
  #view;
  #service;
  #camera;
  #lastDirection = {
    direction: "",
    y: 0,
  };
  constructor({ view, service, camera }) {
    this.#view = view;
    this.#service = service;
    this.#camera = camera;
  }

  async init() {
    return this.#loop();
  }

  #scrollPage(direction) {
    const pixelsPerScroll = 200;
    if (this.#lastDirection.direction === direction) {
      this.#lastDirection.y =
        direction === "scroll-down"
          ? this.#lastDirection.y + pixelsPerScroll
          : this.#lastDirection.y - pixelsPerScroll;
    } else {
      this.#lastDirection.direction = direction;
    }

    this.#view.scrollPage(this.#lastDirection.y);
  }

  async #estimateHands() {
    try {
      const hands = await this.#service.estimateHands(this.#camera.video);
      this.#view.clearCanvas();

      if (hands?.length) this.#view.drawResult(hands);

      for await (const { event, x, y } of this.#service.detectGestures(hands)) {
        if (event == "click") {
          if (!clickShouldRun()) continue;
          this.#view.clickOnElement(x, y);
          continue;
        }
        if (event.includes("scroll")) {
          if (!scrollShouldRun()) continue;
          this.#scrollPage(event);
        }
      }
    } catch (error) {
      console.error("error: ", error);
=======
import { prepareRunChecker } from "../../../../lib/shared/util.js"

const { shouldRun: scrollShouldRun } = prepareRunChecker({ timerDelay: 200 })
const { shouldRun: clickShouldRun } = prepareRunChecker({ timerDelay: 300 })
export default class HandGestureController {
  #view
  #service
  #camera
  #lastDirection = {
    direction: '',
    y: 0
  }

  constructor({ view, service, camera }) {
    this.#service = service
    this.#view = view
    this.#camera = camera
  }
  async init() {
    return this.#loop()
  }

  #scrollPage(direction) {
    const pixelsPerScroll = 100
    if (this.#lastDirection.direction === direction) {
      this.#lastDirection.y = (
        direction === 'scroll-down' ?
          this.#lastDirection.y + pixelsPerScroll :
          this.#lastDirection.y - pixelsPerScroll
      )
    }
    else {
      this.#lastDirection.direction = direction
    }

    this.#view.scrollPage(this.#lastDirection.y)

  }
  async #estimateHands() {
    try {
      const hands = await this.#service.estimateHands(this.#camera.video)
      this.#view.clearCanvas()

      if (hands?.length) this.#view.drawResults(hands)

      for await (const { event, x, y } of this.#service.detectGestures(hands)) {
        if (event === 'click') {
          if (!clickShouldRun()) continue
          this.#view.clickOnElement(x, y)

          continue
        }

        if (event.includes('scroll')) {
          if (!scrollShouldRun()) continue
          this.#scrollPage(event)
        }
      }

    } catch (error) {
      console.error('deu ruim**', error)
>>>>>>> 9c11bdbb9d2ecfb31412c2a7f109e42857c1a0ad
    }
  }

  async #loop() {
<<<<<<< HEAD
    await this.#service.initializeDetector();
    await this.#estimateHands();
    this.#view.loop(this.#loop.bind(this));
  }

  static async initialize(deps) {
    const controller = new HandGestureController(deps);
    return controller.init();
  }
}
=======
    await this.#service.initializeDetector()
    await this.#estimateHands()
    this.#view.loop(this.#loop.bind(this))

  }
  static async initialize(deps) {
    const controller = new HandGestureController(deps)
    return controller.init()
  }
}
>>>>>>> 9c11bdbb9d2ecfb31412c2a7f109e42857c1a0ad

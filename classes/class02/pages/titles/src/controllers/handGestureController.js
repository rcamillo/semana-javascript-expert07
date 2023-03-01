<<<<<<< HEAD
import { prepareRunChecker } from "../../../../lib/shared/util.js";

const { shouldRun: scrollShouldRun } = prepareRunChecker({ timerDelay: 400 });
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
    const pixelsPerScroll = 300;
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

      for await (const { event, x, y } of this.#service.detectGestures(hands)) {
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
      for await (const { event, x, y } of this.#service.detectGestures(hands)) {
        if (event.includes('scroll')) {
          if(!scrollShouldRun()) continue;
          this.#scrollPage(event)
        }
      }

    } catch (error) {
      console.error('deu ruim**', error)
>>>>>>> 472341e72f4c1870db8e30ec07fdc59b0f7c4101
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
>>>>>>> 472341e72f4c1870db8e30ec07fdc59b0f7c4101

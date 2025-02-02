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
    }
  }

  async #loop() {
    await this.#service.initializeDetector();
    await this.#estimateHands();
    this.#view.loop(this.#loop.bind(this));
  }

  static async initialize(deps) {
    const controller = new HandGestureController(deps);
    return controller.init();
  }
}

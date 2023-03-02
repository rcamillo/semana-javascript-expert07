export default class HandGestureService {
<<<<<<< HEAD
  #gestureEstimator;
  #handPoseDetection;
  #handsVersion;
  #detector = null;
  #gestureStrings;
  constructor({
    fingerpose,
    handPoseDetection,
    handsVersion,
    knownGestures,
    gestureStrings,
  }) {
    this.#gestureEstimator = new fingerpose.GestureEstimator(knownGestures);
    this.#handPoseDetection = handPoseDetection;
    this.#handsVersion = handsVersion;
    this.#gestureStrings = gestureStrings;
=======
  #gestureEstimator
  #handPoseDetection
  #handsVersion
  #detector = null
  #gestureStrings

  constructor({ fingerpose, handPoseDetection, handsVersion, gestureStrings, knownGestures }) {
    this.#gestureEstimator = new fingerpose.GestureEstimator(knownGestures)
    this.#handPoseDetection = handPoseDetection
    this.#handsVersion = handsVersion
    this.#gestureStrings = gestureStrings
>>>>>>> 9c11bdbb9d2ecfb31412c2a7f109e42857c1a0ad
  }

  async estimate(keypoints3D) {
    const predictions = await this.#gestureEstimator.estimate(
      this.#getLandMarksFromKeypoints(keypoints3D),
<<<<<<< HEAD
      9, // trust percentage (90%)
    );
    return predictions.gestures;
  }

  async *detectGestures(predictions) {
    for (const hand of predictions) {
      if (!hand.keypoints3D) continue;

      const gestures = await this.estimate(hand.keypoints3D);
      if (!gestures.length) continue;

      const result = gestures.reduce((prev, next) =>
        prev.score > next ? prev : next,
      );

      console.log("detected ", this.#gestureStrings[result.name]);

      const { x, y } = hand.keypoints.find(
        (keypoint) => keypoint.name === "index_finger_tip",
      );
      yield { event: result.name, x, y };
=======
      // porcentagem de confiança do gesto (90%)
      9
    )
    return predictions.gestures
  }

  async * detectGestures(predictions) {

    for (const hand of predictions) {
      if (!hand.keypoints3D) continue

      const gestures = await this.estimate(hand.keypoints3D)
      if (!gestures.length) continue

      const result = gestures.reduce(
        (previous, current) => (previous.score > current.score) ? previous : current
      )
      const { x, y } = hand.keypoints.find(keypoint => keypoint.name === 'index_finger_tip')
      yield { event: result.name, x, y }

      console.log('detected', this.#gestureStrings[result.name])
>>>>>>> 9c11bdbb9d2ecfb31412c2a7f109e42857c1a0ad
    }
  }

  #getLandMarksFromKeypoints(keypoints3D) {
<<<<<<< HEAD
    return keypoints3D.map((keyPoint) => [keyPoint.x, keyPoint.y, keyPoint.z]);
=======
    return keypoints3D.map(keypoint =>
      [keypoint.x, keypoint.y, keypoint.z]
    )
>>>>>>> 9c11bdbb9d2ecfb31412c2a7f109e42857c1a0ad
  }

  async estimateHands(video) {
    return this.#detector.estimateHands(video, {
<<<<<<< HEAD
      flipHorizontal: true,
    });
  }

  async initializeDetector() {
    if (this.#detector) return this.#detector;

    const detectorConfig = {
      runtime: "mediapipe", // or 'tfjs',
      solutionPath: `https://cdn.jsdelivr.net/npm/@mediapipe/hands@${
        this.#handsVersion
      }`,
      modelType: "lite", // full é o mais pesado e mais preciso
      maxHands: 2,
    };
    this.#detector = await this.#handPoseDetection.createDetector(
      this.#handPoseDetection.SupportedModels.MediaPipeHands,
      detectorConfig,
    );

    return this.#detector;
  }
}
=======
      flipHorizontal: true
    })
  }

  async initializeDetector() {
    if (this.#detector) return this.#detector

    const detectorConfig = {
      runtime: 'mediapipe', // or 'tfjs',
      solutionPath: `https://cdn.jsdelivr.net/npm/@mediapipe/hands@${this.#handsVersion}`,
      // full é o mais pesado e o mais preciso
      modelType: 'lite',
      maxHands: 2,
    }
    this.#detector = await this.#handPoseDetection.createDetector(
      this.#handPoseDetection.SupportedModels.MediaPipeHands,
      detectorConfig
    )

    return this.#detector
  }
}
>>>>>>> 9c11bdbb9d2ecfb31412c2a7f109e42857c1a0ad

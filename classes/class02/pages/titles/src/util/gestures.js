<<<<<<< HEAD
const { GestureDescription, Finger, FingerCurl } = window.fp;

const ScrollDownGesture = new GestureDescription("scroll-down"); // ✊️
const ScrollUpGesture = new GestureDescription("scroll-up"); // 🖐
const ScissorsGesture = new GestureDescription("scissors"); // ✌️
const RockGesture = new GestureDescription("rock"); // 🤘
const OKGesture = new GestureDescription("ok"); // 🤘

// Rock
=======
const { GestureDescription, Finger, FingerCurl } = window.fp

const ScrollDownGesture = new GestureDescription('scroll-down') // ✊️
const ScrollUpGesture = new GestureDescription('scroll-up') // 🖐


// Scroll Down
>>>>>>> 472341e72f4c1870db8e30ec07fdc59b0f7c4101
// -----------------------------------------------------------------------------

// thumb: half curled
// accept no curl with a bit lower confidence
<<<<<<< HEAD
ScrollDownGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
ScrollDownGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);

// all other fingers: curled
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  ScrollDownGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  ScrollDownGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}

// Paper
=======
ScrollDownGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0)
ScrollDownGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5)

// all other fingers: curled
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  ScrollDownGesture.addCurl(finger, FingerCurl.FullCurl, 1.0)
  ScrollDownGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9)
}


// ScrollUp
>>>>>>> 472341e72f4c1870db8e30ec07fdc59b0f7c4101
// -----------------------------------------------------------------------------

// no finger should be curled
for (let finger of Finger.all) {
<<<<<<< HEAD
  ScrollUpGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
}

// Scissors
//------------------------------------------------------------------------------

// index and middle finger: stretched out
ScissorsGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
ScissorsGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);

// ring: curled
ScissorsGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
ScissorsGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

// pinky: curled
ScissorsGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
ScissorsGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);

// Rock Sinal
//------------------------------------------------------------------------------

// index and pinky finger: stretched out
RockGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
RockGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);

// all other fingers: curled
for (let finger of [Finger.Thumb, Finger.Middle, Finger.Ring]) {
  RockGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  RockGesture.addCurl(finger, FingerCurl.HalfCurl, 0.5);
}

// OK Sinal
//------------------------------------------------------------------------------

OKGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
OKGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.9);

// all other fingers: curled
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  OKGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  OKGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}
=======
  ScrollUpGesture.addCurl(finger, FingerCurl.NoCurl, 1.0)
}

>>>>>>> 472341e72f4c1870db8e30ec07fdc59b0f7c4101

const knownGestures = [
  ScrollDownGesture,
  ScrollUpGesture,
<<<<<<< HEAD
  ScissorsGesture,
  RockGesture,
  OKGesture,
];

const gestureStrings = {
  "scroll-up": "🖐",
  "scroll-down": "✊️",
  scissors: "✌️",
  rock: "🤘",
  ok: "👍",
};

export { knownGestures, gestureStrings };
=======
]

const gestureStrings = {
  'scroll-up': '🖐',
  'scroll-down': '✊️'
}

export {
  knownGestures,
  gestureStrings
}
>>>>>>> 472341e72f4c1870db8e30ec07fdc59b0f7c4101

import {
  FRAME_1,
  FRAME_2,
  FRAME_3,
  FRAME_4,
  FRAME_5,
  FRAME_6,
  FRAME_7,
  FRAME_8,
  FRAME_9
} from "./constants";

export const currentFrame = (index) => {
  if (index < FRAME_1) {
    return `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index
      .toString()
      .padStart(4, "0")}.jpg`;
  } else if (index < FRAME_2) {
    return `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/02-head-bob-turn/${(
      index - FRAME_1
    )
      .toString()
      .padStart(4, "0")}.jpg`;
  } else if (index < FRAME_3) {
    return `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/03-flip-for-guts/${(
      index - FRAME_2
    )
      .toString()
      .padStart(4, "0")}.jpg`;
  } else if (index < FRAME_4) {
    return `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/04-explode-tips/${(
      index - FRAME_3
    )
      .toString()
      .padStart(4, "0")}.jpg`;
  } else if (index < FRAME_5) {
    return `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/05-flip-for-nc/${(
      index - FRAME_4
    )
      .toString()
      .padStart(4, "0")}.jpg`;
  } else if (index < FRAME_6) {
    return `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/06-transparency-head/${(
      index - FRAME_5
    )
      .toString()
      .padStart(4, "0")}.jpg`;
  } else if (index < FRAME_7) {
    return `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/07-flip-reveal-guts/${(
      index - FRAME_6
    )
      .toString()
      .padStart(4, "0")}.jpg`;
  } else if (index < FRAME_8) {
    return `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/08-turn-for-chip/${(
      index - FRAME_7
    )
      .toString()
      .padStart(4, "0")}.jpg`;
  } else if (index < FRAME_9) {
    return `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/09-scoop-turn/${(
      index - FRAME_8
    )
      .toString()
      .padStart(4, "0")}.jpg`;
  } else {
    return `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/10-fall-into-case/${(
      index - FRAME_9
    )
      .toString()
      .padStart(4, "0")}.jpg`;
  }
};

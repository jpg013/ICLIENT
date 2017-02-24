import { Map } from 'immutable';

let scheduledRequests = Map();

/**
  * Easing Functions
  */

function _easeOutCubic(currentIteration, startValue, changeInValue, totalIterations) {
  return changeInValue * (Math.pow(currentIteration / totalIterations - 1, 3) + 1) + startValue;
}

const _isAnimationOver = (delta, curVal, endVal) => (delta < 0) ? (curVal <= endVal) : (curVal >= endVal);

function requestAnimation(toVal, fromVal, duration, animationId, animationHandler) {
  let iterationCount = 0;
  const totalIterations = 60 * duration;
  const delta = toVal - fromVal;
  let curVal = fromVal;

  const existingRequestId = scheduledRequests.get(animationId);
  if (existingRequestId !== undefined) {
    cancelAnimationFrame(existingRequestId);
    scheduledRequests = scheduledRequests.delete(existingRequestId);
  }

  const _animateFrame = () => {
    const requestId = requestAnimationFrame(_animateFrame);
    scheduledRequests = scheduledRequests.set(animationId, requestId);

    if (_isAnimationOver(delta, curVal, toVal)) {
      cancelAnimationFrame(requestId);
      scheduledRequests = scheduledRequests.delete(existingRequestId);
      return;
    }

    curVal = _easeOutCubic(iterationCount, fromVal, delta, totalIterations);
    animationHandler(curVal);
    iterationCount += 1;
  }
  _animateFrame();
}

export {
  requestAnimation
};

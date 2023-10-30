import ScrollWithAnimationTo from './types';
const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
const cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

let animationId = 0;

const scrollWithAnimationTo: ScrollWithAnimationTo = (container, position, duration = 200) => {
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = 0;
    }

    const element: HTMLElement = container.getScrollableNode() as unknown as HTMLElement;
    let distanceToMove = position - element.scrollTop;
    if (distanceToMove === 0) {
        return;
    }
    let startTime = 0;
    let startPosition = element.scrollTop;
    const step = (timestamp: number) => {
        if (!startTime) {
            startTime = timestamp;
        }
        const elapsedTime = Math.min(timestamp - startTime, duration);
        const distance = distanceToMove * elapsedTime / duration;
        element.scrollTop = startPosition + distance;
        if (elapsedTime < duration) {
            animationId = requestAnimationFrame(step);
        } else {
            animationId = 0;
        }
    }

    requestAnimationFrame(step);
}

export default scrollWithAnimationTo;

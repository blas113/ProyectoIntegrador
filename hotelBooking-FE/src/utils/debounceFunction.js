export default function debounce(fn, delay) {
  let timerId;

  return function() {
    const self = this;
    const args = arguments;

    clearTimeout(timerId);
    
    timerId = setTimeout(() => {
      fn.apply(self, args);
    }, delay)
  }
}
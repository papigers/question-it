export default function debounce(method, delay) {
  let timeout;
  return (...args) => {
    const context = this;
    const later = () => {
      timeout = null;
      method.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, delay);
  };
}

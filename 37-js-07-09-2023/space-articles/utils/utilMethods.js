
export const getLastPathValue = (event) => {
  return event?.target?.location?.pathname.split('/').at(-1);
}

export const debounce = (func, delay) => {
  let debounceTimer;
  return function() {
      const context = this;
      const args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
  }
}
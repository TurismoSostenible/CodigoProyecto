import React from 'react';

function debounce(fn, ms) {
  let timer
  return _ => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments);
    }, ms);
  };
}

const useResponsive = (size) => {
  const [dimension, setDimension] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimension(window.innerWidth);
    }, 100);

    window.addEventListener('resize', debouncedHandleResize)

    return _ => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  });
  return dimension>size;
}

export default useResponsive;
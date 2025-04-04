import { useState, useEffect } from 'react';

function getAppSize() {
  if (window.innerWidth < 768) return 'mobile';
  if (window.innerWidth < 1024) return 'tablet';
  return 'desktop';
}

export function useAppSize() {
  const [appSize, setAppSizeState] = useState(getAppSize());
  const [manualOverride, setManualOverride] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (!manualOverride) {
        setAppSizeState(getAppSize());
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [manualOverride]);

  function setAppSize(value) {
    setAppSizeState(value);
    setManualOverride(true);
  }

  return [appSize, setAppSize, setManualOverride];
}

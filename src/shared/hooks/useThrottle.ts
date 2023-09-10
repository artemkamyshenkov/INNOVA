import { useCallback, useState } from 'react';

export function useThrottle(callback: (...args: any[]) => void, delay: number) {
  const [throttle, setThrottle] = useState(false);
  return useCallback(
    (...args: any[]) => {
      if (!throttle) {
        callback(...args);
        setThrottle(true);

        setTimeout(() => {
          setThrottle(false);
        }, delay);
      }
    },
    [delay, callback],
  );
}

import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

function useMediaQueryHook() {
  const [isClient, setIsClient] = useState(false);

  const isOnlyMobile = useMediaQuery({
    maxWidth: '640px',
  });
  const isMobile = useMediaQuery({
    minWidth: '640px',
  });

  const isTablet = useMediaQuery({
    minWidth: '768px',
  });

  const isDekstop = useMediaQuery({
    minWidth: '1024px',
  });
  const isBigDekstop = useMediaQuery({
    minWidth: '1280px',
  });

  useEffect(() => {
    if (typeof window !== 'undefined') setIsClient(true);
  }, []);

  return {
    isDekstop: isClient ? isDekstop : false,
    isBigDekstop: isClient ? isBigDekstop : false,
    isTablet: isClient ? isTablet : false,
    isMobile: isClient ? isMobile : true,
    isOnlyMobile: isClient ? isOnlyMobile : false,
  };
}

export default useMediaQueryHook;

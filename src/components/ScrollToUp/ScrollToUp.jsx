  // import react hooks
import { useEffect } from 'react';

  // import react router components and hooks 
import { useLocation, ScrollRestoration } from 'react-router-dom';

const ScrollToTop = () => {
    // declare the location to know if change
  const location = useLocation();

    // scroll to the top of the page whenever the route changes
  useEffect(() => {      
    document.getElementById("mainScroll")?.scrollTo(0, 0)
  }, [location]);

  return <ScrollRestoration />;
};

export default ScrollToTop;

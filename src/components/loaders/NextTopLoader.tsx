'use client';

import Loader from 'nextjs-toploader';
import { useEffect } from 'react';
import NProgress from 'nprogress';

const NextTopLoader = () => {
  useEffect(() => {
    NProgress.done();
  }, []);

  return (
    <Loader
      color="#2a1ad6"
      initialPosition={0.08}
      crawlSpeed={600}
      height={10}
      crawl={true}
      showSpinner={true}
      easing="ease"
      speed={300}
      shadow="0 0 10px #494fc8 0 0 5px #494fc8"
      template='<div class="bar" role="bar"><div class="peg"></div></div> 
<div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
      zIndex={1600}
      showAtBottom={false}
    />
  );
};

export default NextTopLoader;

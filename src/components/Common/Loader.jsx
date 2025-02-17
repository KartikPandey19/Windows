import React from 'react';
import {LoaderSVG } from '/windows.svg'

const Loader = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
          <img src={windowsLogo} alt="Loading..." className="animate-spin w-16 h-16" />
        </div>
      );
};

export default Loader;
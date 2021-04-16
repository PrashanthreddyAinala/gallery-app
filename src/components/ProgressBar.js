import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

function ProgressBar({ input, setInput }){
  const { progress, url } = useStorage(input);

  useEffect(() => {
    if (url) {
      setInput(null);
    }
  }, [url, setInput]);

  return (
      <div style={{width : progress + '%', height: 2}} className="progress-bar"></div>
  );
} 

export default ProgressBar;
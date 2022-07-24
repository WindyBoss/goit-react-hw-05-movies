import React, { useState } from 'react';

export function ImageWithFallback({ fallback, src, ...props }) {
  const [imgSrc, setImgSrc] = useState(src);
  const onError = () => setImgSrc(fallback);

  return <img src={imgSrc ? imgSrc : fallback} onError={onError} {...props} />;
}

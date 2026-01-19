import React from 'react';
import { usePageImage } from '../context/PageImageContext';

const CoverImage: React.FC = () => {
  const image = usePageImage();

  if (!image) {
    return null;
  }

  return (
    <div className="cover-image-wrapper" style={{ marginBottom: '2rem' }}>
      <img
        src={image}
        alt="Page Cover"
        style={{
          width: '100%',
          maxHeight: '400px',
          objectFit: 'cover',
          borderRadius: '8px',
        }}
      />
    </div>
  );
};

export default CoverImage;

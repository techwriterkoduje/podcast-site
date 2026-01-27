import { usePageImage } from '@site/src/context/PageImageContext';

export default function CoverImage() {
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
}

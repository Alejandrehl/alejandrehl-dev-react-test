import React, { useState } from "react";

const PhotoCard = ({ photo }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="photo-card">
      <div className="line-container">
        <div className="single-line">{photo.title}</div>
      </div>
      {loading && <div className="loader" />}
      <a href={photo.url} target="_blank" rel="noopener noreferrer">
        <img
          src={photo.thumbnailUrl}
          alt="Acid Lab React Dev Test"
          onLoad={() => setLoading(false)}
        />
      </a>
    </div>
  );
};

export default PhotoCard;

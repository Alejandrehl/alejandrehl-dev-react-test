import React, { useContext } from "react";
import PhotoContext from "../../context/photo/photoContext";
import PhotoCard from "../cards/PhotoCard";

const PhotoList = () => {
  const photoContext = useContext(PhotoContext);
  const { photos, loading } = photoContext;

  return (
    <div className="container">
      {loading ? (
        <div className="loader" />
      ) : (
        photos.map(photo => <PhotoCard key={photo.id} photo={photo} />)
      )}
    </div>
  );
};

export default PhotoList;

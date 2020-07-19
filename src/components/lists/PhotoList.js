import React, { useContext } from "react";
import PhotoContext from "../../context/photo/photoContext";
import PhotoCard from "../cards/PhotoCard";
import PrimarySpinner from "../loaders/PrimarySpinner";

const PhotoList = () => {
  const photoContext = useContext(PhotoContext);
  const { photos, loading } = photoContext;

  return (
    <div className="container">
      {loading ? (
        <PrimarySpinner />
      ) : (
        photos.map(photo => <PhotoCard key={photo.id} photo={photo} />)
      )}
    </div>
  );
};

export default PhotoList;

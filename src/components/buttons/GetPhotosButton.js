import React, { useContext, useState, useEffect } from "react";
import PhotoContext from "../../context/photo/photoContext";

const GetPhotosButton = () => {
  const [isGraphql, setIsGraphql] = useState(false);
  const photoContext = useContext(PhotoContext);
  const { getPhotos } = photoContext;

  useEffect(() => {
    getPhotos(isGraphql);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isGraphql]);

  const handleOnClick = () => setIsGraphql(!isGraphql);

  return (
    <button className="get-button" onClick={handleOnClick}>
      {!isGraphql ? "Obtener con GraphQL" : "Obtener con Rest"}
    </button>
  );
};

export default GetPhotosButton;

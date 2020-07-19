import React, { useReducer } from "react";
import PhotoContext from "./photoContext";
import photoReducer from "./photoReducer";
import { GET_PHOTOS, SET_LOADING } from "../types";
import { restClient, graphqlClient } from "../../utils/clients";

const PhotoState = ({ children }) => {
  const initialState = {
    photos: [],
    loading: false
  };
  const [state, dispatch] = useReducer(photoReducer, initialState);

  const getPhotos = isGraphql => {
    setLoading();

    if (!isGraphql) {
      return restClient
        .then(res => res.clone().json())
        .then(json =>
          dispatch({ type: GET_PHOTOS, payload: json.slice(0, 12) })
        )
        .catch(err => console.log("REST CLIENT ERROR", err));
    }

    graphqlClient
      .then(res =>
        dispatch({
          type: GET_PHOTOS,
          payload: res.data.photos.data.slice(12, 24)
        })
      )
      .catch(err => console.log("GRAPHQL CLIENT ERROR", err));
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <PhotoContext.Provider value={{ ...state, getPhotos }}>
      {children}
    </PhotoContext.Provider>
  );
};

export default PhotoState;

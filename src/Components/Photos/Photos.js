import React, { useEffect } from "react";
import Image from "./Image";
import fakeData from "../../Fakedata/fakedata";
import { useSelector, useDispatch } from "react-redux";
import { setAllPhotos } from "../../Redux/actions";

function Photos() {
  const allPhotos = useSelector((state) => state.allPhotos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAllPhotos(fakeData));
  }, [dispatch]);

  function getClass(i) {
    if (i % 5 === 0) {
      return "big";
    } else if (i % 6 === 0) {
      return "wide";
    }
  }

  const imageElements = allPhotos.map((img, i) => (
    <Image key={img.id} img={img} className={getClass(i)} />
  ));

  return <main className="photos">{imageElements}</main>;
}

export default Photos;

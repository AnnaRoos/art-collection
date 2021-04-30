import React, {useState} from 'react';

import firebase from 'firebase/app';
import 'firebase/storage';

import styles from './UploadImageInput.module.css';


const UploadImageInput = () => {
  const storage = firebase.storage();
  const storageRef = storage.ref();
  const imagesRef = storageRef.child('images');
  const [image, setImage] = useState();



  const uploadImage = async () => {
    imagesRef.put(image).then((snapshot) => {
      console.log(snapshot);
    });
  };

  return (
    <div className={styles.imageInput}>
      <label htmlFor="image">Choose an image: </label>
      <input
        type="file"
        id="image"
        name="image"
        accept="image/png, image/jpeg"
        onChange={(e) => setImage(e.target.value)}
      ></input>
      <button type="submit" onClick={uploadImage}>
        Submit
      </button>
    </div>
  );
};

export default UploadImageInput;



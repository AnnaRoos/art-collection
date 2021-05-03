import React, { useState } from 'react';

import firebase from 'firebase/app';
import 'firebase/storage';

import styles from './UploadImageInput.module.css';

const UploadImageInput = () => {

  const [image, setImage] = useState();

  const storage = firebase.storage();
  const storageRef = storage.ref();

  // Create the file metadata
  const metadata = {
    contentType: 'image/jpeg',
  };


  const uploadImage = async (event) => {
    event.preventDefault();
    const uploadTask = storageRef
      .child('images/' + image.name)
      .put(image, metadata);
    
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
          default:
            break;
        }

      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;
          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;
          default:
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log('File available at', downloadURL);
        });
      }
    );
  };

  return (
    <div className={styles.imageInput}>
      <form onSubmit={uploadImage}>
        <label htmlFor="image">Choose an image: </label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/png, image/jpeg"
          onChange={(event) => setImage(event.target.files[0])}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UploadImageInput;





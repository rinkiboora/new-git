// import React, { useState } from 'react';
// import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
// import app from './assets/firebase';

// const ImageFolder = () => {
//   const [uploading, setUploading] = useState(false);
//   const [imageUrl, setImageUrl] = useState('');
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleFileChange = (e) => {
//     const image = e.target.files[0];
//     if (image) {
//       setSelectedImage(image);
//     }
//   };

//   const handleImageUpload = async () => {
//     if (selectedImage) {
//       try {
//         setUploading(true);
//         const storage = getStorage(app);
//         const storageRef = ref(storage, 'images/' + selectedImage.name);
//         await uploadBytes(storageRef, selectedImage);
//         const downloadURL = await getDownloadURL(storageRef);
//         setImageUrl(downloadURL);
//       } catch (error) {
//         console.error('Error uploading image:', error);
//       } finally {
//         setUploading(false);
//       }
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} style={{ display: 'none' }} id="fileInput" />
//       <label htmlFor="fileInput">
//         <button onClick={() => document.getElementById('fileInput').click()}>Select Image</button>
//       </label>
//       <button onClick={handleImageUpload} disabled={uploading || !selectedImage}>
//         {uploading ? 'Uploading...' : 'Upload Image'}
//       </button>
//       {imageUrl && <img src={imageUrl} style={{ maxWidth: 150 }} alt="Uploaded" />}
//     </div>
//   );
// };

// export default ImageFolder;

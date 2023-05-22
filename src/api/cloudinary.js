import { v2 as cloudinary } from 'cloudinary';

// Configuration
cloudinary.config({
  cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.REACT_APP_CLOUDINARY_API_KEY,
  api_secret: process.env.REACT_APP_CLOUDINARY_API_SECRET,
});

export const uploadImage = (imgUrl, imgTitle) => {
  const res = cloudinary.uploader.upload(imgUrl, { public_id: imgTitle });

  res
    .then((data) => {
      console.log(data);
      console.log(data.secure_url);
    })
    .catch((err) => {
      console.log(err);
    });
};

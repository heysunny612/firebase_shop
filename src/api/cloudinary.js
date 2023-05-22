export const uploadImageCloudinary = (file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append(
    'upload_preset',
    process.env.REACT_APP_CLOUDINARY_PRESET_NAME
  );

  const url =
    'https://api.cloudinary.com/v1_1/' +
    process.env.REACT_APP_CLOUDINARY_CLOUD_NAME +
    '/auto/upload';

  return fetch(url, {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => data.url);
};

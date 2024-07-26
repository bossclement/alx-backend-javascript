function uploadPhoto(fileName) {
  if (typeof fileName !== 'string') {
    throw new Error('File name must be a string');
  }
  return Promise.reject(Error(`${fileName} cannot be processed`));
}

export default uploadPhoto;

export const updateCarLocationCreator = commands => {
  return {
    type: 'UPDATE_LOCATION',
    commands,
  };
};

export const fetchPathCreator = () => ({
  type: 'FILE_PATH_FETCH_REQUESTED',
});

export const fetchPathFailure = error => ({
  type: 'FILE_PATH_FETCH_FAILED',
  error,
});

export const fetchPathSuccess = paths => ({
  type: 'FILE_PATH_FETCH_SUCCEEDED',
  paths,
});

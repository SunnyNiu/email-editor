export const updateCarLocationCreator = commands => {
  return {
    type: 'UPDATE_LOCATION',
    commands,
  };
};

export const fetchMovieCreator = () => ({
  type: 'FILE_PATH_FETCH_FAILED_REQUESTED',
});

export const fetchMovieFailure = error => ({
  type: 'FILE_PATH_FETCH_FAILED',
  error,
});

export const fetchPathSuccess = () => ({
  type: 'FILE_PATH_FETCH_SUCCEEDED',
});

export const fetchSectionPathCreator = () => ({
  type: 'FILE_SECTION_PATH_FETCH_REQUESTED',
});

export const fetchSectionPathFailure = error => ({
  type: 'FILE_SECTION_PATH_FETCH_FAILED',
  error,
});

export const fetchSectionPathSuccess = paths => ({
  type: 'FILE_SECTION_PATH_FETCH_SUCCEEDED',
  paths,
});

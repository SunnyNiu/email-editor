export const fetchSectionPathCreator = () => ({
  type: 'FILE_SECTION_PATH_FETCH_REQUESTED',
});

export const fetchSectionPathFailureCreator = error => ({
  type: 'FILE_SECTION_PATH_FETCH_FAILED',
  error,
});

export const fetchSectionPathSuccessCreator = paths => ({
  type: 'FILE_SECTION_PATH_FETCH_SUCCEEDED',
  paths,
});

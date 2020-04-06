import { fetchFile } from './types';

export const fetchSectionPathCreator = () => ({
  type: fetchFile.FILE_SECTION_PATH_FETCH_REQUESTED,
});

export const fetchSectionPathFailureCreator = error => ({
  type: fetchFile.FILE_SECTION_PATH_FETCH_FAILED,
  error,
});

export const fetchSectionPathSuccessCreator = obj => ({
  type: fetchFile.FILE_SECTION_PATH_FETCH_SUCCEEDED,
  obj,
});

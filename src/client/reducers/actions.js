import { fetchFile } from './types';

export const fetchSectionCreator = () => ({
  type: fetchFile.FILE_SECTIONS_FETCH_REQUESTED,
});

export const fetchSectionsFailureCreator = error => ({
  type: fetchFile.FILE_SECTIONS_FETCH_FAILED,
  error,
});

export const fetchSectionsSuccessCreator = sections => ({
  type: fetchFile.FILE_SECTIONS_FETCH_SUCCEEDED,
  sections,
});

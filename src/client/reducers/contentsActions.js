import { v4 as uuidv4 } from 'uuid';
import { fetchEmail, editContent, conversion } from './types';

export const addSectionCreator = (section, index) => {
  // recursively adding id to each widget
  function addIds(root) {
    // eslint-disable-next-line no-param-reassign
    return {
      ...root,
      id: uuidv4(),
      children: root.children.map(x => addIds(x)),
    };
  }
  const newSection = addIds(section);

  // recursively build widgetMap
  const widgetMap = {};
  function buildWidgetMap(root) {
    widgetMap[root.id] = root;
    root.children.forEach(x => buildWidgetMap(x));
  }
  buildWidgetMap(newSection);

  // eslint-disable-next-line no-restricted-syntax
  for (const [, value] of Object.entries(widgetMap)) {
    value.children = value.children.map(x => x.id);
  }

  const sectionWithWidgetMap = {
    ...newSection,
    widgetMap,
  };

  return {
    type: fetchEmail.ADD_SECTION,
    section: sectionWithWidgetMap,
    index,
  };
};

export const fetchEmailCreator = emailId => ({
  type: fetchEmail.FETCH_EMAIL_REQUESTED,
  emailId,
});

export const fetchEmailSuccessCreator = email => ({
  type: fetchEmail.FETCH_EMAIL_SUCCEEDED,
  email,
});

export const fetchEmailFailureCreator = error => ({
  type: fetchEmail.FETCH_EMAIL_FAILED,
  error,
});

export const saveEmailCreator = (emailId, email) => ({
  type: fetchEmail.SAVE_EMAIL_REQUESTED,
  emailId,
  email,
});

export const saveEmailSuccessCreator = () => ({
  type: fetchEmail.SAVE_EMAIL_SUCCEEDED,
});

export const saveEmailFailureCreator = error => ({
  type: fetchEmail.SAVE_EMAIL_FAILED,
  error,
});

export const editSelectedIdCreator = widgetId => ({
  type: editContent.SELECT_WIDGET,
  widgetId,
});

export const updateWidgetValueCreator = (widgetId, value) => ({
  type: editContent.UPDATE_WIDGET,
  widgetId,
  value,
});

export const jsonToHtmlCreator = email => ({
  type: conversion.JSON_TO_XML,
  email,
});

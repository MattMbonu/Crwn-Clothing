import { createSelector } from "reselect";

const selectDir = state => state.directory;

export const selectDirSections = createSelector(
  [selectDir],
  directory => directory.sections
);

import { defineStore, skipHydrate } from 'pinia';

export const useColoredPencilsStore = defineStore('coloredPencils', () => {
  const pencils = [{}];

  return {
    pencils: [{}],
  };
});
